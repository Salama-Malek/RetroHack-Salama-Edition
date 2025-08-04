import React, { useEffect, useRef, useState } from 'react';

const messages = [
  'System Error: 0xDEAD',
  '\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0443\u0441\u0442\u0430\u043b? \u041f\u0435\u0440\u0435\u0440\u044b\u0432?',
  'Click OK to continue',
];

interface PopupEventProps {
  onPause: (paused: boolean) => void;
}

const PopupEvent: React.FC<PopupEventProps> = ({ onPause }) => {
  const [message, setMessage] = useState<string | null>(null);
  const timerRef = useRef<number>();

  const schedulePopup = () => {
    timerRef.current = window.setTimeout(() => {
      const random = messages[Math.floor(Math.random() * messages.length)];
      setMessage(random);
      onPause(true);
    }, 20000 + Math.random() * 10000);
  };

  useEffect(() => {
    schedulePopup();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const closePopup = () => {
    setMessage(null);
    onPause(false);
    schedulePopup();
  };

  if (!message) return null;

  return (
    <div className="popup-event">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={closePopup}>OK</button>
      </div>
    </div>
  );
};

export default PopupEvent;
