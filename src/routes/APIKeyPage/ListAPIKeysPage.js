import React, {
  useEffect,
} from 'react';

import useAxios from "axios-hooks";
import {
  useSnackbar,
} from 'notistack';
import { useApiKey } from '../../util/useApiKey';

import { API_URI } from '../../config/constants';

import APIKeyList from '../../components/APIKeyList';

const ListAPIKeysPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [apikey] = useApiKey(s => [s.apikey]);
  const [{ data: keys, loading, error }] = useAxios({
    url: `${API_URI}/apikeys`,
    headers: {
      'X-API-KEY': apikey,
    },
  });

  useEffect(() => {
    if (error) {
      const message = error.response?.data?.message || 'There was an error loading the requested data.';
      enqueueSnackbar(message);
    }
  }, [error, enqueueSnackbar]);

  // TODO: Clean up or implement the extra params
  return (
    <>
      {!loading &&
        <APIKeyList
          keys={keys?.docs}
        />
      }
    </>
  );
};

export default ListAPIKeysPage;