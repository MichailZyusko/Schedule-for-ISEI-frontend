import React from 'react';
import TextField from '@mui/material/TextField';
import '../input/index.css';

const DatePicker = () => (
  <TextField
    id="date"
    label="Выберите неделю"
    type="date"
    variant="standard"
            // style={{ width: '15%' }}
    className="input"
    onChange={() => {
      const date = document.getElementById('date').value;
      localStorage.setItem('dates', JSON.stringify(date));
    }}
    InputLabelProps={{ shrink: true }}
  />
);

export default DatePicker;
