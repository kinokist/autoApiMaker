# utils/generator.py
def generate_code(query: str, schema: str) -> str:
    # 여기서는 단순히 FastAPI 엔드포인트 코드 문자열을 반환
    return f"""
from fastapi import APIRouter

router = APIRouter()

@router.get("/generated")
def run_query():
    # TODO: 실제 DB 연결 및 쿼리 실행
    return {{"query": "{query}", "schema": "{schema}"}}
"""
