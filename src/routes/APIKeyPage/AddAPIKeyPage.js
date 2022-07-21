import React, {
  useEffect,
} from 'react';
import {
  useHistory,
} from 'react-router-dom';
import {
  useSnackbar,
} from 'notistack';
import useAxios from 'axios-hooks';
import { useApiKey } from '../../util/useApiKey';

import { API_URI } from '../../config/constants';
import APIKeyForm from '../../components/forms/APIKeyForm/APIKeyForm';

const AddAPIKeyPage = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [apikey] = useApiKey((s) => [s.apikey]);

  const [{ error }, executePost] = useAxios(
    {
      url: `${API_URI}/apikeys`,
      method: 'POST',
      headers: {
        'X-API-KEY': apikey,
      },
    },
    { manual: true },
  );

  useEffect(() => {
    if (error) {
      const message = error.response?.data?.message || 'There was an error loading the requested data.';
      enqueueSnackbar(message);
    }
  }, [error, enqueueSnackbar]);

  const myAction = (data) => {
    executePost({ data }).then((res) => {
      if (res.status === 200) {
        enqueueSnackbar('API Key added!');
        history.push(`/apikeys/${res.data._id}`);
      } else {
        enqueueSnackbar('There has been an error submitting your credentials.');
        console.log(res);
      }
    });
  };

  return (
    <APIKeyForm formAction={myAction} />
  );
};

export default AddAPIKeyPage;
