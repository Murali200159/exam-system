import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const StartExam = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleStart = () => {
    if (token) navigate('/exam');
    else alert('Please login to start the exam');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl mb-4">Welcome to the Exam</h2>
      <button
        className="w-full bg-green-500 text-white p-2 rounded"
        onClick={handleStart}
      >
        Start Exam
      </button>
    </div>
  );
};

export default StartExam;