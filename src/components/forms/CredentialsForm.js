import React, {
  useState,
} from 'react';
import {
  useForm,
} from 'react-hook-form';
import PropTypes from 'prop-types';

import {
  Grid,
  Button,
  Paper,
  Divider,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
  FormControl,
  IconButton,
  useTheme,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CredsFormSection from './CredsFormSection';
import ProtocolFormSection from './ProtocolFormSection';
import { CpeType } from '../../config/types';
import AutoCompleteCPEFormSection from './AutoCompleteCPEFormSection';

const ActionButtons = ({ reset }) => (
  <Container sx={{ padding: 2 }}>
    <Grid
      container
      spacing={4}
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item>
        <Button
          variant="outlined"
          type="submit"
          color="primary"
        >
          Submit
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="secondary"
          onClick={() => reset()}
        >
          Clear
        </Button>
      </Grid>
    </Grid>
  </Container>
);

const ProtocolSection = ({ control }) => {
  const theme = useTheme();

  return (
    <Container sx={{ padding: 2 }}>
      <Typography
        gutterBottom
        sx={{
          backgroundColor: theme.palette.background.paper,
          position: 'relative',
          top: -28,
          padding: '0px 8px',
          color: theme.palette.primary.light,
        }}
        variant="caption"
      >
        Protocol
      </Typography>
      <ProtocolFormSection control={control} />
    </Container>
  );
};

const CredentialsSection = ({ control }) => {
  const theme = useTheme();

  return (
    <Container sx={{ padding: 2 }}>
      <Typography
        gutterBottom
        sx={{
          backgroundColor: theme.palette.background.paper, position: 'relative', top: -28, padding: '0px 8px', color: theme.palette.primary.light,
        }}
        Ï
        variant="caption"
      >
        Credentials
      </Typography>
      <CredsFormSection control={control} />
    </Container>
  );
};

const ReferenceListItem = ({ reference, deleteSelf }) => (
  <ListItem>
    <ListItemText
      primary={reference}
    />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete" onClick={deleteSelf} size="large">
        <DeleteIcon
          color="secondary"
        />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

const ReferenceList = ({ references, setReferences }) => {
  const removeSelf = (idx) => () => {
    references.splice(idx, 1);
    setReferences([...references]);
  };

  return (
    <>
      {references.length !== 0
        && (
          <List>
            {references.map((reference, idx) => <ReferenceListItem reference={reference} key={idx} deleteSelf={removeSelf(idx)} />)}
          </List>
        )}
    </>
  );
};

const ReferencesSection = ({ references, setReferences }) => {
  const theme = useTheme();
  const [reference, setReference] = useState('');

  return (
    <Container sx={{ padding: 2 }}>
      <Typography
        gutterBottom
        sx={{
          backgroundColor: theme.palette.background.paper, position: 'relative', top: -28, padding: '0px 8px', color: theme.palette.primary.light,
        }}
        Ï
        variant="caption"
      >
        References
      </Typography>
      <ReferenceList references={references} setReferences={setReferences} />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <FormControl>
          <TextField
            variant="outlined"
            label="Reference"
            autoComplete="off"
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
        </FormControl>
        <IconButton
          onClick={() => {
            setReferences([...references, reference]);
            setReference('');
          }}
          size="large"
        >
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
};

const CredentialsForm = ({
  formAction,
  defaultValues = { part: '' },
  title = 'Add New Credentials',
}) => {
  const theme = useTheme();

  const { handleSubmit, control, reset } = useForm({ defaultValues });
  const [references, setReferences] = useState([]);
  const [cpeFields, setCpeFields] = useState(defaultValues);

  // TODO: Must refresh the page if you immediately return.
  // Steps to reproduce: Edit a cred. Immediately click edit. Changes are not reflected in the form.
  // Hit refresh. Changes are now reflected.

  const onSubmit = (data) => {
    const newCred = {};

    newCred.cpe = {
      part: cpeFields.part || 'ANY',
      vendor: cpeFields.vendor || 'ANY',
      product: cpeFields.product || 'ANY',
      version: cpeFields.version || 'ANY',
      update: cpeFields.update || 'ANY',
      edition: cpeFields.edition || 'ANY',
      language: cpeFields.language || 'ANY',
    };

    newCred.username = data.username;
    newCred.password = data.password;
    newCred.references = references;
    newCred.protocol = data.protocol;

    formAction(newCred);
  };

  return (
    <Paper sx={{ maxWidth: 650, margin: 'auto' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container sx={{ padding: 2 }}>
          <Typography gutterBottom variant="h4">
            {title}
          </Typography>
          <Divider />
          <CredentialsSection control={control} />
          <Divider />
          <Container sx={{ padding: 2 }}>
            <Typography
              gutterBottom
              sx={{
                backgroundColor: theme.palette.background.paper, position: 'relative', top: -28, padding: '0px 8px', color: theme.palette.primary.light,
              }}
              Ï
              variant="caption"
            >
              Credentials
            </Typography>
            <AutoCompleteCPEFormSection fields={cpeFields} setFields={setCpeFields} />
          </Container>
          <Divider />
          <ProtocolSection control={control} />
          <Divider />
          <ReferencesSection references={references} setReferences={setReferences} />
          <ActionButtons reset={reset} />
        </Container>
      </form>
    </Paper>
  );
};

CredentialsForm.propTypes = {
  formAction: PropTypes.func.isRequired,
  defaultValues: CpeType,
  title: PropTypes.string,
};

CredentialsForm.defaultProps = {
  defaultValues: { part: '' },
  title: 'Add New Credentials',
};

export default CredentialsForm;
