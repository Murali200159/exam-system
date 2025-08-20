Exam System
A full-stack application for a student-side exam module, built for the LeadMasters AI Tech Solutions Pvt. Ltd. fresher selection assessment.
Features

User registration and login with JWT authentication
Start Exam interface with randomized MCQs
Question navigation (Next/Previous)
30-minute countdown timer with auto-submit
Exam submission with score calculation
Result display page

Technology Stack

Frontend: React.js with Tailwind CSS, React Router, Axios
Backend: Node.js with Express.js, MongoDB
Database: MongoDB

Project Structure
exam-system/
├── backend/                # Node.js + Express.js + MongoDB
│   ├── src/
│   │   ├── config/         # DB connection
│   │   ├── controllers/    # Business logic
│   │   ├── middleware/     # JWT auth
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API endpoints
│   │   ├── utils/          # Helper functions
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
├── frontend/               # React.js application
│   ├── public/
│   ├── src/
│   │   ├── api/            # Axios API calls
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page-level components
│   │   ├── context/        # Auth context
│   │   ├── hooks/          # Custom hooks
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
├── postman/                # Postman collection
│   └── exam-system.postman_collection.json
├── README.md

Setup Instructions

Prerequisites:

Node.js (v14 or higher)
MongoDB (local or cloud instance, e.g., MongoDB Atlas)
Git


Backend Setup:
cd backend
npm install

Create a .env file in the backend directory:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

Start the backend:
npm start


Frontend Setup:
cd frontend
npm install
npm start

Create a .env file in the frontend directory:
REACT_APP_API_URL=http://localhost:5000/api


Seed Sample Questions:Run the following curl command:
curl -X POST http://localhost:5000/api/exam/seed-questions


Testing APIs:

Import postman/exam-system.postman_collection.json into Postman.
Set the baseUrl variable to http://localhost:5000/api.
Use "Register User" and "Login User" requests to obtain a JWT token.
Update the token variable in Postman with the obtained token for authenticated requests.



Running the Application

Backend runs on http://localhost:5000.
Frontend runs on http://localhost:3000.
Access the application via the browser at http://localhost:3000.

API Endpoints

POST /api/auth/register: Register a new user
POST /api/auth/login: Login and get JWT token
GET /api/exam/questions: Fetch randomized questions (requires JWT)
POST /api/exam/submit: Submit exam answers (requires JWT)
POST /api/exam/seed-questions: Seed sample questions (for testing)

Submission

Push all code to a public GitHub repository.
Submit the repository link to: support@leadmasters.ai

Notes

Ensure MongoDB is running before starting the backend.
The frontend uses Tailwind CSS for responsive design.
The timer auto-submits the exam after 30 minutes.
Use Postman to test APIs before frontend integration.
The application stores exam results in MongoDB for persistence.
