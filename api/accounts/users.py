from pydantic import BaseModel
from fastapi import HTTPException, Depends


class User(BaseModel):
    username: str = None # idk if required
    email: str
    password: str



@app.get("/api/user")
def get_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    # Extract the token from the Authorization header
    token = credentials.credentials
    # Authenticate and retrieve the user data from the database based on the token
    # Here, you would implement the authentication logic and fetch user details
    # based on the token from the database or any other authentication mechanism
    # For demonstration purposes, assuming the user data is stored in local storage
    # Note: Local storage is not accessible from server-side code
    # This is just a placeholder to demonstrate the concept
    user_data = {
    "username": "John Doe",
    "email": "johndoe@example.com"
    }
    if user_data["username"] and user_data["email"]:
        return user_data
    raise HTTPException(status_code=401, detail="Invalid token")