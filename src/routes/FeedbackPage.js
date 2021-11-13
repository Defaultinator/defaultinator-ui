import {
  Button,
  Container,
  Typography,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { REQUEST_ACCOUNT_EMAIL } from "../config/constants";

const FeedbackPage = () => {
  const [text, setText] = useState('');

  return (
    <Container>
      <Typography variant={'h4'} gutterBottom>
        Feedback
      </Typography>
      <TextField
        multiline
        fullWidth
        variant='outlined'
        label="Submit Feedback"
        value={text}
        onChange={(e) => setText(e.target.value)}
      >
      </TextField>
      <div>
        <br />
        <Button
          variant="contained"
          color="primary"
          component='a'
          href={`mailto:${REQUEST_ACCOUNT_EMAIL}?subject=Defaultinator Feedback&body=${text}`}
        >
          Send
        </Button>
      </div>
    </Container>
  );
};

export default FeedbackPage;