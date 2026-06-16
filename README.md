# 🚀 CodeSync AI

CodeSync AI is a next-generation collaborative coding platform that enables developers to code together in real time with AI-powered assistance.

Inspired by VS Code Live Share, Replit Multiplayer, and modern AI coding tools, CodeSync AI provides a collaborative environment for developers, students, interviewers, and teams.

---

## ✨ Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Secure Password Hashing with bcrypt

### Room Management
- Create Coding Rooms
- Unique Room IDs
- Join Existing Rooms
- Room-Based Collaboration

### Real-Time Collaboration
- Socket.IO Integration
- Real-Time Room Joining
- Live User Presence (In Progress)
- Real-Time Code Synchronization (Coming Soon)

### AI Features (Planned)
- AI Code Explanation
- AI Bug Detection
- AI Refactoring Suggestions
- AI Pair Programmer

### Code Execution (Planned)
- Multi-language Support
- Online Compiler Integration
- Instant Output Display

---

## 🛠️ Tech Stack

### Frontend

- React.js
- TypeScript
- Vite
- Tailwind CSS
- ShadCN UI
- Framer Motion
- Socket.IO Client

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- Socket.IO

### Database

- MongoDB Atlas

---

## 📂 Project Structure

```bash
codesync/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── socket/
│   │   └── server.js
│
├── project/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── context/
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Neha-004/codesync-ai.git
```

### Backend Setup

```bash
cd backend

npm install
```

Create `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

Run Backend

```bash
npm start
```

or

```bash
node src/server.js
```

---

### Frontend Setup

```bash
cd project

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 🔐 Authentication APIs

### Register

```http
POST /api/auth/register
```

Request:

```json
{
  "username": "Neha",
  "email": "neha@gmail.com",
  "password": "123456"
}
```

---

### Login

```http
POST /api/auth/login
```

Request:

```json
{
  "email": "neha@gmail.com",
  "password": "123456"
}
```

---

## 🏠 Room APIs

### Create Room

```http
POST /api/rooms/create
```

Request:

```json
{
  "roomName": "DSA Interview Room"
}
```

---

### Get Room

```http
GET /api/rooms/:roomId
```

---

## 📈 Current Progress

| Feature | Status |
|----------|---------|
| Authentication | ✅ |
| MongoDB Integration | ✅ |
| Room Creation | ✅ |
| Room Fetching | ✅ |
| Socket.IO Setup | ✅ |
| Join Room Event | ✅ |
| Live Users | 🚧 |
| Live Chat | 🚧 |
| Real-Time Code Sync | 🚧 |
| AI Assistant | 🚧 |
| Code Execution | 🚧 |
| Deployment | 🚧 |

---

## 🎯 Project Vision

The goal of CodeSync AI is to create an AI-powered collaborative development environment where developers can:

- Collaborate in real time
- Conduct technical interviews
- Practice coding together
- Receive AI assistance
- Execute code online
- Learn and build faster

---

## 👩‍💻 Author

**Neha**

GitHub: https://github.com/Neha-004

---

## ⭐ Support

If you like this project, consider giving it a star on GitHub.
