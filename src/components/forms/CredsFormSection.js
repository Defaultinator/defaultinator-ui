import React from 'react';

import {
  Grid,
} from '@mui/material';

import FormField from '../FormField';

function CredsFormSection({ control }) {
  const inputs = [
    {
      name: 'username',
      placeholder: 'Username',
    },
    {
      name: 'password',
      placeholder: 'Password',
    },
  ];

  return (
    <Grid container spacing={4} justifyContent="space-evenly">
      {inputs.map((input, idx) => (
        <Grid item key={idx}>
          <FormField {...input} control={control} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CredsFormSection;
