import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiClient from '../api/apiClient';
import QuestionCard from '../components/QuestionCard';
import Timer from '../components/Timer';

const ExamPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await apiClient.get('/exam/questions');
        setQuestions(res.data);
      } catch (error) {
        alert('Failed to fetch questions');
        navigate('/start');
      }
    };
    fetchQuestions();
  }, [navigate]);

  const handleAnswer = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = async () => {
    try {
      const res = await apiClient.post('/exam/submit', { answers });
      navigate('/result', { state: res.data });
    } catch (error) {
      alert('Submission failed');
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl">
          Question {currentQuestion + 1} of {questions.length}
        </h2>
        <Timer onTimeUp={handleSubmit} />
      </div>
      {questions[currentQuestion] && (
        <QuestionCard
          question={questions[currentQuestion]}
          index={currentQuestion}
          selectedAnswer={answers[questions[currentQuestion]._id]}
          onAnswer={handleAnswer}
        />
      )}
      <div className="flex justify-between mt-6">
        <button
          className="bg-gray-500 text-white p-2 rounded disabled:opacity-50"
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
        >
          Previous
        </button>
        <button
          className="bg-gray-500 text-white p-2 rounded disabled:opacity-50"
          disabled={currentQuestion === questions.length - 1}
          onClick={() => setCurrentQuestion(currentQuestion + 1)}
        >
          Next
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={handleSubmit}
        >
          Submit Exam
        </button>
      </div>
    </div>
  );
};

export default ExamPage;