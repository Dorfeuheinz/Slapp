from fastapi import HTTPException
from .auth import generate_token, get_password_hash, Token
from .users import User
from db import users_collection
from fastapi import APIRouter

router = APIRouter()

@router.post("/")
async def register(user: User):
    existing_user = users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    user_data = user.model_copy()
    hashed_password = get_password_hash(user_data.password)
    user_dict = user_data.model_dump()
    user_dict.update({"password": hashed_password.decode('utf-8')})
    users_collection.insert_one(user_dict)
    access_token = generate_token(data={"sub": user_data.username})
    return Token(access_token=access_token, token_type="bearer")
