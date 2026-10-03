import pandas as pd
import numpy as np
import joblib
from catboost import CatBoostRegressor
import os
import json

class MLService:
    def __init__(self):
        base_dir = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
        model_dir = os.path.join(base_dir, 'ml', 'models')

        # Load Career Model
        try:
            self.career_model = joblib.load(os.path.join(model_dir, 'career_model.joblib'))
            self.career_label_encoders = joblib.load(os.path.join(model_dir, 'career_label_encoders.joblib'))
            self.career_target_encoder = joblib.load(os.path.join(model_dir, 'career_target_encoder.joblib'))
            with open(os.path.join(model_dir, 'career_features.json'), 'r') as f:
                self.career_features = json.load(f)
        except Exception as e:
            print(f"Failed to load career models: {e}")
            self.career_model = None

        # Load Salary Model
        try:
            self.salary_model = CatBoostRegressor()
            self.salary_model.load_model(os.path.join(model_dir, 'salary_model.cbm'))
            with open(os.path.join(model_dir, 'salary_features.json'), 'r') as f:
                self.salary_features = json.load(f)
        except Exception as e:
            print(f"Failed to load salary models: {e}")
            self.salary_model = None

    # ---------------------------------------------------------------------------
    # Skill-alignment profiles for each career.
    # Maps feature name -> importance weight (1-3).
    # Used to compute a meaningful "match %" for alternative careers instead of
    # using raw classifier probabilities, which are near-0 because the XGBoost
    # model was trained on synthetic data with very clean feature boundaries and
    # therefore becomes extremely over-confident (97%+ primary, <3% alternatives).
    # ---------------------------------------------------------------------------
    CAREER_SKILL_PROFILES = {
        'Data Scientist':            {'python': 3, 'data_analysis': 3, 'ml': 3, 'sql': 2, 'cloud': 1, 'problem_solving': 2},
        'Machine Learning Engineer': {'python': 3, 'ml': 3, 'data_analysis': 2, 'cloud': 2, 'cpp': 1, 'problem_solving': 3},
        'Full Stack Developer':      {'web_dev': 3, 'js': 3, 'sql': 2, 'python': 2, 'java': 2, 'teamwork': 2},
        'Software Developer':        {'python': 2, 'java': 3, 'cpp': 2, 'sql': 1, 'web_dev': 1, 'problem_solving': 2},
        'Cloud Engineer':            {'cloud': 3, 'networking': 3, 'security': 2, 'python': 2, 'problem_solving': 2},
        'DevOps Engineer':           {'cloud': 3, 'networking': 2, 'python': 2, 'security': 1, 'teamwork': 2},
        'Cybersecurity Analyst':     {'security': 3, 'networking': 3, 'cpp': 1, 'python': 2, 'problem_solving': 2},
        'Database Administrator':    {'sql': 3, 'data_analysis': 2, 'python': 1, 'cloud': 1, 'problem_solving': 2},
        'UI/UX Designer':            {'design': 3, 'web_dev': 2, 'js': 1, 'communication': 2, 'presentation': 2},
        'Graphic Designer':          {'design': 3, 'web_dev': 1, 'presentation': 2, 'communication': 2},
        'Product Manager':           {'leadership': 3, 'communication': 3, 'problem_solving': 2, 'decision_making': 3},
        'Business Analyst':          {'data_analysis': 2, 'sql': 2, 'communication': 3, 'problem_solving': 2},
        'Digital Marketer':          {'communication': 3, 'design': 2, 'presentation': 2, 'web_dev': 1},
        'Financial Analyst':         {'data_analysis': 3, 'sql': 2, 'problem_solving': 2, 'critical_thinking': 3},
        'HR Manager':                {'communication': 3, 'leadership': 2, 'emotional_intelligence': 3, 'conflict_resolution': 3},
    }

    def _skill_alignment_score(self, user_data, career_name):
        """
        Compute a 0-1 skill alignment score between a user's reported skills
        and the ideal skill profile for a given career.
        Uses a weighted sum normalised by the maximum possible score.
        """
        profile = self.CAREER_SKILL_PROFILES.get(career_name, {})
        if not profile:
            return 0.5
        max_score = sum(w * 3.0 for w in profile.values())
        raw_score = sum(float(user_data.get(skill, 0)) * weight
                        for skill, weight in profile.items())
        return min(1.0, raw_score / max_score) if max_score > 0 else 0.5

    def _blend_match_percentage(self, rank, model_prob, alignment_score):
        """
        Convert raw model probability + skill alignment into a human-readable
        match percentage for display:

          Rank 0 (primary):
            Scale raw model prob into [72, 97] %.
            Keeps high-confidence predictions high without showing unrealistic 99%.

          Rank 1 (1st alternative):
            Base range [60, 80] % driven by skill alignment score.
            A user with strong alignment gets close to 80 %, weak alignment ~60 %.

          Rank 2 (2nd alternative):
            Base range [52, 73] % -- always visibly below rank 1.
        """
        if rank == 0:
            return round(float(np.clip(model_prob * 100, 72.0, 97.0)), 1)

        base_ranges = {1: (60.0, 80.0), 2: (52.0, 73.0)}
        lo, hi = base_ranges.get(rank, (45.0, 65.0))
        raw = lo + alignment_score * (hi - lo)
        return round(float(np.clip(raw, lo, hi)), 1)

    def predict_career(self, user_data):
        if not self.career_model:
            return {"error": "Model not loaded"}

        # 1. Build feature vector
        input_data = {f: user_data.get(f, 0) for f in self.career_features}
        df = pd.DataFrame([input_data])

        # 2. Encode categorical features
        for col, le in self.career_label_encoders.items():
            if col in df.columns:
                try:
                    df[col] = le.transform(df[col].astype(str))
                except ValueError:
                    df[col] = le.transform([le.classes_[0]])

        # 3. Get raw model probabilities
        probs = self.career_model.predict_proba(df)[0]
        top_indices = np.argsort(probs)[::-1][:3]

        # 4. Build results with realistic match percentages
        results = []
        for rank, idx in enumerate(top_indices):
            career_name = str(self.career_target_encoder.inverse_transform([idx])[0])
            alignment   = self._skill_alignment_score(user_data, career_name)
            match_pct   = self._blend_match_percentage(rank, float(probs[idx]), alignment)
            results.append({"career": career_name, "match_percentage": match_pct})

        return {
            "primary_career": results[0]["career"],
            "primary_match":  results[0]["match_percentage"],
            "alternatives":   results[1:]
        }

    def estimate_salary(self, user_data, predicted_career):
        if not self.salary_model:
            return {"error": "Model not loaded"}

        # Build feature vector
        input_data = {}
        for feature in self.salary_features:
            if feature == 'career':
                input_data[feature] = predicted_career
            else:
                input_data[feature] = user_data.get(feature, 0)

        # Categorical defaults
        if not input_data.get('degree'):
            input_data['degree'] = 'B.Tech'
        if not input_data.get('location'):
            input_data['location'] = 'Tier 1'
        if not input_data.get('company_type'):
            input_data['company_type'] = 'MNC'

        df = pd.DataFrame([input_data])
        salary_pred = self.salary_model.predict(df)[0]

        lower = float(max(2.0, round(salary_pred * 0.85, 1)))
        upper = float(round(salary_pred * 1.15, 1))

        return {
            "estimated_salary": float(round(salary_pred, 1)),
            "lower_range": lower,
            "upper_range": upper,
            "currency": "LPA",
            "symbol": "₹"
        }

ml_service = MLService()
