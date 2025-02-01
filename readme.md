# 🚀 Microservice `lists-create-service`

## 📌 Description
This microservice allows **creating lists** in a task management system.
It provides a REST API for adding new lists to the system and storing them in the database.

## 🛠️ Technologies
- Node.js
- Express.js
- PostgreSQL (AWS RDS)
- Sequelize (ORM)
- Docker

## 📂 Project Structure
```
lists-create-service/
│── src/
│   ├── controllers/
│   │   ├── createController.js
│   ├── models/
│   │   ├── List.js
│   ├── routes/
│   │   ├── createRoutes.js
│   ├── config/
│   │   ├── database.js
│── server.js
│── Dockerfile
│── docker-compose.yml
│── .env
│── README.md
```

## 🔧 Installation
```sh
npm install
```

## 🚀 Running the Microservice
```sh
npm start
```
Or using Docker:
```sh
docker-compose up --build
```

## 🔗 API Endpoints
### **1️⃣ Create a List**
```sh
curl -X POST http://localhost:5015/lists -H "Content-Type: application/json" -d '{
  "board_id": 1,
  "name": "New List"
}'
```

### **2️⃣ Response Example**
```json
{
  "message": "List created successfully",
  "list": {
    "id": 1,
    "board_id": 1,
    "name": "New List"
  }
}
```

## 📄 License
This project is licensed under the MIT License.

