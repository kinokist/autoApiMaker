# routers/agent.py
from fastapi import APIRouter
from pydantic import BaseModel
from utils.generator import generate_code

router = APIRouter(prefix="/agent")

class GenerateRequest(BaseModel):
    query: str
    schema: str

class GenerateResponse(BaseModel):
    success: bool
    message: str | None = None
    data: dict | None = None

@router.post("/generate", response_model=GenerateResponse)
def generate_backend(req: GenerateRequest):
    try:
        code = generate_code(req.query, req.schema)
        # TODO: 생성된 코드를 파일로 저장하고 서버에 반영
        return GenerateResponse(success=True, data={"code": code})
    except Exception as e:
        return GenerateResponse(success=False, message=str(e))
