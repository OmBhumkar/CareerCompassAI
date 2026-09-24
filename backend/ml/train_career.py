import pandas as pd
import numpy as np
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os
import json

def train_career_model():
    print("Loading career dataset...")
    df = pd.read_csv('datasets/career_dataset.csv')
    
    # Preprocessing
    X = df.drop('career', axis=1)
    y = df['career']
    
    # Encode categorical features
    label_encoders = {}
    categorical_cols = ['degree', 'specialization']
    for col in categorical_cols:
        le = LabelEncoder()
        X[col] = le.fit_transform(X[col])
        label_encoders[col] = le
        
    # Encode target
    target_le = LabelEncoder()
    y_encoded = target_le.fit_transform(y)
    
    # Train-test split
    X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.2, random_state=42)
    
    # Train XGBoost
    print("Training XGBoost Classifier...")
    model = xgb.XGBClassifier(
        objective='multi:softprob',
        num_class=len(target_le.classes_),
        max_depth=6,
        learning_rate=0.1,
        n_estimators=100,
        random_state=42
    )
    
    model.fit(X_train, y_train)
    
    # Evaluate
    y_pred = model.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    print(f"Accuracy: {acc:.4f}")
    print(classification_report(y_test, y_pred, target_names=target_le.classes_))
    
    # Save model and encoders
    os.makedirs('models', exist_ok=True)
    joblib.dump(model, 'models/career_model.joblib')
    joblib.dump(label_encoders, 'models/career_label_encoders.joblib')
    joblib.dump(target_le, 'models/career_target_encoder.joblib')
    
    # Save feature names
    with open('models/career_features.json', 'w') as f:
        json.dump(list(X.columns), f)
        
    print("Career model saved successfully.")

if __name__ == "__main__":
    train_career_model()
