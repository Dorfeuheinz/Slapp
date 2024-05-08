from bson import ObjectId
from urls import app

@app.post("/login")
def login(user: User):
    user_data = users_collection.find_one({"email": user.email, "password": user.password})
    if user_data:
        token = generate_token(user.email)
        user_data["_id"] = str(user_data["_id"])
        user_data["token"] = token
        return user_data
    return {"message": "Invalid email or password"}