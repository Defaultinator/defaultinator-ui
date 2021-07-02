import React from "react";
import {Controller} from "react-hook-form";

import {
  FormControl,
  Grid,
  MenuItem,
  InputLabel,
  Select,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import FormField from "../FormField";

const useStyles = makeStyles((theme) => ({
  select: {
    minWidth: 150,
  }
}));

const CPEForm = ({control}) => {
  const classes = useStyles();

  const inputs = [
    {
      "name": "vendor",
      "placeholder": "Vendor",
    },
    {
      "name": "product",
      "placeholder": "Product",
    },
    {
      "name": "version",
      "placeholder": "Version",
    },
    {
      "name": "update",
      "placeholder": "Update",
    },
    {
      "name": "edition",
      "placeholder": "Edition",
    },
    {
      "name": "language",
      "placeholder": "Language",
    },
  ];

  return (
    <Grid container spacing={4} justify={'center'}>
      <Grid item>
        <Controller
          control={control}
          render={({field}) =>
            <FormControl variant={"outlined"} className={classes.select}>
              <InputLabel
                id={"add-credentials-part-label"}
              >
                Part
              </InputLabel>
              <Select
                id={"add-credentials-part-input"}
                labelId={"add-credentials-part-label"}
                label={"Part"}
                {...field}
              >
                <MenuItem value={""}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'a'}>
                  a
                </MenuItem>
                <MenuItem value={'o'}>
                  o
                </MenuItem>
                <MenuItem value={'h'}>
                  h
                </MenuItem>
              </Select>
            </FormControl>
          }
          name={'part'}
        />
      </Grid>
      {inputs.map((input, idx) =>
        <Grid item xs={6} md={3} sm={3} key={idx}>
          <FormField {...input} control={control}/>
        </Grid>
      )}
    </Grid>
  );
};

export default CPEForm;
