import React from 'react';
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
} from "@material-ui/core";

import {
  makeStyles,
} from "@material-ui/core/styles";
import FormField from '../../FormField';

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
}));

const APIKeyForm = (
  {
    formAction,
    title = 'Create New API Key',
  }
) => {
  const classes = useStyles();
  const { handleSubmit, control, reset, formState: { errors } } = useForm();

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
                placeholder={"E-mail Address"}
                control={control}
                controllerProps={{ rules: { required: true } }}
                defaultValue=''
                error={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                name={"notes"}
                placeholder={"Notes"}
                multiline
                control={control}
                defaultValue=''
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="isAdmin"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <FormGroup>
                    <FormControlLabel control={<Checkbox {...field} />} label="Admin?" />
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
          >
            Clear
          </Button>
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </Container>
      </form>
    </Paper>
  );
};

APIKeyForm.propTypes = {
  formAction: PropTypes.func.isRequired,
  title: PropTypes.string,
};

APIKeyForm.defaultProps = {
  title: 'Create New API Key',
};

export default APIKeyForm;