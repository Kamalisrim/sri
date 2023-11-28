import React, { useState } from 'react';
import TextBox from '../components/TextBox';
import Buttons from '../components/Buttons';

const Home: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleLog = () => {
    console.log('Text:', text);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <div>
      <TextBox value={text} onChange={setText} />
      <Buttons onLog={handleLog} onClear={handleClear} />
    </div>
  );
};

export default Home;
