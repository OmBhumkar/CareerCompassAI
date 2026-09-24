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

    def predict_career(self, user_data):
        if not self.career_model:
            return {"error": "Model not loaded"}
            
        # Prepare input data
        input_data = {}
        for feature in self.career_features:
            val = user_data.get(feature, 0)
            input_data[feature] = val
            
        df = pd.DataFrame([input_data])
        
        # Encode categorical features
        for col, le in self.career_label_encoders.items():
            if col in df.columns:
                try:
                    df[col] = le.transform(df[col].astype(str))
                except ValueError:
                    # If unseen value, use the first one or a default mapping
                    df[col] = le.transform([le.classes_[0]])
                    
        # Predict
        probs = self.career_model.predict_proba(df)[0]
        
        # Get top 3 predictions
        top_indices = np.argsort(probs)[::-1][:3]
        results = []
        for idx in top_indices:
            results.append({
                "career": str(self.career_target_encoder.inverse_transform([idx])[0]),
                "match_percentage": round(float(probs[idx]) * 100, 1)
            })
            
        return {
            "primary_career": results[0]["career"],
            "primary_match": results[0]["match_percentage"],
            "alternatives": results[1:]
        }

    def estimate_salary(self, user_data, predicted_career):
        if not self.salary_model:
            return {"error": "Model not loaded"}
            
        # Prepare input data
        input_data = {}
        for feature in self.salary_features:
            if feature == 'career':
                input_data[feature] = predicted_career
            else:
                input_data[feature] = user_data.get(feature, 0)
                
        # Handle defaults for specific categorical fields
        if not input_data.get('degree'):
            input_data['degree'] = 'B.Tech'
        if not input_data.get('location'):
            input_data['location'] = 'Tier 1'
        if not input_data.get('company_type'):
            input_data['company_type'] = 'MNC'
            
        df = pd.DataFrame([input_data])
        
        # Predict
        salary_pred = self.salary_model.predict(df)[0]
        
        # Add some range based on confidence heuristics
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
