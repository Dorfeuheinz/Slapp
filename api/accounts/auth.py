import jwt
from jwt import encode as jwt_encode
from fastapi.security import HTTPBearer

SECRET_KEY = "your-secret-key-goes-here"
security = HTTPBearer()


def generate_token(email: str) -> str:
    payload = {"email": email}
    token = jwt_encode(payload, SECRET_KEY, algorithm="HS256")
    return token