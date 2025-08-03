import React, { useEffect, useState } from 'react';

const messages = [
  'System Error: 0xDEAD',
  '\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0443\u0441\u0442\u0430\u043b? \u041f\u0435\u0440\u0435\u0440\u044b\u0432?',
  'Click OK to continue',
];

const PopupEvent: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const random = messages[Math.floor(Math.random() * messages.length)];
      setMessage(random);
    }, 25000);

    return () => clearInterval(timer);
  }, []);

  if (!message) return null;

  return (
    <div className="popup-event" onClick={() => setMessage(null)}>
      <p>{message}</p>
      <button>OK</button>
    </div>
  );
};

export default PopupEvent;
