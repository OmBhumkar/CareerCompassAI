from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import Dict, Any, List
from app.models.database import get_db, AssessmentHistory
from datetime import datetime
from jose import jwt
from app.routers.auth import SECRET_KEY, ALGORITHM

router = APIRouter()

class HistoryCreate(BaseModel):
    user_id: int
    user_data: Dict[str, Any]
    prediction_result: Dict[str, Any]

@router.post("/history")
def save_history(history: HistoryCreate, db: Session = Depends(get_db)):
    db_history = AssessmentHistory(
        user_id=history.user_id,
        user_data=history.user_data,
        prediction_result=history.prediction_result,
        created_at=datetime.utcnow().isoformat()
    )
    db.add(db_history)
    db.commit()
    return {"status": "success"}

@router.get("/history/{user_id}")
def get_history(user_id: int, db: Session = Depends(get_db)):
    histories = db.query(AssessmentHistory).filter(AssessmentHistory.user_id == user_id).order_by(AssessmentHistory.id.desc()).all()
    return histories
