import React, {
    useEffect,
  } from 'react';

  import useAxios from "axios-hooks";
  import {
    useSnackbar,
  } from 'notistack';

  import { API_URI } from '../../config/constants';
  
  import APIKeyList from '../../components/APIKeyList';
  
  const ListAPIKeysPage = () => {
    const [{ data: keys, loading, error }] = useAxios(`${API_URI}/apikeys`);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (error) {
          console.log(error);
          enqueueSnackbar('There was an error loading the requested data.');
        }
      }, [error, enqueueSnackbar]);

    // TODO: Clean up or implement the extra params
    return (
      <>
        {!loading &&
          <APIKeyList
            keys={keys.docs}
          />
        }
      </>
    );
  };
  
  export default ListAPIKeysPage;