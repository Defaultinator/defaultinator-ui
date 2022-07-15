import React, { useEffect } from 'react';
import {
  Controller,
  useForm,
} from "react-hook-form";
import PropTypes from 'prop-types';

import {
  Grid,
  Button,
  Paper,
  Container,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import makeStyles from '@mui/styles/makeStyles';
import FormField from '../../FormField';
import { APIKeyType } from '../../../config/types';

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 650,
    display: 'inline-block',
    margin: 'auto',
  },
  container: {
    padding: theme.spacing(2),
    width: 300,
  },
  input: {
    width: '100%',
  }
}));

const APIKeyForm = (
  {
    formAction,
    defaultValues = {email: '', notes: '', isAdmin: false},
    loading = false,
  }
) => {
  const classes = useStyles();
  const { handleSubmit, control, reset, formState: { errors } } = useForm({defaultValues: defaultValues});

  useEffect(()=> {
    reset(defaultValues);
  }, [defaultValues, reset])

  const onSubmit = (data) => {
    formAction(data);
  };

  // TODO: Should validate clientside that the email is valid.Would need YUM or something.
  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container className={classes.container}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12}>
              <FormField
                name={"email"}
                className={classes.input}
                placeholder={"E-mail Address"}
                control={control}
                controllerProps={{ rules: { required: true } }}
                error={errors.email}
                textFieldProps={{ disabled: loading }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                name={"notes"}
                placeholder={"Notes"}
                multiline
                control={control}
                textFieldProps={{ disabled: loading }}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="isAdmin"
                control={control}
                render={({ field }) => (
                  <FormGroup>
                    <FormControlLabel control={<Checkbox disabled={loading} {...field} />} label="Admin?" />
                  </FormGroup>
                )}
              />
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container}>
          <Button
            color="secondary"
            onClick={() => reset({ email: '', notes: '', isAdmin: false })}
            disabled={loading}
          >
            Clear
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
          >
            Submit
          </Button>
        </Container>
      </form>
    </Paper>
  );
};

APIKeyForm.propTypes = {
  formAction: PropTypes.func.isRequired,
  defaultValues: PropTypes.shape(APIKeyType),
};

APIKeyForm.defaultProps = {
  defaultValues: {email: '', notes: '', isAdmin: false},
};

export default APIKeyForm;