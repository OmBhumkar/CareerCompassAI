import json
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, log_loss

def plot_catboost_salary():
    # Read catboost training log
    try:
        with open('catboost_info/catboost_training.json', 'r') as f:
            data = json.load(f)
            
        iterations = []
        train_rmse = []
        test_rmse = []
        
        for row in data['iterations']:
            iterations.append(row['iteration'])
            train_rmse.append(row['learn'][0])
            test_rmse.append(row['test'][0])
            
        plt.figure(figsize=(10, 6))
        plt.plot(iterations, train_rmse, label='Training RMSE', color='darkred', marker='', linewidth=2)
        plt.plot(iterations, test_rmse, label='Testing/Validation RMSE', color='salmon', marker='', linewidth=2, linestyle='--')
        plt.title('CatBoost Salary Model — Training vs Testing Loss (RMSE)')
        plt.xlabel('Iterations')
        plt.ylabel('RMSE (Lacs)')
        plt.grid(True, linestyle='--', alpha=0.7)
        plt.legend()
        plt.tight_layout()
        plt.savefig('salary_model_loss.png', dpi=300)
        plt.close()
        print("Generated salary_model_loss.png")
    except Exception as e:
        print(f"Error generating CatBoost plot: {e}")

def train_and_plot_xgboost_career():
    try:
        print("Loading career dataset for XGBoost plotting...")
        df = pd.read_csv('ml/datasets/career_dataset.csv')
        
        X = df.drop('career', axis=1)
        y = df['career']
        
        categorical_cols = ['degree', 'specialization']
        for col in categorical_cols:
            le = LabelEncoder()
            X[col] = le.fit_transform(X[col])
            
        target_le = LabelEncoder()
        y_encoded = target_le.fit_transform(y)
        
        X_train, X_test, y_train, y_test = train_test_split(X, y_encoded, test_size=0.2, random_state=42)
        
        model = xgb.XGBClassifier(
            objective='multi:softprob',
            num_class=len(target_le.classes_),
            max_depth=6,
            learning_rate=0.1,
            n_estimators=100,
            random_state=42,
            eval_metric=['mlogloss', 'merror']
        )
        
        # Fit with eval_set to get history
        eval_set = [(X_train, y_train), (X_test, y_test)]
        model.fit(X_train, y_train, eval_set=eval_set, verbose=False)
        
        results = model.evals_result()
        
        epochs = len(results['validation_0']['mlogloss'])
        x_axis = range(0, epochs)
        
        # 1. Plot Log Loss
        plt.figure(figsize=(10, 6))
        plt.plot(x_axis, results['validation_0']['mlogloss'], label='Training Loss', color='darkred', linewidth=2)
        plt.plot(x_axis, results['validation_1']['mlogloss'], label='Testing/Validation Loss', color='salmon', linestyle='--', linewidth=2)
        plt.title('XGBoost Career Model — Training vs Testing Loss (Log Loss)')
        plt.xlabel('Iterations (Trees)')
        plt.ylabel('Log Loss')
        plt.grid(True, linestyle='--', alpha=0.7)
        plt.legend()
        plt.tight_layout()
        plt.savefig('career_model_loss.png', dpi=300)
        plt.close()
        print("Generated career_model_loss.png")
        
        # 2. Plot Accuracy (1 - merror)
        train_acc = [1 - err for err in results['validation_0']['merror']]
        test_acc = [1 - err for err in results['validation_1']['merror']]
        
        plt.figure(figsize=(10, 6))
        plt.plot(x_axis, train_acc, label='Training Accuracy', color='darkgreen', linewidth=2)
        plt.plot(x_axis, test_acc, label='Testing/Validation Accuracy', color='limegreen', linestyle='--', linewidth=2)
        plt.title('XGBoost Career Model — Training vs Testing Accuracy')
        plt.xlabel('Iterations (Trees)')
        plt.ylabel('Accuracy')
        plt.grid(True, linestyle='--', alpha=0.7)
        plt.legend()
        plt.tight_layout()
        plt.savefig('career_model_accuracy.png', dpi=300)
        plt.close()
        print("Generated career_model_accuracy.png")
        
    except Exception as e:
        print(f"Error generating XGBoost plots: {e}")

def plot_catboost_salary_accuracy():
    try:
        from sklearn.model_selection import KFold
        from sklearn.metrics import r2_score
        from catboost import CatBoostRegressor
        
        print("Generating Salary Model Accuracy (R2) via Cross-Validation...")
        df = pd.read_csv('ml/datasets/salary_dataset.csv')
        
        X = df.drop('salary_lpa', axis=1)
        y = df['salary_lpa']
        
        categorical_features_indices = [
            X.columns.get_loc('career'),
            X.columns.get_loc('degree'),
            X.columns.get_loc('location'),
            X.columns.get_loc('company_type')
        ]
        
        kf = KFold(n_splits=5, shuffle=True, random_state=42)
        folds = []
        train_r2 = []
        test_r2 = []
        
        fold_idx = 1
        for train_index, test_index in kf.split(X):
            X_train, X_test = X.iloc[train_index], X.iloc[test_index]
            y_train, y_test = y.iloc[train_index], y.iloc[test_index]
            
            model = CatBoostRegressor(
                iterations=200, # reduced for faster CV plotting
                learning_rate=0.1,
                depth=6,
                loss_function='RMSE',
                random_seed=42,
                verbose=False
            )
            
            model.fit(X_train, y_train, cat_features=categorical_features_indices, verbose=False)
            
            y_train_pred = model.predict(X_train)
            y_test_pred = model.predict(X_test)
            
            train_r2.append(r2_score(y_train, y_train_pred))
            test_r2.append(r2_score(y_test, y_test_pred))
            folds.append(fold_idx)
            fold_idx += 1
            
        plt.figure(figsize=(10, 6))
        plt.plot(folds, train_r2, label='Training R²', color='darkblue', marker='o', linewidth=2)
        plt.plot(folds, test_r2, label='Testing/Validation R²', color='cornflowerblue', marker='o', linewidth=2, linestyle='--')
        plt.title('Salary Model (CatBoost) — Training vs Testing Accuracy (R²)')
        plt.xlabel('Cross-Validation Fold')
        plt.ylabel('R² Score')
        plt.xticks(folds)
        plt.grid(True, linestyle='--', alpha=0.7)
        plt.legend()
        plt.tight_layout()
        plt.savefig('salary_model_accuracy.png', dpi=300)
        plt.close()
        print("Generated salary_model_accuracy.png")
    except Exception as e:
        print(f"Error generating CatBoost R2 plot: {e}")

if __name__ == '__main__':
    plot_catboost_salary()
    plot_catboost_salary_accuracy()
    train_and_plot_xgboost_career()
