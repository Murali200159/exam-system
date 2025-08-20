import React from 'react';
import { useTimer } from '../hooks/useTimer';

const Timer = ({ onTimeUp }) => {
  const { timeLeft, formatTime } = useTimer(30 * 60, onTimeUp);

  return (
    <div className="text-lg font-semibold">
      Time Left: {formatTime(timeLeft)}
    </div>
  );
};

export default Timer;