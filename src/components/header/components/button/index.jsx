import React from 'react';
import Button from '@mui/material/Button';

import './index.css';

const index = ({ onShow, label }) => (
  <Button
    className="button"
    variant="contained"
    onClick={onShow}
  >
    {label}
  </Button>
);

export default index;
