import { Container } from "@material-ui/core";
import { useApiKey } from "../util/useApiKey";
import AuthForm from "../components/forms/AuthForm/AuthForm";
import { REQUEST_ACCOUNT_EMAIL } from "../config/constants";

const AuthenticatePage = () => {
  const [apikey, setApikey] = useApiKey();

    return(
      <Container>
        <AuthForm setApikey={setApikey} apikey={apikey} />
        <br />
        <br />
        or <a href={`mailto:${REQUEST_ACCOUNT_EMAIL}`}>request</a> an account!
      </Container>
    );
};

export default AuthenticatePage;