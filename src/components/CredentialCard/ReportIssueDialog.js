import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import { REQUEST_ACCOUNT_EMAIL } from '../../config/constants';

const ReportIssueDialog = ({ open, setOpen = () => { } }) => {
  const [issue, setIssue] = useState('');

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogTitle>
        Report an Issue
      </DialogTitle>
      <DialogContent>
        <TextField
          multiline
          fullWidth
          variant={'outlined'}
          label="Issue Details"
          placeholder="Provide a detailed account of the issue you are reporting."
          inputProps={{
            maxLength: 250
          }}
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        >
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          component='a'
          href={`mailto:${REQUEST_ACCOUNT_EMAIL}`}
        >
          Send
        </Button>
        <Button
          color="secondary"
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReportIssueDialog;