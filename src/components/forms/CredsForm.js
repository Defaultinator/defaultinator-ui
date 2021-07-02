import React from "react";

import {
  Grid,
} from "@material-ui/core";

import FormField from "../FormField";

const CredsForm = ({control}) => {
  const inputs = [
    {
      "name": "username",
      "placeholder": "Username",
    },
    {
      "name": "password",
      "placeholder": "Password",
    },
  ];

  return (
    <Grid container spacing={4} justify={'center'}>
      {inputs.map((input, idx) =>
        <Grid item md key={idx}>
          <FormField {...input} control={control}/>
        </Grid>
      )}
    </Grid>
  );
};

export default CredsForm;
