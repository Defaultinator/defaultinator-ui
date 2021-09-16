import React from 'react';
import {
  useHistory,
} from "react-router-dom";
import {
  useSnackbar,
} from 'notistack';
import useAxios from "axios-hooks";

import {API_URI} from "../../config/constants";
import CredentialsForm from "../../components/forms/CredentialsForm";

const AddCredentialsPage = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const [
    ,executePost
  ] = useAxios(
    {
      url: `${API_URI}/credentials`,
      method: 'POST'
    },
    { manual: true }
  );

  const myAction = (data) => {
    executePost({data: data}).then((res) => {
      if(res.status === 200) {
        enqueueSnackbar('Credential added!');
        history.push(`/credentials/${res.data._id}`);
      } else {
        enqueueSnackbar('There has been an error submitting your credentials.');
        console.log(res);
      }
    });
  };

  return (
    <CredentialsForm formAction={myAction} />
  );
};

export default AddCredentialsPage;
