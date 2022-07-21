import React from 'react';
import {
  useHistory,
} from 'react-router-dom';
import {
  useSnackbar,
} from 'notistack';
import useAxios from 'axios-hooks';
import { useConfirm } from 'material-ui-confirm';

import { API_URI } from '../../config/constants';
import CredentialsForm from '../../components/forms/CredentialsForm';
import useApiKey from '../../util/useApiKey';

const AddCredentialsPage = () => {
  const history = useHistory();
  const [apiKey] = useApiKey((s) => [s.apikey]);
  const confirm = useConfirm();

  const { enqueueSnackbar } = useSnackbar();

  const [
    , executePost,
  ] = useAxios(
    {
      url: `${API_URI}/credentials`,
      method: 'POST',
      headers: {
        'X-API-KEY': apiKey,
      },
    },
    { manual: true },
  );

  const myAction = (data) => {
    confirm({ description: 'By submitting this record, you agree that your submission was generated from a piblicly available source and does not contain illegal material.' })
      .then(() => {
        executePost({ data }).then((res) => {
          if (res.status === 200) {
            enqueueSnackbar('Credential added!');
            history.push(`/credentials/${res.data._id}`);
          } else {
            enqueueSnackbar('There has been an error submitting your credentials.');
            console.log(res);
          }
        });
      });
  };

  return (
    <CredentialsForm formAction={myAction} />
  );
};

export default AddCredentialsPage;
