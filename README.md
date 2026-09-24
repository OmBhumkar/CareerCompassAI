# Career Compass AI

An AI-powered career prediction, salary estimation, and personalized career roadmap platform.

## Features

- **XGBoost Career Prediction**: Predicts your ideal tech career based on education, skills, and experience (Accuracy ~79%).
- **CatBoost Salary Estimation**: Realistic data-driven salary predictions tailored to your location, skills, and target domain (R2 ~0.95).
- **Personalized Roadmaps**: Get a dynamic learning path outlining the steps needed to reach your target career and salary.
- **Skill Gap Analysis**: Find out exactly which skills are missing from your profile based on your target role.
- **Modern UI**: Fully responsive, accessible, dark-themed UI built with React, Vite, and Tailwind CSS.
- **Fast Backend**: Asynchronous API built with FastAPI serving the models.

## Architecture

- **Frontend**: React, Vite, React Router, Tailwind CSS v4, Lucide React (Icons), Axios
- **Backend**: Python, FastAPI, SQLAlchemy (SQLite), passlib (JWT Auth)
- **Machine Learning**: 
  - XGBoost (Classifier for Career Prediction)
  - CatBoost (Regressor for Salary Estimation)
  - Scikit-learn (Preprocessing)
  - Pandas & Numpy (Data Manipulation)

## Setup Instructions

### 1. Backend Setup

Open a terminal and run the following commands:

```bash
cd backend
python -m venv venv
.\venv\Scripts\activate  # Windows
pip install -r requirements.txt
```

### 2. Generate Datasets & Train Models

We use synthetic but statistically correlated data to train the models locally.

```bash
python ml\data_generator.py
python ml\train_career.py
python ml\train_salary.py
```

### 3. Start the API

```bash
uvicorn app.main:app --reload --port 8000
```
API is running at `http://localhost:8000`.

### 4. Frontend Setup

Open a new terminal and run:

```bash
cd frontend
npm install
npm run dev
```
Frontend is running at `http://localhost:5173` (or the port specified in your console, e.g. 3000).

## Repository Structure

- `/backend`: Python FastAPI app, DB models, ML model definitions, generated datasets and model files.
- `/frontend`: Vite React app containing the UI, assessment wizard, and dashboard.

## Future Improvements

- Add Resume Parsing to auto-fill the assessment questionnaire.
- Create mock AI interview simulations for the predicted career path.
- Add external job market data via live APIs.

---
Built with ❤️ for AI-driven career guidance.
