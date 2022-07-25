import React, {
  useEffect,
} from 'react';
import {
  Link,
  useParams,

  useHistory, useLocation,
} from 'react-router-dom';
import useAxios from 'axios-hooks';

import { useConfirm } from 'material-ui-confirm';
import { useSnackbar } from 'notistack';
import { useApiKey } from '../../util/useApiKey';

import { API_URI } from '../../config/constants';

import APIKeyCard from '../../components/APIKeyCard';

const ViewAPIKeyPage = () => {
  const { apiKeyId } = useParams();
  const history = useHistory();
  const location = useLocation();
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();
  const [apikey] = useApiKey((s) => [s.apikey]);
  const [{ data: apiKey, loading, error }, executeGet] = useAxios(
    {
      url: `${API_URI}/apikeys/${apiKeyId}`,
      headers: {
        'X-API-KEY': apikey,
      },
    },
    { manual: true },
  );

  useEffect(() => {
    executeGet();
  }, [executeGet, location]);

  useEffect(() => {
    if (error) {
      const message = error.response?.data?.message || 'There was an error loading the requested data.';
      enqueueSnackbar(message, { variant: 'error' });
    }
  }, [error, enqueueSnackbar]);

  const [{ error: deleteError },
    executeDelete,
  ] = useAxios(
    {
      url: `${API_URI}/apikeys/${apiKeyId}`,
      method: 'DELETE',
      headers: {
        'X-API-KEY': apikey,
      },
    },
    { manual: true },
  );

  useEffect(() => {
    if (deleteError) {
      const message = deleteError.response?.data?.message || 'There was an error deleting the requested data.';
      enqueueSnackbar(message, { variant: 'error' });
    }
  }, [deleteError, enqueueSnackbar]);

  const handleDelete = () => {
    confirm({ description: 'Are you sure you want to delete this entry?' })
      .then(() => {
        executeDelete()
          .then((res) => {
            if (res.status === 200) {
              enqueueSnackbar('API key deleted!', { variant: 'success' });
              history.push('/apikeys');
            } else {
              enqueueSnackbar('There has been an error deleting this record.', { variant: 'error' });
            }
          })
          .catch(() => {
            enqueueSnackbar('There has been an error deleting this record.', { variant: 'error' });
          });
      })
      .catch(() => {

      });
  };

  // TODO: Clean up or implement the extra params
  return (
    <APIKeyCard
      loading={loading}
      apiKey={apiKey}
      deleteButtonProps={{ onClick: handleDelete }}
      editButtonProps={{ component: Link, to: `/apikeys/${apiKeyId}/edit` }}
    />

  );
};

export default ViewAPIKeyPage;
