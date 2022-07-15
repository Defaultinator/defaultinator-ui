import React, {useEffect} from "react";
import {Controller} from "react-hook-form";

import PopupState, {bindFocus, bindPopper} from 'material-ui-popup-state';

import {
  FormControl,
  Grid,
  Popper,
  MenuItem,
  InputLabel,
  Select,
} from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import useApiKey from '../../util/useApiKey';
import FormField from "../FormField";
import useAxios from "axios-hooks";
import {API_URI} from '../../config/constants';
import AutoCompleteSuggestions from "../AutoCompleteSuggestions";

const useStyles = makeStyles((theme) => ({
  select: {
    minWidth: 150,
  }
}));

const CPEFormElement = ({control, input, autoCompleteParams}) => {
  const [apiKey] = useApiKey(s => [s.apikey]);
  const prefix = autoCompleteParams[input.name];

  const params = {
    field: input.name,
    prefix: prefix,
    ...autoCompleteParams,
  };

  delete params[input.name];
  delete params['references'];
  delete params['username'];
  delete params['password'];

  Object.keys(params).forEach((key) => {
    if(!params[key]) delete params[key];
  });

  // TODO: This autocomplete makes things go super slow. It rerenders the whole form every keypress. It works, but yikes
  const [{data}, executeRequest] = useAxios({
      url: `${API_URI}/dictionary/typeahead`,
      params: params,
      headers: {
        'X-API-KEY': apiKey,
      }
    },
    {
      manual: true
    });

  useEffect(() => {
    const delayRequest = setTimeout(() => {
      executeRequest().catch(() => {});
    }, 500);

    return () => clearTimeout(delayRequest);
  }, [prefix, executeRequest]);

  return (
    <PopupState variant="popover" popupId={`popover-${input.name}`}>
      {(popupState) => (
        <>
          <FormField
            {...input}
            control={control}
            autocompleteprops={bindFocus(popupState)}
          />
          { data &&
            <Popper {...bindPopper(popupState)}  style={{zIndex: 20}}>
              <AutoCompleteSuggestions suggestions={data} />
            </Popper>
          }
        </>
      )}
    </PopupState>
  );
};

const CPEFormSection = ({control, autoCompleteParams}) => {
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
    <Grid container spacing={4} justifyContent={'center'}>
      <Grid item>
        <Controller
          name={'part'}
          control={control}
          defaultValue={""}
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
        />
      </Grid>
      {inputs.map((input, idx) =>
        <Grid item xs={6} md={3} sm={3} key={idx}>
          <CPEFormElement control={control} input={input} autoCompleteParams={autoCompleteParams}/>
        </Grid>
      )}
    </Grid>
  );
};

export default CPEFormSection;