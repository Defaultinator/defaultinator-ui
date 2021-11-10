import AuthenticatePage from "../routes/AuthenticatePage";
import { useApiKey } from "../util/useApiKey";

export const withAuth = (WrappedComponent) => ({ ...props }) => {
  const [apikey] = useApiKey();

  if (apikey && apikey !== '') return (<WrappedComponent {...props} />);

  return (<AuthenticatePage />);
};

export default withAuth;