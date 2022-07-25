import React from 'react';
import { Controller } from 'react-hook-form';

import {
  FormControl,
  TextField,
} from '@mui/material';

const FormField = ({
  name, placeholder, control, autocompleteprops, defaultValue = '', multiline = false, controllerProps, error, textFieldProps,
}) => (
  <Controller
    {...controllerProps}
    control={control}
    defaultValue={defaultValue}
    render={({ field }) => (
      <FormControl>
        <TextField
          error={!!error}
          helperText={error && 'Invalid value.'}
          variant="outlined"
          label={placeholder}
          autoComplete="off"
          multiline={multiline}
          {...field}
          {...textFieldProps}
          {...autocompleteprops}
        />
      </FormControl>
    )}
    name={name}
  />
);

export default FormField;
