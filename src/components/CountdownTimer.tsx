'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2026-08-19T18:00:00'); // August 19, 2026 at 6:00 PM (adventure begins - sunset and sound event)

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-warm-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-warm-gray-700">
      <h3 className="text-lg font-semibold text-white text-center mb-4">
        Adventure Begins In:
      </h3>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-sage-800/30 rounded-lg p-3">
          <div className="text-2xl md:text-3xl font-bold text-white">
            {timeLeft.days}
          </div>
          <div className="text-sm text-white/70">
            Day{timeLeft.days !== 1 ? 's' : ''}
          </div>
        </div>
        <div className="bg-sage-800/30 rounded-lg p-3">
          <div className="text-2xl md:text-3xl font-bold text-white">
            {timeLeft.hours}
          </div>
          <div className="text-sm text-white/70">
            Hour{timeLeft.hours !== 1 ? 's' : ''}
          </div>
        </div>
        <div className="bg-sage-800/30 rounded-lg p-3">
          <div className="text-2xl md:text-3xl font-bold text-white">
            {timeLeft.minutes}
          </div>
          <div className="text-sm text-white/70">
            Minute{timeLeft.minutes !== 1 ? 's' : ''}
          </div>
        </div>
        <div className="bg-sage-800/30 rounded-lg p-3">
          <div className="text-2xl md:text-3xl font-bold text-white">
            {timeLeft.seconds}
          </div>
          <div className="text-sm text-white/70">
            Second{timeLeft.seconds !== 1 ? 's' : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
