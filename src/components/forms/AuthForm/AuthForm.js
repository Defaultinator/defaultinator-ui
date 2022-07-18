import React from 'react';
import {
  useForm,
} from "react-hook-form";
import PropTypes from 'prop-types';

import {
  Grid,
  Button,
  Paper,
  Container,
} from "@mui/material";

import makeStyles from '@mui/styles/makeStyles';
import FormField from '../../FormField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    margin: 'auto',
  },
  container: {
    padding: theme.spacing(2),
  },
}));

const AuthForm = ({onSubmit, apikey, onClear}) => {
  const classes = useStyles();
  const { handleSubmit, control, reset, formState: { errors } } = useForm();

  // const onSubmit = (data) => {
  //   setApikey(data.apikey);
  // };

  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container className={classes.container}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12}>
              <FormField
                name={"apikey"}
                placeholder={"Enter Your API Key"}
                control={control}
                controllerProps={{ rules: { required: true } }}
                defaultValue={apikey}
                error={errors.apikey}
              />
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container}>
          <Button
            color="secondary"
            onClick={() => {
              reset({ apikey: '' });
              onClear();
            }}
          >
            Clear
          </Button>
          <Button type="submit" variant="outlined" color="primary">Submit</Button>
        </Container>
      </form>
    </Paper>
  );
};

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  apikey: PropTypes.string,
  onClear: PropTypes.func.isRequired,
};

AuthForm.defaultProps = {
};

export default AuthForm;