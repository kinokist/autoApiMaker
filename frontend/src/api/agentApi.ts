import axios from "axios";

// Axios 인스턴스 생성
const API = axios.create({
  baseURL: "http://localhost:8000", // FastAPI Gateway
});

// 프로젝트 타입 정의
export interface Project {
  id: string;
  name: string;
  status: string;
}

// 배포 상태 타입 정의
export interface DeployStatusResponse {
  status: string;
  url: string;
}

// 백엔드 생성 요청 타입
export interface GenerateRequest {
  query: string;
  schema: string;
}

// 백엔드 생성 응답 타입
export interface GenerateResponse {
  success: boolean;
  message?: string;
  data?: any;
}

// 백엔드 생성 API
export const generateBackend = async (data: GenerateRequest) => {
  console.log("📤 generateBackend 요청 데이터:", data); // 요청 로그 찍기
  const res = await API.post<GenerateResponse>("/agent/generate", data);
  console.log("📥 generateBackend 응답 데이터:", res.data); // 응답 로그 찍기
  return res;
};

// 프로젝트 목록 가져오기
export const getProjects = () =>
  API.get<Project[]>("/projects");

// 배포 상태 가져오기
export const getDeployStatus = (id: string) =>
  API.get<DeployStatusResponse>(`/deploy/${id}`);
