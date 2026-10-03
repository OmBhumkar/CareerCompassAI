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
        
        # 2. Collect all predicted careers (primary + alternatives)
        all_careers = [
            {"career": career_result["primary_career"], "match_percentage": career_result["primary_match"]}
        ] + career_result.get("alternatives", [])
        
        # 3. Compute salary estimation and tailored roadmap for EACH career
        career_details = {}
        for item in all_careers:
            c_name = item["career"]
            salary = ml_service.estimate_salary(user_data, c_name)
            roadmap = roadmap_service.generate_roadmap(c_name, user_data)
            career_details[c_name] = {
                "career": c_name,
                "match_percentage": item["match_percentage"],
                "salary_estimation": salary,
                "roadmap": roadmap
            }
            
        return {
            "status": "success",
            "career_prediction": career_result,
            "all_careers": all_careers,
            "career_details": career_details,
            "salary_estimation": career_details[primary_career]["salary_estimation"],
            "roadmap": career_details[primary_career]["roadmap"]
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/career-details")
async def get_career_details(data: Dict[str, Any]):
    try:
        user_data = data.get("user_data", {})
        career = data.get("career", "")
        if not career:
            raise HTTPException(status_code=400, detail="Career name is required")
        salary = ml_service.estimate_salary(user_data, career)
        roadmap = roadmap_service.generate_roadmap(career, user_data)
        return {
            "career": career,
            "salary_estimation": salary,
            "roadmap": roadmap
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

