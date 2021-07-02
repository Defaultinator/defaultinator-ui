import React from "react";

import {
  FormControl,
  Grid, InputLabel, MenuItem, Select,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {Controller} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  select: {
    minWidth: 150,
  }
}));

const ProtocolForm = ({control}) => {
  const classes = useStyles();

  const protocols = [
    {
      "name": "Other",
      "value": "other"
    },
    {
      "name": "HTTP",
      "value": "http",
    },
    {
      "name": "Telnet",
      "value": "telnet"
    },
    {
      "name": "SSH",
      "value": "ssh"
    },
  ];

  return (
    <Grid container spacing={4} justify={'start'}>
        <Grid item md>
          <Controller
            control={control}
            render={({field}) =>
              <FormControl variant={"outlined"} className={classes.select}>
                <InputLabel
                  id={"add-protocol-label"}
                >
                  Protocol
                </InputLabel>
                <Select
                  id={"add-protocol-input"}
                  labelId={"add-protocol-label"}
                  label={"Protocol"}
                  {...field}
                >
                  {protocols.map((protocol, idx) =>
                    <MenuItem value={protocol.value} key={idx}>
                      {protocol.name}
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
            }
            name={'protocol'}
          />
        </Grid>
    </Grid>
  );
};

export default ProtocolForm;
