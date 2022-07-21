import React, { useEffect } from 'react';
import {
  Controller,
  useForm,
} from 'react-hook-form';
import PropTypes from 'prop-types';

import {
  Grid,
  Button,
  Paper,
  Container,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

import FormField from '../../FormField';
import { APIKeyType } from '../../../config/types';

const APIKeyForm = ({
  formAction,
  defaultValues = { email: '', notes: '', isAdmin: false },
  loading = false,
}) => {
  const {
    handleSubmit, control, reset, formState: { errors },
  } = useForm({ defaultValues });

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  const onSubmit = (data) => {
    formAction(data);
  };

  // TODO: Should validate clientside that the email is valid.Would need YUM or something.
  return (
    <Paper sx={{ display: 'inline-block', margin: 'auto' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container sx={{ padding: 2, width: 300 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12}>
              <FormField
                name="email"
                sx={{ width: '100%' }}
                placeholder="E-mail Address"
                control={control}
                controllerProps={{ rules: { required: true } }}
                error={errors.email}
                textFieldProps={{ disabled: loading }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                name="notes"
                placeholder="Notes"
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
        <Container sx={{ padding: 2, width: 300 }}>
          <Button
            color="secondary"
            onClick={() => reset({ email: '', notes: '', isAdmin: false })}
            disabled={loading}
          >
            Clear
          </Button>
          <Button
            type="submit"
            variant="outlined"
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
  defaultValues: { email: '', notes: '', isAdmin: false },
};

export default APIKeyForm;
