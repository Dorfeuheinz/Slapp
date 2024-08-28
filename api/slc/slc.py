from fastapi import APIRouter
from pydantic import BaseModel


router = APIRouter()


class User(BaseModel):
    id: int
    deviceType: str
    brightness: int
    deviceStatus: bool
    location: str
    