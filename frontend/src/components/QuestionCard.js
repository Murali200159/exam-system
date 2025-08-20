import React from 'react';

const QuestionCard = ({ question, index, selectedAnswer, onAnswer }) => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-lg mb-4">
        Question {index + 1}: {question.text}
      </h3>
      {question.options.map((option, idx) => (
        <div key={idx} className="mb-2">
          <label className="flex items-center">
            <input
              type="radio"
              name={`question-${question._id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onAnswer(question._id, option)}
              className="mr-2"
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default QuestionCard;