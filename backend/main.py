# main.py
from fastapi import FastAPI
from routers import projects, deploy, agent

app = FastAPI()

app.include_router(projects.router)
app.include_router(deploy.router)
app.include_router(agent.router)
