import { useApiKey } from "../util/useApiKey";
import {
  Button,
} from "@material-ui/core";

const AuthButton = () => {
  const [apikey, setApikey] = useApiKey();

  return (
    <>
      {apikey && apikey !== '' &&
        <Button
          onClick={() => setApikey('')}
        >
          Logout
        </Button>
      }
    </>
  );
};

export default AuthButton;