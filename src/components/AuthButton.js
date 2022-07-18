import { useApiKey } from "../util/useApiKey";
import {
  Button,
} from "@mui/material";

const AuthButton = () => {
  const [apikey, deleteApikey] = useApiKey(s => [s.apikey, s.deleteApikey]);

  return (
    <>
      {apikey && apikey !== '' &&
        <Button
          onClick={() => deleteApikey()}
          variant="outlined"
        >
          Logout
        </Button>
      }
    </>
  );
};

export default AuthButton;