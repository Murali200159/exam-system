import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl mb-4">Exam Results</h2>
      <p className="text-lg">
        Your Score: {state?.score} out of {state?.total}
      </p>
      <button
        className="mt-4 bg-blue-500 text-white p-2 rounded"
        onClick={() => navigate('/start')}
      >
        Retake Exam
      </button>
    </div>
  );
};

export default Result;