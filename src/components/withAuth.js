import AuthenticatePage from '../routes/AuthenticatePage';
import { useApiKey } from '../util/useApiKey';

export const withAuth = (WrappedComponent) => function ({ ...props }) {
  const [apikey] = useApiKey((s) => [s.apikey]);

  if (apikey && apikey !== '') return (<WrappedComponent {...props} />);

  return (<AuthenticatePage />);
};

export default withAuth;
