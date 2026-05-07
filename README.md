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
