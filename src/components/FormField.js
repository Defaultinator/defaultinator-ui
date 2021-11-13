import React from "react";
import { Controller } from "react-hook-form";

import {
  FormControl,
  TextField
} from "@material-ui/core";
import {
  makeStyles
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {},
}));

const FormField = ({ name, placeholder, control, autocompleteprops, defaultValue = "", multiline = false, controllerProps, error }) => {
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
            {...autocompleteprops}
          />
        </FormControl>
      }
      name={name}
    />
  );
};

export default FormField;
