import React, {
  useEffect,
} from 'react';
import {
  useParams,
} from "react-router-dom";
import {
  Link, useHistory,
} from 'react-router-dom';
import useAxios from "axios-hooks";

import { useConfirm } from "material-ui-confirm";
import { useSnackbar } from "notistack";

import { API_URI } from '../../config/constants';

import CredentialCard from '../../components/CredentialCard';

const CredentialDetailsPage = () => {
  let { credentialId } = useParams();
  const history = useHistory();
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();
  const [{ data: credential, loading, error }] = useAxios(`${API_URI}/credentials/${credentialId}`);
  
  const [
    , executeDelete
  ] = useAxios(
    {
      url: `${API_URI}/credentials/${credentialId}`,
      method: 'DELETE'
    },
    { manual: true }
  );

  useEffect(() => {
    if (error) {
      console.log(error);
      enqueueSnackbar('There was an error loading the requested data.');
    }
  }, [error, enqueueSnackbar]);

  const handleDelete = () => {
    confirm({ description: "Are you sure you want to delete this entry?" })
      .then(() => {
        executeDelete()
          .then((res) => {
            if (res.status === 200) {
              enqueueSnackbar('Credential deleted!');
              history.push(`/credentials`);
            } else {
              enqueueSnackbar('There has been an error deleting this record.');
              console.log(res);
            }
          })
          .catch((err) => {
            enqueueSnackbar('There has been an error deleting this record.');
            console.log(err);
          });
      })
      .catch(() => {

      });
  };

  return (
    <>
      {!loading &&
        <CredentialCard
          credential={credential}
          primaryButtonText={'Edit'}
          primaryButtonProps={{ component: Link, to: `/credentials/${credentialId}/edit` }}
          secondaryButtonText={'Delete'}
          secondaryButtonProps={{onClick:handleDelete}}
        />
      }
    </>
  );
};

export default CredentialDetailsPage;