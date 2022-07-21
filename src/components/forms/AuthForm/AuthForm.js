import React from 'react';
import {
  useForm,
} from 'react-hook-form';
import PropTypes from 'prop-types';

import {
  Grid,
  Button,
  Paper,
  Container,
} from '@mui/material';

import FormField from '../../FormField';

const AuthForm = ({ onSubmit, apikey, onClear }) => {
  const {
    handleSubmit, control, reset, formState: { errors },
  } = useForm();

  return (
    <Paper sx={{ display: 'inline-block', margin: 'auto' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container sx={{ padding: 2 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12}>
              <FormField
                name="apikey"
                placeholder="Enter Your API Key"
                control={control}
                controllerProps={{ rules: { required: true } }}
                defaultValue={apikey}
                error={errors.apikey}
              />
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ padding: 2 }}>
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
