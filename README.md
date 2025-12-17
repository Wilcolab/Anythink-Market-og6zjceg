# Anythink Market – Tasks Service

This project now contains a **Node.js server** that manages a task list. The original FastAPI (Python) implementation has been **migrated to Node.js** as part of the project requirements.

---

## Project Structure

```
Anythink-Market-og6zjceg/
│
├── node-server/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       └── index.js
│
├── python-server/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── src/
│       └── main.py   (legacy implementation)
│
├── docker-compose.yml
└── README.md
```

---

## What Was Done

* Migrated the task management API from **FastAPI (Python)** to **Node.js (Express)**
* Recreated all existing endpoints with equivalent functionality
* Ensured compatibility with automated Wilco checks
* Dockerized both services and configured them using **Docker Compose**

The **Node.js server is now the primary implementation**.

---

## Getting Started

### Run using Docker

Build and start the services:

```bash
docker compose up
```

The Node server will be available at:

```
http://localhost:8001
```

---

## API Routes (Node.js)

### `GET /`

Returns a simple greeting.

**Response:**

```text
Hello World
```

---

### `GET /tasks`

Returns the list of tasks.

**Response:**

```json
{
  "tasks": [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
  ]
}
```

---

### `POST /tasks`

Adds a new task to the list.

**Request Body:**

```json
{
  "text": "New task"
}
```

**Response:**

```json
{
  "message": "Task added successfully"
}
```

---

## Notes

* Tasks are stored **in-memory** and reset when the server restarts
* The Python server remains in the repository for reference but is no longer the primary service

---

## Development

To run only the Node server locally without Docker:

```bash
cd node-server
npm install
npm start
```

---

✅ Migration completed successfully using GitHub Copilot.
