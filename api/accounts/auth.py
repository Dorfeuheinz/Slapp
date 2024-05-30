import bcrypt
from jwt import encode as jwt_encode
from fastapi.security import HTTPBearer
from pydantic import BaseModel

SECRET_KEY = "TINY_SECRET"
security = HTTPBearer()

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str | None = None

def verify_password(plain_password, hashed_password):
    return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password)

def get_password_hash(password):
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

def generate_token(data: dict) -> str:
    token = jwt_encode(data, SECRET_KEY, algorithm="HS256")
    return token