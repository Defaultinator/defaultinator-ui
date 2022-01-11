import { useApiKey } from "../util/useApiKey";
import {
  Button,
} from "@material-ui/core";

const AuthButton = () => {
  const [apikey, deleteApikey] = useApiKey(s => [s.apikey, s.deleteApikey]);

  return (
    <>
      {apikey && apikey !== '' &&
        <Button
          onClick={() => deleteApikey()}
        >
          Logout
        </Button>
      }
    </>
  );
};

export default AuthButton;