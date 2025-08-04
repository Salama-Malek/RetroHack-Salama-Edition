import React, { useState } from 'react';
import TypingWindow from './components/TypingWindow';
import PopupEvent from './components/PopupEvent';
import Countdown from './components/Countdown';

const sampleSnippet = `print('Hello, world!')`;

const App: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(false);

  return (
    <div className="app">
      {!started ? (
        <Countdown onComplete={() => setStarted(true)} />
      ) : (
        <>
          <TypingWindow snippet={sampleSnippet} paused={paused} />
          <PopupEvent onPause={setPaused} />
        </>
      )}
    </div>
  );
};

export default App;