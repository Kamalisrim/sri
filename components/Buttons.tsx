import React from 'react';
import Button from '@mui/material/Button';

interface ButtonsProps {
  onLog: () => void;
  onClear: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onLog, onClear }) => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={onLog}>
        Log
      </Button>
      <Button variant="contained" color="secondary" onClick={onClear}>
        Clear
      </Button>
    </div>
  );
};

export default Buttons;
