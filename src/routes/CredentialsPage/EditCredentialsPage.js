import React from 'react';
import {
  useHistory, useParams,
} from "react-router-dom";
import {
  useSnackbar,
} from 'notistack';
import useAxios from "axios-hooks";
import {useConfirm} from 'material-ui-confirm';

import {API_URI} from "../../config/constants";
import CredentialsForm from "../../components/forms/CredentialsForm";
import {flattenCpe} from "../../util/flatten";
import {
  Typography,
} from "@material-ui/core";

const EditCredentialsPage = () => {
  const history = useHistory();
  let {credentialId} = useParams();
  const {enqueueSnackbar} = useSnackbar();
  const confirm = useConfirm();

  const [{data, loading, error}] = useAxios(`${API_URI}/credentials/${credentialId}`);

  const [
    , executePut
  ] = useAxios(
    {
      url: `${API_URI}/credentials/${credentialId}`,
      method: 'PUT'
    },
    {manual: true}
  );

  const myAction = (data) => {
    confirm({description: "Are you sure you want to commit your edit?"})
      .then(() => {
        executePut({data: data})
          .then((res) => {
            if (res.status === 200) {
              enqueueSnackbar('Credential edited!');
              history.push(`/credentials/${credentialId}`);
            } else {
              enqueueSnackbar('There has been an error submitting your update.');
              console.log(res);
            }
          })
          .catch((err) => {
            enqueueSnackbar('There has been an error submitting your update.');
            console.log(err);
          });
      })
      .catch((err) => {
        enqueueSnackbar('There has been an error submitting your update.');
        console.log(err);
      });
  };

  return (
    <>
      {loading ?
        <></> :
        <>
          {error ?
            <Typography variant={'h1'}>Something went wrong.</Typography> :
            <CredentialsForm formAction={myAction} defaultValues={flattenCpe(data)} title={'Edit Credentials'}/>
          }
        </>
      }
    </>
  );
};

export default EditCredentialsPage;
