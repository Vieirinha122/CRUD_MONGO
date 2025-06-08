# *CRUD_MONGO Documentation*  
A simple CRUD application in Node.js with MongoDB.

## *📌 Overview*  
This project implements basic CRUD (Create, Read, Update, Delete) operations using:  
- *Node.js* (Backend)  
- *Express* (HTTP Framework)  
- *MongoDB* (NoSQL Database)  
- *Mongoose* (ODM for MongoDB)  

Ideal for learning how to integrate Node.js with MongoDB.  

---

## *🚀 Getting Started*  

### *Prerequisites*  
- Node.js (v18+)  
- MongoDB (local or Atlas)  
- Git (optional)  

### *Installation*  
1. Clone the repository:  
   sh
   git clone https://github.com/Vieirinha122/CRUD_MONGO.git
   cd CRUD_MONGO
   
2. Install dependencies:  
   sh
   npm install
   
3. Configure MongoDB:  
   - Create a .env file and set:  
     env
     MONGO_URI=your_mongodb_connection_string
     
4. Start the server:  
   sh
   npm start
   
   The server will run at http://localhost:3000.  

---

## *📚 API Documentation*  

### *Available Endpoints*  

| Method | Endpoint      | Description                      |
|--------|---------------|-----------------------------------|
| POST   | /users      | Create a new user.               |
| GET    | /users      | List all users.                  |
| GET    | /users/:id  | Get a user by ID.                |
| PUT    | /users/:id  | Update a user by ID.             |
| DELETE | /users/:id  | Delete a user by ID.             |

---

### *📝 Request Examples*  

#### *1. Create User (POST)*  
*Endpoint:* POST /users  
*Request Body:*  
json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}

*Response:*  
json
{
  "_id": "507f191e810c19729de860ea",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}


#### *2. List Users (GET)*  
*Endpoint:* GET /users  
*Response:*  
json
[
  {
    "_id": "507f191e810c19729de860ea",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }
]


#### *3. Update User (PUT)*  
*Endpoint:* PUT /users/:id  
*Request Body:*  
json
{
  "age": 31
}

*Response:*  
json
{
  "_id": "507f191e810c19729de860ea",
  "name": "John Doe",
  "email": "john@example.com",
  "age": 31
}


#### *4. Delete User (DELETE)*  
*Endpoint:* DELETE /users/:id  
*Response:*  
json
{
  "message": "User deleted successfully."
}


---

## *❓ FAQ*  

### *1. How to connect to MongoDB Atlas?*  
Modify MONGO_URI in .env to:  
env
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.example.mongodb.net/<dbname>?retryWrites=true&w=majority


### *2. How to test the API?*  
Use tools like:  
- *Postman*  
- *Insomnia*  
- *curl* (Example: curl -X GET http://localhost:3000/users)  

---

## *📌 Conclusion*  
This project is a practical introduction to MongoDB with Node.js. Feel free to contribute or expand its features!  

🔗 *Repository:* [github.com/Vieirinha122/CRUD_MONGO](https://github.com/Vieirinha122/CRUD_MONGO)  

--- 

This documentation is *straightforward and concise*, ideal for a basic CRUD project. If the project grows, consider adding:  
- *Architecture Documentation* (C4 Model)  
- *Advanced Tutorials* (e.g., Authentication, Pagination)  
- *Deployment Guide* (Docker, AWS, etc.)
