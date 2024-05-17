import React from 'react';
import {TextField } from '@mui/material';

function CustomTextField({ id, label, name, type, value, onChange, required, fullWidth }) {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required={required}
      fullWidth={fullWidth}
      id={id}
      type={type}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default CustomTextField;
