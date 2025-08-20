Exam System Backend

Project Description
This project is a backend API for an Exam System application. It allows users to register and login. The API is built using Node.js, Express, and MongoDB. JWT authentication is used to simulate user sessions.

Features
- User registration (POST /api/auth/register)
- User login (POST /api/auth/login)
- Validates required fields
- Returns appropriate success and error responses

Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (for testing APIs)
- dotenv (for environment variables)
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
1. Clone the repository:
git clone <your-github-repo-url>
cd exam-system-backend

2. Install dependencies:
npm install

3. Create a .env file in the project root:
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/leadmasters_exam
JWT_SECRET=your_secret_key

You can also provide a .env.example file as a template without real secrets.

4. Start the server:
npm run dev

The server should run on http://localhost:4000

API Endpoints

Register User
URL: /api/auth/register
Method: POST
Request Body Example:
{
  "name": "Murali",
  "email": "example@gmail.com",
  "password": "yourpassword"
}

Success Response:
{
  "message": "User registered successfully",
  "user": {
    "name": "Murali",
    "email": "example@gmail.com"
  }
}

Login User
URL: /api/auth/login
Method: POST
Request Body Example:
{
  "email": "example@gmail.com",
  "password": "yourpassword"
}

Success Response:
{
  "message": "Login successful",
  "user": {
    "email": "example@gmail.com"
  },
  "token": "dummy_jwt_token"
}

Testing APIs
1. Open Postman.
2. Import the Postman collection ExamSystemAPI.postman_collection.json.
3. Test the following endpoints:
   - POST /api/auth/register
   - POST /api/auth/login
4. Verify that the responses match the expected results.

Submission Guidelines
- Push all code to a public GitHub repository.
- Include this README.md with setup instructions.
- Include .env.example instead of .env.
- Include Postman collection for API testing.
- Submit the GitHub repository link to: support@leadmasters.ai

Notes
- This project is a practical challenge to evaluate real-world backend development skills.
- Use of tools like ChatGPT or GitHub Copilot is allowed for support.
- Focus on clean code, proper error handling, and clarity of implementation.
