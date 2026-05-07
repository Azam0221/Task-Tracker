# Task Tracker - Backend

A REST API built with Node.js, Express, and TypeScript for the Task Tracker mobile application.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB (Atlas)
- Mongoose
- JWT Authentication
- bcryptjs

## Features

- User signup and login with hashed passwords
- JWT based authentication
- Full CRUD operations for tasks
- Protected routes using middleware
- Input validation on all routes

## Project Structure

src/
models/       # Mongoose schemas for User and Task
routes/       # Auth and Task route handlers
middleware/   # JWT authentication middleware
index.ts      # Express app entry point

## Prerequisites

- Node.js v18+
- MongoDB Atlas account

## Setup and Installation

1. Clone the repository
```bash
git clone https://github.com/Azam0221/task-tracker.git
cd backend
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root of the backend folder

PORT=3001
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key

4. Replace `your_mongodb_atlas_connection_string` with your actual Atlas URI from MongoDB Atlas dashboard

## Running the Server

Development mode with hot reload:
```bash
npm run dev
```

Production build:
```bash
npm run build
npm start
```

Server runs on `http://localhost:3001`

## API Endpoints

### Auth

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | /auth/signup | Register a new user | No |
| POST | /auth/login | Login and get token | No |

### Tasks

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| GET | /tasks | Get all tasks for user | Yes |
| POST | /tasks | Create a new task | Yes |
| PATCH | /tasks/:id | Update a task | Yes |
| DELETE | /tasks/:id | Delete a task | Yes |

### Request Examples

Signup
```json
POST /auth/signup
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

Create Task
```json
POST /tasks
Authorization: Bearer your_token_here
{
  "title": "Complete assignment",
  "description": "Submit before deadline"
}
```

## Frontend Repository

https://github.com/Azam0221/Task-Tracker-Frontend
