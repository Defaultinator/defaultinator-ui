import React, {useEffect} from 'react';
import useAxios from "axios-hooks";
import {
  useSnackbar,
} from 'notistack';
import {API_URI} from "../../config/constants";
import CredentialsDataTable from "../../components/CredentialsDataTable";

const CredentialLookupPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [{data, loading, error}] = useAxios(`${API_URI}/credentials`);

  useEffect(() => {
    if(error) {
      console.log(error);
      enqueueSnackbar('There was an error loading the requested data.');
    }
  }, [error, enqueueSnackbar]);

  return(
    <div>
      <CredentialsDataTable loading={loading} data={data?.docs} />
    </div>
  );
};

export default CredentialLookupPage;
