import React from "react";

import {
  Grid,
} from "@material-ui/core";

import FormField from "../FormField";

const CredsFormSection = ({control}) => {
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
    <Grid container spacing={4} justify="space-evenly">
      {inputs.map((input, idx) =>
        <Grid item key={idx}>
          <FormField {...input} control={control}/>
        </Grid>
      )}
    </Grid>
  );
};

export default CredsFormSection;
