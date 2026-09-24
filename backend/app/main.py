from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import assessment, ml, auth

app = FastAPI(title="Career Compass AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(assessment.router, prefix="/api/assessment", tags=["assessment"])
app.include_router(ml.router, prefix="/api/ml", tags=["ml"])

@app.get("/")
def root():
    return {"message": "Welcome to Career Compass AI API"}
