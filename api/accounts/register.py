from bson import ObjectId
from urls import app


@app.post("/register")
def register(user: User):
    existing_user = users_collection.find_one({"email": user.email})
    if existing_user:
        return {"message": "User already exists"}
    user_dict = user.dict()
    users_collection.insert_one(user_dict)
    token = generate_token(user.email)
    user_dict["_id"] = str(user_dict["_id"])
    user_dict["token"] = token
    return user_dict