from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, List
from app.services.ml_service import ml_service
from app.services.roadmap_service import roadmap_service

router = APIRouter()

class AssessmentData(BaseModel):
    user_data: Dict[str, Any]

@router.post("/predict")
async def predict_career_and_salary(data: AssessmentData):
    try:
        user_data = data.user_data
        
        # 1. Predict Career
        career_result = ml_service.predict_career(user_data)
        if "error" in career_result:
            raise HTTPException(status_code=500, detail=career_result["error"])
            
        primary_career = career_result["primary_career"]
        
        # 2. Estimate Salary
        salary_result = ml_service.estimate_salary(user_data, primary_career)
        if "error" in salary_result:
            raise HTTPException(status_code=500, detail=salary_result["error"])
            
        # 3. Generate Roadmap
        roadmap_result = roadmap_service.generate_roadmap(primary_career, user_data)
        
        return {
            "status": "success",
            "career_prediction": career_result,
            "salary_estimation": salary_result,
            "roadmap": roadmap_result
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
