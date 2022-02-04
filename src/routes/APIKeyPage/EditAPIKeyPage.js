import React, {
  useEffect,
} from 'react';
import {
  useHistory,
  useParams,
} from "react-router-dom";
import {
  useSnackbar,
} from 'notistack';
import useAxios from "axios-hooks";
import { useApiKey } from '../../util/useApiKey';

import { API_URI } from "../../config/constants";
import APIKeyForm from "../../components/forms/APIKeyForm/APIKeyForm";

const AddAPIKeyPage = () => {
  const history = useHistory();
  const { apiKeyId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [apikey] = useApiKey(s => [s.apikey]);

  const [{ data: apiKey, loading, error }] = useAxios(
    {
      url: `${API_URI}/apikeys/${apiKeyId}`,
      method: 'GET',
      headers: {
        'X-API-KEY': apikey,
      },
    },
  );

  useEffect(() => {
    if (error) {
      const message = error.response?.data?.message || 'There was an error updating the API Key.';
      enqueueSnackbar(message, { variant: 'error' });
    }
  }, [error, enqueueSnackbar]);

  const [{ error: putError }, executePut] = useAxios(
    {
      url: `${API_URI}/apikeys/${apiKeyId}`,
      method: 'PUT',
      headers: {
        'X-API-KEY': apikey,
      },
    },
    { manual: true }
  );

  useEffect(() => {
    if (putError) {
      const message = putError.response?.data?.message || 'There was an error updating the API Key.';
      enqueueSnackbar(message, { variant: 'error' });
    }
  }, [putError, enqueueSnackbar]);

  const myAction = (data) => {
    executePut({ data: data }).then((res) => {
      if (res.status === 200) {
        enqueueSnackbar('API Key updated!', { variant: 'success' });
        history.push(`/apikeys/${res.data._id}`);
      } else {
        enqueueSnackbar('There has been an error updating the specified API Key.', { variant: 'error' });
        console.log(res);
      }
    });
  };
  
  return (
    <APIKeyForm
      formAction={myAction}
      loading={loading || error}
      defaultValues={apiKey !== {} ? apiKey : undefined}
    />
  );
};

export default AddAPIKeyPage;
