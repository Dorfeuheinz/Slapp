from fastapi import APIRouter

from accounts import login, users, register

api_router = APIRouter()
api_router.include_router(login.router, prefix="/login", tags=["login"])
# api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(register.router, prefix="/register", tags=["register"])

