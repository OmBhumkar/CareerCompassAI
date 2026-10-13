"""
=============================================================================
CAREER COMPASS AI - ISOLATED ML HYPERPARAMETER TUNER
=============================================================================
Tweak the parameters below, then run:
    backend\\venv\\Scripts\\python.exe ml_experiments\\experiment_tuner.py
=============================================================================
"""

import os
import sys
import numpy as np
import pandas as pd
import xgboost as xgb
from catboost import CatBoostRegressor
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import r2_score

# -----------------------------------------------------------------------------
# ⚙️ TWEAK PARAMETERS HERE
# -----------------------------------------------------------------------------
XGB_CONFIG = {
    "max_depth": 6,             # Tree depth (e.g. 4, 5, 6, 7, 8)
    "learning_rate": 0.08,      # Learning rate (e.g. 0.03, 0.05, 0.08, 0.1)
    "n_estimators": 300,        # Number of trees (e.g. 80, 100, 150)
    "subsample": 0.85,          # Row subsampling (e.g. 0.7 to 1.0)
    "colsample_bytree": 0.85,   # Feature subsampling (e.g. 0.7 to 1.0)
    "random_state": 42
}

CATBOOST_CONFIG = {
    "iterations": 300,          # Number of trees
    "learning_rate": 0.08,      # Learning rate
    "depth": 6,                 # Tree depth
    "random_seed": 42,
    "verbose": 0
}

# -----------------------------------------------------------------------------
# DATASET PATHS
# -----------------------------------------------------------------------------
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
career_csv = os.path.join(BASE_DIR, "backend", "datasets", "career_dataset.csv")
salary_csv = os.path.join(BASE_DIR, "backend", "datasets", "salary_dataset.csv")


def main():
    print("\n" + "=" * 50)
    print("      MODEL TRAINING ACCURACY & LOSS RESULTS")
    print("=" * 50)

    # 1. XGBoost (Career Classifier)
    if os.path.exists(career_csv):
        df_c = pd.read_csv(career_csv)
        X_c = df_c.drop("career", axis=1)
        y_c = df_c["career"]

        for col in ["degree", "specialization"]:
            X_c[col] = LabelEncoder().fit_transform(X_c[col])

        target_le = LabelEncoder()
        y_c_encoded = target_le.fit_transform(y_c)

        X_train, X_test, y_train, y_test = train_test_split(
            X_c, y_c_encoded, test_size=0.2, random_state=42
        )

        model = xgb.XGBClassifier(
            objective="multi:softprob",
            num_class=len(target_le.classes_),
            eval_metric=["mlogloss", "merror"],
            **XGB_CONFIG
        )
        model.fit(
            X_train, y_train,
            eval_set=[(X_train, y_train), (X_test, y_test)],
            verbose=False
        )

        evals = model.evals_result()
        train_loss = evals["validation_0"]["mlogloss"][-1]
        test_loss = evals["validation_1"]["mlogloss"][-1]
        train_acc = (1.0 - evals["validation_0"]["merror"][-1]) * 100
        test_acc = (1.0 - evals["validation_1"]["merror"][-1]) * 100

        print("\n[ Career Prediction Model - XGBoost ]")
        print(f"  - Training Accuracy   : {train_acc:.2f}%")
        print(f"  - Training Error Rate : {100.0 - train_acc:.2f}%  (Adds to 100%)")
        print(f"  - Training Log-Loss   : {train_loss:.4f}")
        print(f"  - Testing Accuracy    : {test_acc:.2f}%")
        print(f"  - Testing Error Rate  : {100.0 - test_acc:.2f}%  (Adds to 100%)")
        print(f"  - Testing Log-Loss    : {test_loss:.4f}")

    # 2. CatBoost (Salary Regressor)
    if os.path.exists(salary_csv):
        df_s = pd.read_csv(salary_csv)
        X_s = df_s.drop("salary_lpa", axis=1)
        y_s = df_s["salary_lpa"]

        cat_indices = [
            X_s.columns.get_loc("career"),
            X_s.columns.get_loc("degree"),
            X_s.columns.get_loc("location"),
            X_s.columns.get_loc("company_type")
        ]

        X_train_s, X_test_s, y_train_s, y_test_s = train_test_split(
            X_s, y_s, test_size=0.2, random_state=42
        )

        salary_model = CatBoostRegressor(**CATBOOST_CONFIG)
        salary_model.fit(
            X_train_s, y_train_s,
            cat_features=cat_indices,
            eval_set=(X_test_s, y_test_s),
            verbose=False
        )

        y_train_pred = salary_model.predict(X_train_s)
        y_test_pred = salary_model.predict(X_test_s)
        train_r2 = r2_score(y_train_s, y_train_pred) * 100
        test_r2 = r2_score(y_test_s, y_test_pred) * 100

        sal_evals = salary_model.get_evals_result()
        train_rmse = sal_evals["learn"]["RMSE"][-1]
        test_rmse = sal_evals["validation"]["RMSE"][-1]

        print("\n[ Salary Estimation Model - CatBoost ]")
        print(f"  - Training Accuracy   : {train_r2:.2f}% (R2 Score)")
        print(f"  - Training Error Rate : {100.0 - train_r2:.2f}%  (Adds to 100%)")
        print(f"  - Training Loss       : {train_rmse:.4f} (RMSE in LPA)")
        print(f"  - Testing Accuracy    : {test_r2:.2f}% (R2 Score)")
        print(f"  - Testing Error Rate  : {100.0 - test_r2:.2f}%  (Adds to 100%)")
        print(f"  - Testing Loss        : {test_rmse:.4f} (RMSE in LPA)")

    print("\n" + "=" * 50 + "\n")


if __name__ == "__main__":
    main()
