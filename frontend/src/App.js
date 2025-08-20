import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import StartExam from './pages/StartExam';
import ExamPage from './pages/ExamPage';
import Result from './pages/Result';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/start" element={<StartExam />} />
            <Route path="/exam" element={<ExamPage />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;