import React, {
  useEffect,
} from 'react';
import {
  useHistory, useParams,
} from 'react-router-dom';
import {
  useSnackbar,
} from 'notistack';
import useAxios from 'axios-hooks';
import { useConfirm } from 'material-ui-confirm';
import {
  Typography,
} from '@mui/material';
import { useApiKey } from '../../util/useApiKey';

import { API_URI } from '../../config/constants';
import CredentialsForm from '../../components/forms/CredentialsForm';
import { flattenCpe } from '../../util/flatten';

const EditCredentialsPage = () => {
  const history = useHistory();
  const { credentialId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const confirm = useConfirm();
  const [apikey] = useApiKey((s) => [s.apikey]);

  const [{ data, loading, error }] = useAxios({
    url: `${API_URI}/credentials/${credentialId}`,
    headers: {
      'X-API-KEY': apikey,
    },
  });

  const [{ error: putError }, executePut] = useAxios(
    {
      url: `${API_URI}/credentials/${credentialId}`,
      method: 'PUT',
      headers: {
        'X-API-KEY': apikey,
      },
    },
    { manual: true },
  );

  useEffect(() => {
    if (putError) {
      const message = putError.response?.data?.message || 'There was an error loading the requested data.';
      enqueueSnackbar(message, { variant: 'error' });
    }
  }, [putError, enqueueSnackbar]);

  useEffect(() => {
    if (error) {
      const message = error.response?.data?.message || 'There was an error loading the requested data.';
      enqueueSnackbar(message, { variant: 'error' });
    }
  }, [error, enqueueSnackbar]);

  const myAction = (myData) => {
    confirm({ description: 'Are you sure you want to commit your edit?' })
      .then(() => {
        executePut({ myData })
          .then((res) => {
            if (res.status === 200) {
              enqueueSnackbar('Credential edited!', { variant: 'success' });
              history.push(`/credentials/${credentialId}`);
            }
          });
      })
      .catch(() => {
        // Confirm dialogue was cancelled. Just back out gracefully.
      });
  };

  if (loading) return null;

  return (
    error
      ? <Typography variant="h1">Something went wrong.</Typography>
      : <CredentialsForm formAction={myAction} defaultValues={flattenCpe(data)} title="Edit Credentials" />
  );
};

export default EditCredentialsPage;
