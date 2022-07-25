import React, {
  useEffect,
} from 'react';
import {
  useParams,

  Link, useHistory, useLocation,
} from 'react-router-dom';
import useAxios from 'axios-hooks';

import { useConfirm } from 'material-ui-confirm';
import { useSnackbar } from 'notistack';

import { API_URI } from '../../config/constants';
import { useApiKey } from '../../util/useApiKey';

import CredentialCard from '../../components/CredentialCard/CredentialCard';

const CredentialDetailsPage = () => {
  const { credentialId } = useParams();
  const location = useLocation();
  const [apikey, isAdmin] = useApiKey((s) => [s.apikey, s.isAdmin]);
  const history = useHistory();
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();
  const [{ data: credential, loading, credError }, executeGet] = useAxios(
    {
      url: `${API_URI}/credentials/${credentialId}`,
      headers: {
        'X-API-KEY': apikey,
      },
    },
    { manual: true },
  );

  useEffect(() => {
    executeGet();
  }, [executeGet, location]);

  // Error handling for initial credential loading
  useEffect(() => {
    if (credError) {
      enqueueSnackbar('There was an error loading the requested data.', { variant: 'error' });
    }
  }, [credError, enqueueSnackbar]);

  const [{ deleteError },
    executeDelete,
  ] = useAxios(
    {
      url: `${API_URI}/credentials/${credentialId}`,
      method: 'DELETE',
      headers: {
        'X-API-KEY': apikey,
      },
    },
    { manual: true },
  );

  // Error handling for credential deletion
  useEffect(() => {
    if (deleteError) {
      enqueueSnackbar('There was an error loading the requested data.', { variant: 'error' });
    }
  }, [deleteError, enqueueSnackbar]);

  const handleDelete = () => {
    confirm({ description: 'Are you sure you want to delete this entry?' })
      .then(() => {
        executeDelete()
          .then((res) => {
            if (res.status === 200) {
              enqueueSnackbar('Credential deleted!', { variant: 'success' });
              history.push('/credentials');
            } else {
              enqueueSnackbar('There has been an error deleting this record.', { variant: 'error' });
            }
          })
          .catch(() => {
            enqueueSnackbar('There has been an error deleting this record.', { variant: 'error' });
          });
      })
      .catch(() => {
      });
  };

  const [{ verifyError },
    executeVerify,
  ] = useAxios(
    {
      url: `${API_URI}/credentials/${credentialId}/verify`,
      method: 'POST',
      headers: {
        'X-API-KEY': apikey,
      },
    },
    { manual: true },
  );

  // Error handling for credential verification
  useEffect(() => {
    if (verifyError) {
      enqueueSnackbar('There was an error verifying the credential.', { variant: 'error' });
    }
  }, [verifyError, enqueueSnackbar]);

  const toggleVerify = (myCredential) => {
    confirm({ description: 'Are you sure you want to verify this entry?' })
      .then(() => {
        executeVerify({ data: { isVerified: !myCredential.isVerified } })
          .then((res) => {
            if (res.status === 200) {
              enqueueSnackbar('Verification status changed!', { variant: 'success' });
              executeGet();
            } else {
              enqueueSnackbar('There has been an error verifying this record.', { variant: 'error' });
            }
          })
          .catch(() => {
            enqueueSnackbar('There has been an error verifying this record.', { variant: 'error' });
          });
      })
      .catch(() => {
      });
  };

  return (
    <CredentialCard
      loading={loading}
      credential={credential}
      primaryButtonText="Edit"
      primaryButtonProps={{ component: Link, to: `/credentials/${credentialId}/edit` }}
      secondaryButtonText="Delete"
      secondaryButtonProps={{ onClick: handleDelete }}
      onVerify={toggleVerify}
      isAdmin={isAdmin}
    />
  );
};

export default CredentialDetailsPage;
