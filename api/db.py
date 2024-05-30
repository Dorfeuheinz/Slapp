from pymongo import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://tinymesh_shrey:Shrey%40tinymesh123%23@tinycluster.o5fvbqn.mongodb.net/?retryWrites=true&w=majority&appName=TinyCluster"

client = MongoClient(uri, server_api=ServerApi('1'))

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client.get_database("tinymesh")
users_collection = db.get_collection("users")

print(users_collection)
