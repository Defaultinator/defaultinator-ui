import React from 'react';
import {
  useHistory,
} from "react-router-dom";
import {
  useSnackbar,
} from 'notistack';
import useAxios from "axios-hooks";

import {API_URI} from "../../config/constants";
import APIKeyForm from "../../components/forms/APIKeyForm/APIKeyForm";

const AddAPIKeyPage = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const [
    ,executePost
  ] = useAxios(
    {
      url: `${API_URI}/apikeys`,
      method: 'POST'
    },
    { manual: true }
  );

  const myAction = (data) => {
    executePost({data: data}).then((res) => {
      if(res.status === 200) {
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
