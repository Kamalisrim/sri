import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

interface TextBoxProps {
  value: string;
  onChange: (value: string) => void;
}

const TextBox: React.FC<TextBoxProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <TextField
      label="Type something..."
      variant="outlined"
      value={value}
      onChange={handleChange}
    />
  );
};

export default TextBox;
