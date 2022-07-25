import { useEffect } from 'react';
import useAxios from 'axios-hooks';
import {
  useSnackbar,
} from 'notistack';

import {
  Container, Link, Typography,
} from '@mui/material';

import { useApiKey } from '../util/useApiKey';
import AuthForm from '../components/forms/AuthForm/AuthForm';
import {
  API_URI,
  REQUEST_ACCOUNT_EMAIL,
} from '../config/constants';

const AuthenticatePage = () => {
  const [apikey, setApikey, setIsAdmin] = useApiKey((s) => [s.apikey, s.setApikey, s.setIsAdmin]);
  const { enqueueSnackbar } = useSnackbar();

  const [{ data: keyinfo, error }, executeRequest] = useAxios(
    {
      url: `${API_URI}/apikeys/keyinfo`,
    },
    { manual: true },
  );

  useEffect(() => {
    const { isAdmin } = keyinfo || { isAdmin: false };
    setIsAdmin(isAdmin);
  }, [keyinfo, setIsAdmin]);

  useEffect(() => {

  }, [error]);

  const onSubmit = ({ apikey: myApiKey }) => {
    executeRequest({
      headers: {
        'X-API-KEY': myApiKey,
      },
    }).then(() => {
      setApikey(myApiKey);
    }).catch((err) => {
      enqueueSnackbar('You entered an invalid key.', { variant: 'error' });
    });
  };

  const onClear = () => {
    setApikey(apikey);
  };

  return (
    <Container>
      <AuthForm onSubmit={onSubmit} apikey={apikey} onClear={onClear} />
      <br />
      <br />
      <Typography variant="body1">
        or
        <Link href={`mailto:${REQUEST_ACCOUNT_EMAIL}`}>request</Link>
        {' '}
        an account!
      </Typography>
    </Container>
  );
};

export default AuthenticatePage;
