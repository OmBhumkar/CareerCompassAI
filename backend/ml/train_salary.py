import pandas as pd
import numpy as np
from catboost import CatBoostRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import joblib
import os
import json

def train_salary_model():
    print("Loading salary dataset...")
    df = pd.read_csv('datasets/salary_dataset.csv')
    
    # Preprocessing
    X = df.drop('salary_lpa', axis=1)
    y = df['salary_lpa']
    
    categorical_features_indices = [
        X.columns.get_loc('career'),
        X.columns.get_loc('degree'),
        X.columns.get_loc('location'),
        X.columns.get_loc('company_type')
    ]
    
    # Train-test split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    # Train CatBoost
    print("Training CatBoost Regressor...")
    model = CatBoostRegressor(
        iterations=500,
        learning_rate=0.1,
        depth=6,
        loss_function='RMSE',
        random_seed=42,
        verbose=100
    )
    
    model.fit(
        X_train, y_train,
        cat_features=categorical_features_indices,
        eval_set=(X_test, y_test),
        early_stopping_rounds=50
    )
    
    # Evaluate
    y_pred = model.predict(X_test)
    mae = mean_absolute_error(y_test, y_pred)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    r2 = r2_score(y_test, y_pred)
    
    print(f"MAE: {mae:.2f}")
    print(f"RMSE: {rmse:.2f}")
    print(f"R2 Score: {r2:.4f}")
    
    # Save model
    os.makedirs('models', exist_ok=True)
    model.save_model('models/salary_model.cbm')
    
    # Save feature names
    with open('models/salary_features.json', 'w') as f:
        json.dump(list(X.columns), f)
        
    print("Salary model saved successfully.")

if __name__ == "__main__":
    train_salary_model()
