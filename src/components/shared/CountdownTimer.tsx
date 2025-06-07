import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 24 hours when countdown reaches zero
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-2 text-secondary">
        <Clock className="mr-2 h-5 w-5 text-primary" />
        <span className="font-semibold">Oferta por tempo limitado:</span>
      </div>
      
      <div className="flex items-center justify-center space-x-2">
        <div className="bg-secondary text-white text-center p-2 rounded-md w-16">
          <div className="text-xl font-bold">{formatTime(timeLeft.hours)}</div>
          <div className="text-xs">Horas</div>
        </div>
        <div className="text-xl font-bold">:</div>
        <div className="bg-secondary text-white text-center p-2 rounded-md w-16">
          <div className="text-xl font-bold">{formatTime(timeLeft.minutes)}</div>
          <div className="text-xs">Minutos</div>
        </div>
        <div className="text-xl font-bold">:</div>
        <div className="bg-secondary text-white text-center p-2 rounded-md w-16">
          <div className="text-xl font-bold">{formatTime(timeLeft.seconds)}</div>
          <div className="text-xs">Segundos</div>
        </div>
      </div>
      
      <p className="mt-2 text-sm text-center text-gray-600">
        Últimas <span className="text-primary font-bold">10 vagas</span> com desconto!
      </p>
    </div>
  );
};

export default CountdownTimer;