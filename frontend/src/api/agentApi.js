import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", // FastAPI Gateway
});

export const generateBackend = (data) =>
  API.post("/agent/generate", data);

export const getProjects = () =>
  API.get("/projects");

export const getDeployStatus = (id) =>
  API.get(`/deploy/${id}`);