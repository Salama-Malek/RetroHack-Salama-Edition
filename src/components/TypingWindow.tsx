import React, { useState } from 'react';

interface TypingWindowProps {
  snippet: string;
  paused?: boolean;
}

const TypingWindow: React.FC<TypingWindowProps> = ({ snippet, paused = false }) => {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    let result = '';
    for (let i = 0; i < value.length && i < snippet.length; i++) {
      const expected = snippet[i];
      const typed = value[i];
      result += typed;
      if (typed !== expected) {
        break;
      }
    }
    setInput(result);
  };

  const isCorrect = snippet.startsWith(input);

  const renderedSnippet = snippet.split('').map((char, idx) => {
    let className = '';
    if (idx < input.length) {
      className = char === input[idx] ? 'correct' : 'incorrect';
    }
    return (
      <span key={idx} className={className}>
        {char}
      </span>
    );
  });

  return (
    <div className="typing-window">
      <pre>{renderedSnippet}</pre>
      <textarea
        value={input}
        onChange={handleChange}
        className={isCorrect ? 'correct' : 'incorrect'}
        disabled={paused}
        rows={snippet.split('\n').length}
      />
    </div>
  );
};

export default TypingWindow;
