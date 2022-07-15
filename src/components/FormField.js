import React from "react";
import { Controller } from "react-hook-form";

import {
  FormControl,
  TextField
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  input: {},
}));

const FormField = ({ name, placeholder, control, autocompleteprops, defaultValue = "", multiline = false, controllerProps, error, textFieldProps }) => {
  const classes = useStyles();

  return (
    <Controller
      {...controllerProps}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) =>
        <FormControl
          className={classes.input}
        >
          <TextField
            error={!!error}
            helperText={error && "Invalid value."}
            variant={"outlined"}
            label={placeholder}
            autoComplete='off'
            multiline={multiline}
            {...field}
            {...textFieldProps}
            {...autocompleteprops}
          />
        </FormControl>
      }
      name={name}
    />
  );
};

export default FormField;
