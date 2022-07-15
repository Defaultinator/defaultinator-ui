import React from "react";

import {
  FormControl,
  Grid, InputLabel, MenuItem, Select,
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import {Controller} from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  select: {
    minWidth: 150,
  }
}));

const ProtocolFormSection = ({control}) => {
  const classes = useStyles();

  const protocols = [
    {
      "name": <em>Unknown</em>,
      "value": "unknown"
    },
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
    <Grid container spacing={4} justifyContent={'flex-start'}>
        <Grid item md>
          <Controller
            name={'protocol'}
            control={control}
            defaultValue={""}
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
                  defaultValue={""}
                >
                  {protocols.map((protocol, idx) =>
                    <MenuItem value={protocol.value} key={idx}>
                      {protocol.name}
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
            }
          />
        </Grid>
    </Grid>
  );
};

export default ProtocolFormSection;
