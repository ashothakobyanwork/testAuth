import {useState, useEffect} from 'react';

interface TimerProps {
  minutes: string;
  seconds: string;
  isActive: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
}

function useTimer(initialMinutes: number, initialSecondes: number): TimerProps {
  const [time, setTime] = useState<number>(
    initialMinutes * 60 + initialSecondes,
  );
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, time]);

  const start = () => {
    setIsActive(true);
  };

  const pause = () => {
    setIsActive(false);
  };

  const reset = () => {
    setIsActive(false);
    setTime(initialMinutes * 60 + initialSecondes);
  };

  return {
    minutes: `${Math.floor(time / 60)
      .toString()
      .padStart(2, '0')}`,
    seconds: `${(time % 60).toString().padStart(2, '0')}`,
    isActive,
    start,
    pause,
    reset,
  };
}

export default useTimer;
