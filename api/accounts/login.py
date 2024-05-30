from typing import Annotated
import bcrypt
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from .auth import generate_token, Token
from .users import User, authenticate_user
from db import users_collection, db
from fastapi import APIRouter

router = APIRouter()

@router.post("/")
def login(user: User):
    user_data = users_collection.find_one({"email": user.email})
    if not user_data:
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    if not bcrypt.checkpw(user.password.encode('utf-8'), user_data["password"].encode('utf-8')):
        raise HTTPException(status_code=400, detail="Incorrect email or password")
    access_token = generate_token(data={"sub": user_data.username})
    return Token(access_token=access_token, token_type="bearer")

@router.post("/token")
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
) -> Token:
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = generate_token(data={"sub": user.username})
    return Token(access_token=access_token, token_type="bearer")
