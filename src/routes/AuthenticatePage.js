import { useEffect } from "react";
import useAxios from "axios-hooks";
import {
  useSnackbar,
} from "notistack";

import {
  Container,
} from "@material-ui/core";

import { useApiKey } from "../util/useApiKey";
import AuthForm from "../components/forms/AuthForm/AuthForm";
import {
  API_URI,
  REQUEST_ACCOUNT_EMAIL,
} from "../config/constants";

const AuthenticatePage = () => {
  const [apikey, setApikey, setIsAdmin] = useApiKey(s => [s.apikey, s.setApikey, s.setIsAdmin]);
  const { enqueueSnackbar } = useSnackbar();

  const [{ data: keyinfo, error }, executeRequest] = useAxios({
    url: `${API_URI}/apikeys/keyinfo`,
  },
    { manual: true });

  useEffect(() => {
    const { isAdmin } = keyinfo || { isAdmin: false };
    setIsAdmin(isAdmin);
  }, [keyinfo, setIsAdmin]);

  useEffect(() => {

  }, [error]);

  const onSubmit = ({ apikey }) => {
    executeRequest({
      headers: {
        'X-API-KEY': apikey,
      },
    }).then(() => {
      setApikey(apikey);
    }).catch((err) => {
      enqueueSnackbar('You entered an invalid key.');
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
      or <a href={`mailto:${REQUEST_ACCOUNT_EMAIL}`}>request</a> an account!
    </Container>
  );
};

export default AuthenticatePage;