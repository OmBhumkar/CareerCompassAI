import pandas as pd
import numpy as np
import random
import os

def generate_career_dataset(num_samples=15000):
    np.random.seed(42)
    random.seed(42)
    
    degrees = ['B.Tech', 'B.E.', 'B.Sc', 'BCA', 'MCA', 'M.Tech', 'B.Com', 'BBA', 'MBA', 'BA', 'MA', 'Ph.D']
    specializations = ['CSE', 'IT', 'ECE', 'EE', 'Mech', 'Civil', 'Finance', 'Marketing', 'Economics', 'Physics', 'Mathematics', 'Biology', 'Psychology', 'Design', 'Literature']
    
    data = []
    
    for _ in range(num_samples):
        degree = random.choice(degrees)
        specialization = random.choices(specializations, weights=[0.2, 0.1, 0.1, 0.05, 0.05, 0.05, 0.08, 0.08, 0.05, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04])[0]
        cgpa = round(np.random.normal(7.5, 1.0), 2)
        cgpa = max(5.0, min(10.0, cgpa))
        
        # Base probabilities
        python = random.randint(0, 3)
        java = random.randint(0, 3)
        cpp = random.randint(0, 3)
        js = random.randint(0, 3)
        sql = random.randint(0, 3)
        
        web_dev = random.randint(0, 3)
        data_analysis = random.randint(0, 3)
        ml = random.randint(0, 3)
        cloud = random.randint(0, 3)
        security = random.randint(0, 3)
        networking = random.randint(0, 3)
        design = random.randint(0, 3)
        
        projects = random.randint(0, 10)
        internships = random.randint(0, 4)
        certifications = random.randint(0, 5)
        
        # Introduce logical correlations for the target
        # Determine base scores for each career
        scores = {
            'Software Developer': java*2 + cpp*2 + python + js + projects,
            'Full Stack Developer': js*3 + web_dev*3 + sql*2 + projects,
            'Data Scientist': python*3 + sql*2 + data_analysis*3 + ml*2,
            'Data Engineer': python*2 + sql*4 + cloud*3 + data_analysis,
            'Data Analyst': sql*3 + data_analysis*4 + python + (1 if specialization in ['Economics', 'Finance'] else 0)*5,
            'Machine Learning Engineer': python*3 + ml*4 + cloud + projects,
            'Cloud Engineer': cloud*4 + networking*2 + python + certifications*2,
            'Cybersecurity Analyst': security*4 + networking*3 + python,
            'UI/UX Designer': design*4 + js,
            'DevOps Engineer': cloud*3 + python*2 + networking*2 + projects,
            'Database Administrator': sql*4 + cloud*2,
            'Product Manager': (1 if specialization in ['MBA', 'BBA', 'Finance', 'Marketing'] else 0)*10 + projects*2,
            'Business Analyst': data_analysis*2 + (1 if specialization in ['Economics', 'Finance', 'B.Com', 'MBA'] else 0)*10,
            'Digital Marketer': (1 if specialization in ['Marketing', 'BA', 'BBA'] else 0)*12 + design*2,
            'Financial Analyst': (1 if specialization in ['Finance', 'Economics', 'B.Com'] else 0)*15 + sql,
            'HR Manager': (1 if specialization in ['Psychology', 'MBA', 'BA'] else 0)*12,
            'Graphic Designer': design*5 + (1 if specialization == 'Design' else 0)*10
        }
        
        # Add some random noise
        for k in scores:
            scores[k] += random.uniform(0, 5)
            
        career = max(scores, key=scores.get)
        
        # Create record
        record = {
            'degree': degree,
            'specialization': specialization,
            'cgpa': cgpa,
            'python': python,
            'java': java,
            'cpp': cpp,
            'js': js,
            'sql': sql,
            'web_dev': web_dev,
            'data_analysis': data_analysis,
            'ml': ml,
            'cloud': cloud,
            'security': security,
            'networking': networking,
            'design': design,
            'projects': projects,
            'internships': internships,
            'certifications': certifications,
            'career': career
        }
        data.append(record)
        
    df = pd.DataFrame(data)
    os.makedirs('datasets', exist_ok=True)
    df.to_csv('datasets/career_dataset.csv', index=False)
    print(f"Generated career dataset with {num_samples} samples.")

def generate_salary_dataset(num_samples=15000):
    np.random.seed(42)
    random.seed(42)
    
    degrees = ['B.Tech', 'B.E.', 'B.Sc', 'BCA', 'MCA', 'M.Tech', 'B.Com', 'BBA', 'MBA', 'BA', 'MA', 'Ph.D']
    careers = [
        'Software Developer', 'Full Stack Developer', 'Data Scientist', 
        'Data Engineer', 'Data Analyst',
        'Machine Learning Engineer', 'Cloud Engineer', 'Cybersecurity Analyst', 
        'UI/UX Designer', 'DevOps Engineer', 'Database Administrator',
        'Product Manager', 'Business Analyst', 'Digital Marketer', 
        'Financial Analyst', 'HR Manager', 'Graphic Designer'
    ]
    locations = ['Tier 1', 'Tier 2', 'Tier 3', 'Remote']
    company_types = ['Startup', 'MNC', 'Service Based', 'Product Based']
    
    # Base salaries (in LPA) for Tier 1 Product Based 0 experience
    base_salaries = {
        'Software Developer': 6.0,
        'Full Stack Developer': 7.0,
        'Data Scientist': 8.5,
        'Data Engineer': 8.0,
        'Data Analyst': 5.5,
        'Machine Learning Engineer': 9.0,
        'Cloud Engineer': 7.5,
        'Cybersecurity Analyst': 7.0,
        'UI/UX Designer': 5.5,
        'DevOps Engineer': 8.0,
        'Database Administrator': 6.0,
        'Product Manager': 9.5,
        'Business Analyst': 6.5,
        'Digital Marketer': 5.0,
        'Financial Analyst': 7.0,
        'HR Manager': 5.5,
        'Graphic Designer': 4.5
    }
    
    data = []
    
    for _ in range(num_samples):
        career = random.choice(careers)
        degree = random.choice(degrees)
        experience_years = round(random.uniform(0, 10), 1)
        location = random.choices(locations, weights=[0.4, 0.3, 0.1, 0.2])[0]
        company = random.choices(company_types, weights=[0.3, 0.3, 0.2, 0.2])[0]
        
        projects = random.randint(0, 15)
        certifications = random.randint(0, 8)
        technical_score = random.randint(30, 100) # out of 100
        
        # Calculate salary
        salary = base_salaries[career]
        
        # Experience multiplier (non-linear)
        salary *= (1 + (experience_years * 0.15) + (experience_years**2 * 0.01))
        
        # Degree multiplier
        if degree in ['M.Tech', 'MCA']:
            salary *= 1.1
            
        # Location multiplier
        if location == 'Tier 1':
            salary *= 1.2
        elif location == 'Remote':
            salary *= 1.1
        elif location == 'Tier 3':
            salary *= 0.8
            
        # Company multiplier
        if company == 'Product Based':
            salary *= 1.4
        elif company == 'MNC':
            salary *= 1.2
        elif company == 'Service Based':
            salary *= 0.8
            
        # Skills & Extras
        salary += (projects * 0.1)
        salary += (certifications * 0.15)
        salary *= (0.8 + (technical_score / 500)) # up to 20% bump
        
        # Add realistic noise +/- 15%
        noise = random.uniform(0.85, 1.15)
        salary *= noise
        
        # Round to 1 decimal place (LPA)
        salary = round(salary, 1)
        
        record = {
            'career': career,
            'degree': degree,
            'experience_years': experience_years,
            'location': location,
            'company_type': company,
            'projects_count': projects,
            'certifications': certifications,
            'technical_score': technical_score,
            'salary_lpa': salary
        }
        data.append(record)
        
    df = pd.DataFrame(data)
    os.makedirs('datasets', exist_ok=True)
    df.to_csv('datasets/salary_dataset.csv', index=False)
    print(f"Generated salary dataset with {num_samples} samples.")

if __name__ == "__main__":
    generate_career_dataset(20000)
    generate_salary_dataset(20000)
