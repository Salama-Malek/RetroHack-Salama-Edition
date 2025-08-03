import React, { useState } from 'react';

interface TypingWindowProps {
  snippet: string;
}

const TypingWindow: React.FC<TypingWindowProps> = ({ snippet }) => {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const isCorrect = snippet.startsWith(input);

  return (
    <div className="typing-window">
      <pre>{snippet}</pre>
      <textarea
        value={input}
        onChange={handleChange}
        className={isCorrect ? 'correct' : 'incorrect'}
        rows={snippet.split('\n').length}
      />
    </div>
  );
};

export default TypingWindow;
