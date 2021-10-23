/* eslint-disable */

import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import './index.css';

const Input = ({options, label, name, onSelect}) => {
  const [open, setOpen] = useState(false);
  const loading = open && options.length === 0;

  useEffect(async () => {
    if (!loading) {
      return undefined;
    }
  }, [loading, options, name]);

  return (
    <Autocomplete
      name={name}
      className="input"
      // style={{ width: '15%' }}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      options={options}
      loading={loading}
      onChange={(event, {id}) => {
        switch (name) {
          case 'faculties':
            localStorage.setItem('faculties', id);
            onSelect({faculty: id});
            break;
          case 'departments':
            localStorage.setItem('departments', id);
            onSelect({department: id});
            break;
          case 'courses':
            localStorage.setItem('courses', id);
            onSelect({course: id});
            break;
          case 'groups':
            localStorage.setItem('groups', id);
            break;
          default:
            alert('Некоректное значение');
            break;
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="standard"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                {/* {params.InputProps.endAdornment} */}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default Input;
