import React from "react";
import {Controller} from "react-hook-form";

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

const FormField = ({name, placeholder, control, defaultValue = ""}) => {
  const classes = useStyles();

  return (
    <Controller
      control={control}
      render={({field}) =>
        <FormControl
          className={classes.input}
        >
          <TextField
            variant={"outlined"}
            label={placeholder}
            autoComplete='off'
            {...field}
          />
        </FormControl>
      }
      name={name}
    />
  );
};

export default FormField;
