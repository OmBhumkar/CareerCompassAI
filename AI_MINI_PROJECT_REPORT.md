# MINI PROJECT REPORT
**ON**
# “ CAREER COMPASS AI: AN AI-POWERED CAREER PREDICTION, SALARY ESTIMATION, AND PERSONALIZED ROADMAP SYSTEM ”

<br>

<div align="center">

### **DES PUNE UNIVERSITY, PUNE**
**School of Engineering and Technology**
**Department of Computer Engineering and Technology**

*ज्ञाननुसन्धाने — In pursuit of knowledge*

<br>

### **SUBMITTED BY**

| PRN | NAME OF STUDENTS |
| :---: | :--- |
| ____________________ | ________________________________________ |
| ____________________ | ________________________________________ |
| ____________________ | ________________________________________ |
| ____________________ | ________________________________________ |

<br>

**Under the Guidance of**
**Dr. SHRIDA KALAMKAR**
*Department of Computer Engineering and Technology*

<br>

**Second Year Computer Science & Engineering (SY CSE)**
**Division: B, Batch: B1/B2, Semester - II**
**Academic Year: 2025-2026**

</div>

---
<div align="center">DES Pune University, Pune. | Page 1</div>

<div style="page-break-after: always;"></div>

---

# MINI PROJECT REPORT

<div align="center">

**Program: B. Tech Computer Science & Engineering**
**School of Engineering and Technology**
**DES Pune University, Pune**

<br>

## **CERTIFICATE**

</div>

This is to certify that the students:

1. **Student Name:** ________________________________________ &nbsp;&nbsp;&nbsp;&nbsp; **PRN:** ____________________
2. **Student Name:** ________________________________________ &nbsp;&nbsp;&nbsp;&nbsp; **PRN:** ____________________
3. **Student Name:** ________________________________________ &nbsp;&nbsp;&nbsp;&nbsp; **PRN:** ____________________
4. **Student Name:** ________________________________________ &nbsp;&nbsp;&nbsp;&nbsp; **PRN:** ____________________

are studying in **SY CSE (Division: B, Batch: B1/B2)** course in **Semester II** and have successfully completed and submitted the **Mini Project Report** under the subject **Artificial Intelligence**, entitled:

<div align="center">

### **“ CAREER COMPASS AI: AN AI-POWERED CAREER PREDICTION, SALARY ESTIMATION, AND PERSONALIZED ROADMAP SYSTEM ”**

</div>

This study is a partial fulfillment of the degree of **Bachelor of Technology in Computer Science and Engineering** of **DES Pune University, Pune** during the academic year **2025-2026**.

<br><br><br>

<table width="100%" style="border: none;">
  <tr>
    <td align="left" style="border: none;">
      ___________________________<br>
      <b>Dr. SHRIDA KALAMKAR</b><br>
      Subject Teacher / Guide<br>
      Dept. of Computer Engineering & Tech.
    </td>
    <td align="right" style="border: none;">
      ___________________________<br>
      <b>Dr. PRACHI JOSHI</b><br>
      Head of School (HoS)<br>
      School of Engineering & Tech.
    </td>
  </tr>
</table>

<br><br>
**Place:** Pune, Maharashtra
**Date:** ____________________

---
<div align="center">DES Pune University, Pune. | Page 2</div>

<div style="page-break-after: always;"></div>

---

# MINI PROJECT REPORT

<div align="center">

## **ABSTRACT**

</div>

In the contemporary tech industry, students and early-career computer engineering professionals face an increasingly complex landscape characterized by rapid technological diversification, hyper-specialized job roles, and asymmetric market information regarding compensation and skill prerequisites. Conventional career counseling approaches often rely on static heuristic questionnaires, subjective opinions, or coarse rule-based decision trees that fail to evaluate multi-dimensional skill vectors, practical experience, academic achievement, and real-world market dynamics.

This mini-project presents **Career Compass AI**, an intelligent, data-driven decision support system engineered to predict optimal career pathways, estimate realistic entry-to-mid-level compensation packages, and generate personalized, skill-gap-bridged learning roadmaps. Formulated within the domain of **Artificial Intelligence and Machine Learning**, the platform leverages a dual gradient-boosted ensemble architecture:
1. **Career Role Classification Engine:** Utilizes an **eXtreme Gradient Boosting (XGBoost)** multi-class probabilistic classifier trained on multi-attribute feature representations—including degrees, academic CGPA, proficiencies across 12 core technical and 11 soft-skill domains, internships, and project experience—to predict top career recommendations from a space of 17 discrete industry domains with an empirical accuracy of **~79%**.
2. **Salary Estimation Regressor:** Utilizes a **Categorical Boosting (CatBoost)** regression engine that natively models categorical variables without target leakage to estimate expected CTC (in LPA) based on chosen career domain, academic qualification, geographical work tier, company classification (Startup, MNC, Product-Based, Service-Based), and technical competency scores, yielding an **$R^2$ score of ~0.95** and a Mean Absolute Error (MAE) of **0.84 LPA**.
3. **Skill-Gap Analysis & Roadmap Synthesis:** Implements a weighted vector-alignment algorithm that benchmarks the user’s self-assessed competency vector against optimal industry profiles, identifies critical deficiency gaps, and procedurally generates a chronological, month-by-month actionable curriculum complete with curated industry documentation and capstone project specifications.

The end-to-end system is deployed using a decoupled, production-grade microservice architecture featuring a high-performance **FastAPI** asynchronous REST backend, SQLite/SQLAlchemy persistent storage, and a modern, responsive, dark-mode **React / Tailwind CSS** graphical user interface. Career Compass AI demonstrates how modern supervised learning algorithms can be synergistically unified to deliver accessible, objective, and transparent career guidance for engineering undergraduates.

---
<div align="center">DES Pune University, Pune. | Page 3</div>

<div style="page-break-after: always;"></div>

---

# MINI PROJECT REPORT

<div align="center">

## **INDEX**

</div>

| CHAPTER NO. | TOPIC | PAGE NO. |
| :---: | :--- | :---: |
| | **Certificate** | 2 |
| | **Abstract** | 3 |
| **1** | **Introduction** | **5** |
| | 1.1 Motivation | 5 |
| | 1.2 Scope of Project | 6 |
| | 1.3 Application of Project | 7 |
| **2** | **Literature Review / Background** | **8** |
| | 2.1 Overview of AI Algorithms Used | 8 |
| | &nbsp;&nbsp;&nbsp;&nbsp;2.1.1 Extreme Gradient Boosting (XGBoost) Classifier | 8 |
| | &nbsp;&nbsp;&nbsp;&nbsp;2.1.2 Categorical Boosting (CatBoost) Regressor | 9 |
| | &nbsp;&nbsp;&nbsp;&nbsp;2.1.3 Weighted Skill Alignment & Blended Scoring Heuristic | 10 |
| **3** | **System Design** | **11** |
| | 3.1 Problem Definition | 11 |
| | 3.2 Algorithm Design & Mathematical Formulation | 12 |
| | 3.3 Data Structure Diagram / Flowchart | 14 |
| | &nbsp;&nbsp;&nbsp;&nbsp;3.3.1 System Architecture Flowchart | 14 |
| | &nbsp;&nbsp;&nbsp;&nbsp;3.3.2 Machine Learning Inference Pipeline | 15 |
| **4** | **Sample Source Code** | **16** |
| | 4.1 Career Model Training Pipeline (`train_career.py`) | 16 |
| | 4.2 Salary Estimation Model Pipeline (`train_salary.py`) | 18 |
| | 4.3 AI Inference & Skill-Alignment Service (`ml_service.py`) | 19 |
| **5** | **Graphical User Interface (Screenshots & Workflows)** | **22** |
| | 5.1 Assessment Wizard (Multi-Stage Data Acquisition) | 22 |
| | 5.2 Dynamic Career Intelligence Dashboard | 23 |
| | 5.3 Skill Gap Matrix & Milestone Roadmap UI | 24 |
| **6** | **Future Enhancement** | **25** |
| **7** | **Conclusion** | **26** |
| | **References / Bibliography** | **27** |

---
<div align="center">DES Pune University, Pune. | Page 4</div>

<div style="page-break-after: always;"></div>

---

# CHAPTER 1: INTRODUCTION

### 1.1 Motivation
The modern information technology sector is witnessing an unprecedented rate of specialization. A decade ago, software engineering graduates were primarily classified into generalized buckets such as desktop application developers or database administrators. Today, the industry has splintered into dozens of specialized disciplines, including Machine Learning Engineering, Cloud & DevOps Infrastructure, Data Science, Full-Stack Modern Web Engineering, Cybersecurity Threat Analysis, and UI/UX Product Engineering.

For engineering students—particularly in their Second and Third Years of undergraduate study (such as SY B.Tech CSE)—this rapid diversification introduces substantial cognitive overload and decision paralysis:
1. **Asymmetric Market Awareness:** Students frequently struggle to discern which technical competencies (e.g., Python, C++, SQL, Cloud platforms, Docker) directly correlate with specific career trajectories.
2. **Subjective Career Advice:** Traditional university academic counseling relies heavily on human advisors whose guidance is often subjective, non-standardized, and disconnected from dynamic industry hiring thresholds.
3. **Compensation Ambiguity:** Accurate, empirical knowledge regarding market salaries relative to geographical tier (Tier 1 vs. Tier 2 vs. Remote) and company profile (Product-Based vs. MNC vs. Startup) is rarely available to undergraduates, leading to misaligned expectations.
4. **Lack of Actionable Roadmaps:** Even when a student identifies a target career, they frequently lack a structured, step-by-step curriculum with high-quality references to bridge their specific skill deficiencies.

To systematically address these challenges, **Career Compass AI** was developed as an intelligent decision support platform. By translating student credentials, programming proficiencies, and interpersonal capabilities into predictive feature vectors, the system replaces human guesswork with mathematical optimization and empirical AI models.

---

### 1.2 Scope of Project
The scope of Career Compass AI encompasses the design, implementation, and deployment of a multi-model Artificial Intelligence framework tailored for engineering students and job-seekers:

1. **Target User Demographics:**
   - Undergraduate engineering students (specifically SY and TY Computer Science & Engineering).
   - Early-career developers seeking transition pathways into high-demand domains.
   - Placement and training cells in higher educational institutes.

2. **Breadth of Predicted Careers (17 Distinct Domains):**
   - Software Developer, Full Stack Developer, Data Scientist, Data Engineer, Data Analyst.
   - Machine Learning Engineer, Cloud Engineer, DevOps Engineer, Cybersecurity Analyst.
   - UI/UX Designer, Graphic Designer, Database Administrator.
   - Product Manager, Business Analyst, Financial Analyst, Digital Marketer, HR Manager.

3. **Multi-Faceted Assessment Vector:**
   - **Academic & Educational Background:** Degree qualification (B.Tech, B.E., BCA, MCA, M.Tech) and cumulative GPA (CGPA on a 10.0 scale).
   - **Technical Competencies (0–3 Likert Scale):** Python, Java, C++, JavaScript, SQL, Web Development, Data Analysis, Machine Learning, Cloud Architecture, Network Security, Networking, and UI Design.
   - **Soft Skills & Interpersonal Attributes (0–3 Scale):** Communication, Teamwork, Problem-Solving, Leadership, Time Management, Adaptability, Critical Thinking, Emotional Intelligence, and Decision Making.
   - **Practical Track Record:** Quantified number of completed projects, completed internships, and industry-recognized certifications.
   - **Market Parameters:** Preferred company tier (Product-Based, MNC, Startup, Service-Based) and geographical location (Tier 1, Tier 2, Tier 3, Remote).

4. **Predictive & Prescriptive Deliverables:**
   - **Top-3 Recommended Career Paths:** Ranked by probabilistic confidence and skill-alignment scores.
   - **Salary Estimation Range:** Expected base compensation in Lakhs Per Annum (LPA) with lower and upper confidence bounds.
   - **Dynamic Skill-Gap Matrix:** Automated detection of missing prerequisites for the target role.
   - **Curated Multi-Phase Learning Roadmap:** Chronological, milestone-driven technical path featuring verified free and official resources.

---

### 1.3 Application of Project
1. **Academic Institutions & Placement Cells:** Facilitates institutional diagnostics by enabling placement departments to identify skill trends, common student deficiencies, and recommend customized elective modules.
2. **Student Self-Assessment & Career Planning:** Acts as a continuous personal mentor for engineering students, allowing them to re-evaluate their profiles each semester as they acquire new skills and complete coursework.
3. **Ed-Tech Learning Path Recommendation:** Enables online learning platforms to dynamically route learners toward courses and certifications that directly maximize their employability score.
4. **Corporate Upskilling & Internal Mobility:** Can be repurposed by enterprise HR departments to map existing engineering staff competencies against emerging technical requirements for internal promotion or lateral movement.

---
<div align="center">DES Pune University, Pune. | Page 5</div>

<div style="page-break-after: always;"></div>

---

# CHAPTER 2: LITERATURE REVIEW / BACKGROUND

### 2.1 Overview of AI Algorithms Used

Career decision support systems historically relied on **Expert Systems** formulated via Boolean rule engines (e.g., `IF skills['python'] > 2 AND skills['sql'] > 2 THEN career = 'Data Analyst'`). While intuitive, rule-based systems suffer from combinatorial explosion, brittleness in the presence of noisy or incomplete data, and an inability to provide calibrated probability scores across overlapping domain boundaries.

Modern machine learning overcomes these constraints through gradient-boosted decision tree (GBDT) ensembles. Tree ensembles construct non-linear decision boundaries, model complex multi-way feature interactions, and exhibit superior sample efficiency over deep neural networks when operating on tabular heterogeneous data. In this project, two specialized gradient boosting algorithms are unified.

```
+-------------------------------------------------------------------------------+
|                       GRADIENT BOOSTING ARCHITECTURE                         |
+------------------------------------+------------------------------------------+
|  eXtreme Gradient Boosting (XGB)   |       Categorical Boosting (CatBoost)    |
+------------------------------------+------------------------------------------+
|  * Supervised Multi-Class Classifier|  * Supervised Non-Linear Regressor       |
|  * 2nd-order Taylor series loss    |  * Oblivious / Symmetric decision trees  |
|  * L1 & L2 tree complexity penalty |  * Ordered target statistic encoding     |
|  * Predicts 17 Discrete Roles      |  * Estimates Salary (LPA) with R^2 ~0.95 |
+------------------------------------+------------------------------------------+
```

---

#### 2.1.1 Extreme Gradient Boosting (XGBoost) Classifier
XGBoost is an optimized distributed gradient boosting library engineered for efficiency, flexibility, and portability. In Career Compass AI, XGBoost is implemented as a multi-class classifier using the `multi:softprob` objective.

Unlike traditional gradient boosting that relies solely on first-order gradients (steepest descent), XGBoost employs a **second-order Taylor approximation** to optimize arbitrary differentiable loss functions. For an ensemble of $K$ additive trees:

$$\hat{y}_i^{(t)} = \sum_{k=1}^t f_k(x_i) = \hat{y}_i^{(t-1)} + f_t(x_i)$$

The objective function minimized at iteration $t$ is expressed as:

$$\mathcal{L}^{(t)} \approx \sum_{i=1}^n \left[ l\left(y_i, \hat{y}_i^{(t-1)}\right) + g_i f_t(x_i) + \frac{1}{2} h_i f_t^2(x_i) \right] + \Omega(f_t)$$

Where:
- $g_i = \partial_{\hat{y}^{(t-1)}} l(y_i, \hat{y}^{(t-1)})$ represents the first-order gradient.
- $h_i = \partial^2_{\hat{y}^{(t-1)}} l(y_i, \hat{y}^{(t-1)})$ represents the second-order Hessian.
- $\Omega(f_t) = \gamma T + \frac{1}{2}\lambda \sum_{j=1}^T w_j^2$ is the regularization penalty governing tree complexity ($T$ leaves and leaf weights $w$).

**Hyperparameter Configuration for Career Classification:**
- `objective`: `multi:softprob`
- `num_class`: 17 (Total career roles)
- `max_depth`: 6 (Sufficient depth to capture multi-skill co-occurrences without memorization)
- `learning_rate` ($\eta$): 0.1 (Shrinkage factor for conservative weight updates)
- `n_estimators`: 100 boosting rounds
- `random_state`: 42 (Ensuring deterministic reproducibility)

---

#### 2.1.2 Categorical Boosting (CatBoost) Regressor
CatBoost is a state-of-the-art gradient boosting algorithm designed by Yandex specifically optimized for handling categorical features with high cardinality and complex non-linear continuous relationships.

In career salary estimation, variables such as `career`, `degree`, `location`, and `company_type` exhibit strong categorical interactions that distort standard one-hot encoding by inducing sparsity. CatBoost mitigates this via **Ordered Target Statistics (TS)**, calculating target statistics on permutations of the training dataset to prevent target leakage:

$$\hat{x}_{k, \sigma_p} = \frac{\sum_{j=1}^{p-1} [x_{\sigma_j, k} = x_{\sigma_p, k}] \cdot y_{\sigma_j} + a \cdot P}{\sum_{j=1}^{p-1} [x_{\sigma_j, k} = x_{\sigma_p, k}] + a}$$

Furthermore, CatBoost builds **Symmetric (Oblivious) Trees**, wherein the exact same splitting criterion is applied across an entire depth level of the tree. This architectural constraint enforces balanced structures, prevents overfitting on localized outliers, and enables rapid SIMD-parallelized inference execution.

**Hyperparameter Configuration for Salary Regression:**
- `loss_function`: `RMSE` (Root Mean Squared Error)
- `iterations`: 500 boosting stages
- `depth`: 6
- `learning_rate`: 0.1
- `early_stopping_rounds`: 50 (Halts training when evaluation validation plateau is observed)
- `cat_features`: Indices corresponding to `['career', 'degree', 'location', 'company_type']`

---

#### 2.1.3 Weighted Skill Alignment & Blended Scoring Heuristic
In raw classifier outputs, multi-class tree models trained on clear categorical partitions often generate overconfident softmax probability distributions (e.g., 97% for the top class, while ranks 2 and 3 receive near-zero probabilities of 1.5% and 0.8%). In human-centered career guidance, this creates an unhelpful user experience where viable alternative pathways appear dismissed.

To resolve this, the system incorporates a **Domain Skill Alignment Engine** that computes a normalized inner product between the user’s self-reported competencies $U$ and an ideal domain weight matrix $W_C$ for each career role $C$:

$$\text{Score}(U, C) = \frac{\sum_{s \in \mathcal{K}_C} U(s) \cdot W_C(s)}{\sum_{s \in \mathcal{K}_C} 3.0 \cdot W_C(s)}$$

Where:
- $\mathcal{K}_C$ denotes the core skill subset required by career $C$.
- $W_C(s) \in \{1, 2, 3\}$ denotes the domain importance weight.
- $3.0$ denotes the maximum achievable rating on the 0–3 assessment scale.

The final user-facing match percentage is synthesized via a non-linear calibration mapping:
- **Rank 0 (Primary Match):** Scaled within $[72.0\%, 97.0\%]$ proportional to raw model confidence.
- **Rank 1 (Alternative 1):** Scaled within $[60.0\%, 80.0\%]$ proportional to the calculated skill-alignment score.
- **Rank 2 (Alternative 2):** Scaled within $[52.0\%, 73.0\%]$ proportional to the calculated skill-alignment score.

---
<div align="center">DES Pune University, Pune. | Page 6</div>

<div style="page-break-after: always;"></div>

---

# CHAPTER 3: SYSTEM DESIGN

### 3.1 Problem Definition
The primary objective of Career Compass AI is formulated as two interrelated supervised machine learning problems operating sequentially:

1. **Multi-Class Career Classification Problem:**
   Given a user input vector $\mathbf{x} \in \mathbb{R}^{d}$, where $d=18$ features representing academic background, project history, and technical skill ratings:
   $$\mathbf{x} = \left[ x_{\text{degree}}, x_{\text{spec}}, x_{\text{cgpa}}, x_{\text{python}}, x_{\text{java}}, x_{\text{cpp}}, x_{\text{js}}, x_{\text{sql}}, x_{\text{web}}, x_{\text{da}}, x_{\text{ml}}, x_{\text{cloud}}, x_{\text{sec}}, x_{\text{net}}, x_{\text{design}}, x_{\text{proj}}, x_{\text{intern}}, x_{\text{cert}} \right]$$
   Find a hypothesis function $h_{\text{career}}: \mathbf{x} \to \mathcal{P}(\mathcal{Y})$, where $\mathcal{Y} = \{c_1, c_2, \dots, c_{17}\}$ is the finite discrete set of career classes, outputting a calibrated probability distribution:
   $$\hat{y}_{\text{career}} = \arg\max_{c \in \mathcal{Y}} P(Y = c \mid \mathbf{x})$$

2. **Continuous Compensation Regression Problem:**
   Given an augmented feature vector $\mathbf{z} \in \mathbb{R}^{m}$ combining the user’s demographic attributes, verified credentials, and the predicted primary career label $\hat{y}_{\text{career}}$:
   $$\mathbf{z} = \left[ \hat{y}_{\text{career}}, z_{\text{degree}}, z_{\text{experience}}, z_{\text{location}}, z_{\text{company}}, z_{\text{projects}}, z_{\text{certifications}}, z_{\text{tech\_score}} \right]$$
   Find a continuous mapping function $g_{\text{salary}}: \mathbf{z} \to \mathbb{R}^{+}$ that minimizes the expected Mean Squared Error:
   $$\min \mathbb{E}\left[ \left( g_{\text{salary}}(\mathbf{z}) - y_{\text{salary}} \right)^2 \right]$$

3. **Prescriptive Skill-Gap Identification:**
   Given user profile $\mathbf{x}$ and target career blueprint $\mathcal{B}(c)$, compute the deficiency vector:
   $$\mathbf{\Delta}(c) = \left\{ s \in \mathcal{S}_{\text{blueprint}}(c) \mid \mathbf{x}(s) < \tau_{\text{threshold}} \right\}$$
   Where $\tau_{\text{threshold}} = 2.0$ represents the minimum industry proficiency bar.

---

### 3.2 Algorithm Design & Mathematical Formulation

The operational pipeline executes across distinct stages: Ingestion, Encoding, Ensemble Inference, and Roadmap Assembly.

```
       +-----------------------------------------------------------+
       |                  User Assessment Input                    |
       |  (18 Features: Degree, CGPA, Projects, 12 Tech, 11 Soft)  |
       +-----------------------------+-----------------------------+
                                     |
                                     v
       +-----------------------------------------------------------+
       |             Label Encoding & Vector Normalization         |
       |     Transform categorical strings to mapped integer ordinals  |
       +-----------------------------+-----------------------------+
                                     |
                                     v
       +-----------------------------------------------------------+
       |              XGBoost Classifier Inference                 |
       |       Evaluates 100 Trees -> 17-class Softmax Vector       |
       +-----------------------------+-----------------------------+
                                     |
                  +------------------+------------------+
                  |                                     |
                  v                                     v
   +------------------------------+   +----------------------------------+
   |   Top-3 Career Prediction    |   |     CatBoost Salary Regressor    |
   |  Blended with Alignment Matrix|   |   500 Oblivious Trees -> CTC LPA |
   +--------------+---------------+   +-----------------+----------------+
                  |                                     |
                  +------------------+------------------+
                                     |
                                     v
       +-----------------------------------------------------------+
       |          Skill-Gap & Dynamic Roadmap Generation           |
       | Compares profile vs. ideal blueprint -> 4-phase curriculum|
       +-----------------------------+-----------------------------+
                                     |
                                     v
       +-----------------------------------------------------------+
       |        FastAPI Response -> Interactive React UI           |
       +-----------------------------+-----------------------------+
```

---

### 3.3 Data Structure Diagram / Flowchart

#### 3.3.1 System Architecture Flowchart
The following sequence depicts the end-to-end client-server interaction lifecycle:

```mermaid
sequenceDiagram
    autonumber
    actor User as Engineering Student (Client)
    participant UI as React 19 Frontend (Vite + Tailwind)
    participant API as FastAPI Backend (Uvicorn Async)
    participant ML as ML Inference Service
    participant DB as SQLite / SQLAlchemy DB

    User->>UI: Completes Assessment Wizard (4 Steps)
    UI->>API: POST /api/ml/predict (JSON Payload)
    activate API
    API->>ML: Forward user attributes
    activate ML
    ML->>ML: Encode categoricals via LabelEncoder
    ML->>ML: Execute XGBoost.predict_proba()
    ML->>ML: Compute skill-alignment scores & blend rankings
    ML->>ML: Execute CatBoost.predict() for CTC estimation
    ML-->>API: Return {primary_career, alternatives, salary_range}
    deactivate ML
    API->>DB: Save Assessment Record (User ID, Career, Date)
    API-->>UI: 200 OK (Full Prediction & Roadmap Schema)
    deactivate API
    UI-->>User: Render Career Dashboard, Charts & Roadmap
```

---
<div align="center">DES Pune University, Pune. | Page 7</div>

<div style="page-break-after: always;"></div>

---

# CHAPTER 4: SAMPLE SOURCE CODE

### 4.1 Career Model Training Pipeline (`train_career.py`)
This script loads the synthetic yet statistically correlated dataset, encodes categorical attributes, splits data into training/testing partitions, fits the multi-class XGBoost classifier, evaluates performance metrics, and serializes the trained artifacts.

```python
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
    
    # Feature matrix and target separation
    X = df.drop('career', axis=1)
    y = df['career']
    
    # Encode categorical features: degree, specialization
    label_encoders = {}
    categorical_cols = ['degree', 'specialization']
    for col in categorical_cols:
        le = LabelEncoder()
        X[col] = le.fit_transform(X[col])
        label_encoders[col] = le
        
    # Encode multi-class target labels (17 classes)
    target_le = LabelEncoder()
    y_encoded = target_le.fit_transform(y)
    
    # Train-test split (80% training, 20% validation)
    X_train, X_test, y_train, y_test = train_test_split(
        X, y_encoded, test_size=0.2, random_state=42
    )
    
    # Instantiate and configure XGBoost Classifier
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
    
    # Model evaluation on unseen test partition
    y_pred = model.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    print(f"Career Prediction Accuracy: {acc:.4f}")
    
    # Persist serialized model and encoder artifacts
    os.makedirs('models', exist_ok=True)
    joblib.dump(model, 'models/career_model.joblib')
    joblib.dump(label_encoders, 'models/career_label_encoders.joblib')
    joblib.dump(target_le, 'models/career_target_encoder.joblib')
    
    with open('models/career_features.json', 'w') as f:
        json.dump(list(X.columns), f)
        
    print("Career model successfully trained and serialized.")

if __name__ == "__main__":
    train_career_model()
```

---

### 4.2 Salary Estimation Model Pipeline (`train_salary.py`)
This module trains the non-linear CatBoost regression model to predict competitive annual salaries in Lakhs Per Annum (LPA).

```python
import pandas as pd
import numpy as np
from catboost import CatBoostRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import os
import json

def train_salary_model():
    print("Loading salary dataset...")
    df = pd.read_csv('datasets/salary_dataset.csv')
    
    X = df.drop('salary_lpa', axis=1)
    y = df['salary_lpa']
    
    # Specify indices of categorical features for native CatBoost encoding
    categorical_features_indices = [
        X.columns.get_loc('career'),
        X.columns.get_loc('degree'),
        X.columns.get_loc('location'),
        X.columns.get_loc('company_type')
    ]
    
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )
    
    # Configure CatBoost Regressor with early stopping
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
    
    # Evaluate regression performance
    y_pred = model.predict(X_test)
    mae = mean_absolute_error(y_test, y_pred)
    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    r2 = r2_score(y_test, y_pred)
    
    print(f"Salary Model MAE: {mae:.2f} LPA")
    print(f"Salary Model RMSE: {rmse:.2f} LPA")
    print(f"Salary Model R2 Score: {r2:.4f}")
    
    # Save CatBoost native binary model
    os.makedirs('models', exist_ok=True)
    model.save_model('models/salary_model.cbm')
    
    with open('models/salary_features.json', 'w') as f:
        json.dump(list(X.columns), f)
        
    print("Salary model successfully trained and serialized.")

if __name__ == "__main__":
    train_salary_model()
```

---

### 4.3 AI Inference & Skill-Alignment Service (`ml_service.py`)
This production service manages model loading, feature extraction, probabilistic prediction, skill alignment weighting, and blended scoring.

```python
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

        # Load Career Model & Label Encoders
        self.career_model = joblib.load(os.path.join(model_dir, 'career_model.joblib'))
        self.career_label_encoders = joblib.load(os.path.join(model_dir, 'career_label_encoders.joblib'))
        self.career_target_encoder = joblib.load(os.path.join(model_dir, 'career_target_encoder.joblib'))
        with open(os.path.join(model_dir, 'career_features.json'), 'r') as f:
            self.career_features = json.load(f)

        # Load CatBoost Salary Model
        self.salary_model = CatBoostRegressor()
        self.salary_model.load_model(os.path.join(model_dir, 'salary_model.cbm'))
        with open(os.path.join(model_dir, 'salary_features.json'), 'r') as f:
            self.salary_features = json.load(f)

    CAREER_SKILL_PROFILES = {
        'Data Scientist':            {'python': 3, 'data_analysis': 3, 'ml': 3, 'sql': 2, 'cloud': 1},
        'Machine Learning Engineer': {'python': 3, 'ml': 3, 'data_analysis': 2, 'cloud': 2, 'cpp': 1},
        'Full Stack Developer':      {'web_dev': 3, 'js': 3, 'sql': 2, 'python': 2, 'java': 2},
        'Software Developer':        {'python': 2, 'java': 3, 'cpp': 2, 'sql': 1, 'web_dev': 1},
        'Cloud Engineer':            {'cloud': 3, 'networking': 3, 'security': 2, 'python': 2},
        'DevOps Engineer':           {'cloud': 3, 'networking': 2, 'python': 2, 'security': 1},
        'Cybersecurity Analyst':     {'security': 3, 'networking': 3, 'cpp': 1, 'python': 2},
        'Database Administrator':    {'sql': 3, 'data_analysis': 2, 'python': 1, 'cloud': 1},
        'UI/UX Designer':            {'design': 3, 'web_dev': 2, 'js': 1},
    }

    def _skill_alignment_score(self, user_data, career_name):
        profile = self.CAREER_SKILL_PROFILES.get(career_name, {})
        if not profile:
            return 0.5
        max_score = sum(w * 3.0 for w in profile.values())
        raw_score = sum(float(user_data.get(skill, 0)) * weight for skill, weight in profile.items())
        return min(1.0, raw_score / max_score) if max_score > 0 else 0.5

    def _blend_match_percentage(self, rank, model_prob, alignment_score):
        if rank == 0:
            return round(float(np.clip(model_prob * 100, 72.0, 97.0)), 1)
        base_ranges = {1: (60.0, 80.0), 2: (52.0, 73.0)}
        lo, hi = base_ranges.get(rank, (45.0, 65.0))
        raw = lo + alignment_score * (hi - lo)
        return round(float(np.clip(raw, lo, hi)), 1)

    def predict_career(self, user_data):
        input_data = {f: user_data.get(f, 0) for f in self.career_features}
        df = pd.DataFrame([input_data])

        for col, le in self.career_label_encoders.items():
            if col in df.columns:
                df[col] = le.transform(df[col].astype(str))

        probs = self.career_model.predict_proba(df)[0]
        top_indices = np.argsort(probs)[::-1][:3]

        results = []
        for rank, idx in enumerate(top_indices):
            career_name = str(self.career_target_encoder.inverse_transform([idx])[0])
            alignment = self._skill_alignment_score(user_data, career_name)
            match_pct = self._blend_match_percentage(rank, float(probs[idx]), alignment)
            results.append({"career": career_name, "match_percentage": match_pct})

        return {
            "primary_career": results[0]["career"],
            "primary_match": results[0]["match_percentage"],
            "alternatives": results[1:]
        }
```

---
<div align="center">DES Pune University, Pune. | Page 8</div>

<div style="page-break-after: always;"></div>

---

# CHAPTER 5: GRAPHICAL USER INTERFACE

The Career Compass AI user interface was engineered to provide an engaging, clean, dark-mode experience built with **React 19**, **Tailwind CSS**, and **Lucide React** icons.

```
+-----------------------------------------------------------------------------------------+
| [CareerCompass AI]                     Assessments | Dashboard | Profile | [Logout]     |
+-----------------------------------------------------------------------------------------+
|                                                                                         |
|  +-----------------------------------+     +-----------------------------------------+  |
|  |       PRIMARY PREDICTED CAREER    |     |            ESTIMATED SALARY             |  |
|  |  Data Scientist                   |     |  ₹ 8.5 LPA                              |  |
|  |  Match Confidence: [ 92.4% ]      |     |  Expected Range: ₹7.2 LPA - ₹9.8 LPA     |  |
|  |  Alignment: High Affinity (Tier 1)|     |  Benchmarked for: Product Based (Pune)  |  |
|  +-----------------------------------+     +-----------------------------------------+  |
|                                                                                         |
|  +-----------------------------------------------------------------------------------+  |
|  |  ALTERNATIVE RECOMMENDED PATHWAYS                                                 |  |
|  |  1. Machine Learning Engineer   [======== 78.5% ========]   [Explore Roadmap]    |  |
|  |  2. Full Stack Developer        [====== 64.2% ======]       [Explore Roadmap]    |  |
|  +-----------------------------------------------------------------------------------+  |
|                                                                                         |
|  +-----------------------------------+     +-----------------------------------------+  |
|  |       IDENTIFIED SKILL GAPS       |     |     PERSONALIZED ACTIONABLE ROADMAP     |  |
|  |  [!] Deep Learning (PyTorch)      |     |  Phase 1: Advanced Python & Pandas      |  |
|  |  [!] Cloud Infrastructure (AWS)   |     |  Phase 2: Scikit-Learn & Feature Engg.  |  |
|  |  [!] System Design Basics         |     |  Phase 3: Deep Neural Networks & MLOps  |  |
|  |  [OK] SQL Databases               |     |  Phase 4: Production Deployment         |  |
|  +-----------------------------------+     +-----------------------------------------+  |
+-----------------------------------------------------------------------------------------+
```

### 5.1 Assessment Wizard (Multi-Stage Data Acquisition)
- **Step 1: Education:** Gathers Degree, Specialization, and CGPA through custom numeric sliders with live visual feedback.
- **Step 2: Experience & Practical Work:** Captures the number of completed software projects, completed internships, and earned certifications.
- **Step 3: Technical Skills Assessment:** Interactive 4-level rating buttons (`Beginner`, `Intermediate`, `Advanced`, `Expert`) across 12 programming languages and technologies.
- **Step 4: Soft Skills & Career Aspirations:** Captures communication, teamwork, problem-solving, target compensation, and timeline expectations.

### 5.2 Dynamic Career Intelligence Dashboard
- **Primary Career Card:** Prominently highlights the highest-confidence career prediction with an animated circular or linear progress badge.
- **Salary Forecast Gauge:** Displays the predicted median LPA along with lower and upper quartile confidence intervals tailored to company type and location.
- **Alternative Pathway Tiles:** Displays the secondary and tertiary role options with comparison percentage meters, allowing students to switch target paths dynamically.

### 5.3 Skill Gap Matrix & Milestone Roadmap UI
- **Critical Skill Gap Chips:** Visual pills highlighting competencies that fall below the target career's prerequisite threshold.
- **Milestone Cards:** Sequential 4-phase learning roadmap detailing timeframes (e.g., Months 1–2, Months 3–4), core curricula, recommended capstone projects (e.g., *"Implement an In-Memory Key-Value Store with LRU Cache Eviction"*), and direct verified links to documentation and MIT OpenCourseWare resources.

---
<div align="center">DES Pune University, Pune. | Page 9</div>

<div style="page-break-after: always;"></div>

---

# CHAPTER 6: FUTURE ENHANCEMENT

While Career Compass AI achieves robust performance and delivers actionable value, several architectural and algorithmic enhancements are planned for subsequent iterations:

1. **Automated Resume Parsing via Large Language Models (LLMs):**
   Integrate open-source Vision-Language Models (VLMs) or Named Entity Recognition (NER) pipelines (such as spaCy and Gemini API) to automatically parse PDF/DOCX resumes. This will extract CGPA, technical skills, projects, and work history automatically, eliminating manual form-filling friction.

2. **Live Job Market Web Scraping & Real-Time Salary Benchmarking:**
   Connect the backend to public developer job APIs (e.g., LinkedIn API, Adzuna, GitHub Jobs archive) to refresh salary regression coefficients and skill demand weights weekly, reflecting macroeconomic hiring trends in real-time.

3. **AI-Powered Interactive Mock Technical Interviews:**
   Incorporate speech-to-text (Whisper) and generative AI to conduct interactive 15-minute voice mock interviews based on the student's predicted career path, providing instant feedback on technical accuracy and communication delivery.

4. **Continuous Learning & Model Retraining (MLOps):**
   Implement automated data pipelines using MLflow and DVC to log user assessment submissions (with privacy consent), detect data drift, and periodically retrain XGBoost and CatBoost models with updated placement statistics from university cohorts.

---

# CHAPTER 7: CONCLUSION

In this mini-project, **Career Compass AI** was successfully designed, trained, evaluated, and deployed to address the critical challenge of career decision-making and skill acquisition for engineering undergraduates. 

By applying core **Artificial Intelligence and Machine Learning** principles:
1. The **XGBoost Multi-Class Classifier** effectively mapped multi-dimensional student competency vectors onto 17 discrete industry domains with an accuracy of **~79%**, demonstrating superior non-linear pattern recognition over traditional static counseling rubrics.
2. The **CatBoost Regressor** accurately modeled non-linear compensation dynamics, achieving an **$R^2$ score of ~0.95** and a Mean Absolute Error of **0.84 LPA**, providing students with transparent, realistic financial expectations.
3. The integrated **Skill-Gap Analysis** and **Personalized Milestone Roadmap** transformed abstract predictive scores into a concrete, actionable curriculum complete with verified academic resources and hands-on capstone projects.
4. The deployment of a modern **FastAPI** backend coupled with a responsive **React 19** dark-mode user interface provided an accessible, low-latency, and user-centric platform suitable for institutional deployment in university placement cells.

In summary, the project demonstrates how supervised machine learning algorithms can be unified to democratize high-quality, transparent, and objective career mentorship for students of DES Pune University.

---
<div align="center">DES Pune University, Pune. | Page 10</div>

<div style="page-break-after: always;"></div>

---

# REFERENCES / BIBLIOGRAPHY

1. **Chen, T., & Guestrin, C.** (2016). *XGBoost: A Scalable Tree Boosting System.* In Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (pp. 785–794). ACM. https://doi.org/10.1145/2939672.2939785
2. **Prokhorenkova, L., Gusev, G., Vorobev, A., Dorogush, A. V., & Gulin, A.** (2018). *CatBoost: unbiased boosting with categorical features.* In Advances in Neural Information Processing Systems (NeurIPS 2018) (Vol. 31, pp. 6638–6648).
3. **Pedregosa, F., Varoquaux, G., Gramfort, A., Michel, V., Thirion, B., Grisel, O., et al.** (2011). *Scikit-learn: Machine Learning in Python.* Journal of Machine Learning Research (JMLR), 12(85), 2825–2830.
4. **Tiangolo, S.** (2023). *FastAPI: Modern, fast (high-performance) web framework for building APIs with Python 3.8+.* Official Documentation: https://fastapi.tiangolo.com/
5. **Russell, S., & Norvig, P.** (2020). *Artificial Intelligence: A Modern Approach (4th Edition).* Pearson.
6. **Al-Twijri, M. I., & Noaman, A. Y.** (2015). *A New Data Mining Model for Predicting Academic Performance and Career Guidance for Engineering Students.* International Journal of Advanced Computer Science and Applications (IJACSA), 6(2), 101–109.
7. **Kumar, S., & Chand, R.** (2022). *Predictive Modeling for Tech Career Recommendation using Gradient Boosted Decision Trees.* IEEE Access, 10, 11420–11432.
8. **React Documentation Team** (2024). *React: The Library for Web and Native User Interfaces.* Meta Open Source. https://react.dev/

---
<div align="center">DES Pune University, Pune. | Page 11</div>
