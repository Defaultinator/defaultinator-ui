import React, {
  useState,
} from 'react';
import {
  useForm,
} from "react-hook-form";

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
} from "@material-ui/core";

import {
  makeStyles,
} from "@material-ui/core/styles";

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import CPEFormSection from "./CPEFormSection";
import CredsFormSection from "./CredsFormSection";
import ProtocolFormSection from "./ProtocolFormSection";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 650,
    margin: 'auto',
  },
  container: {
    padding: theme.spacing(2),
  },
  caption: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    top: -28,
    padding: '0px 8px',
    color: theme.palette.primary.light,
  }
}));

const ActionButtons = ({reset}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid
        container
        spacing={4}
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Button
            variant={'contained'}
            type={'submit'}
            color={'primary'}
          >
            Submit
          </Button>
        </Grid>
        <Grid item>
          <Button
            color={'secondary'}
            onClick={() => reset()}
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

const CPESection = ({control, autoCompleteParams}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography
        gutterBottom
        className={classes.caption}
        variant="caption"
      >
        CPE Information
      </Typography>
      <CPEFormSection control={control} autoCompleteParams={autoCompleteParams} />
    </Container>
  );
};

const ProtocolSection = ({control}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography
        gutterBottom
        className={classes.caption}
        variant="caption"
      >
        Protocol
      </Typography>
      <ProtocolFormSection control={control}/>
    </Container>
  );
};

const CredentialsSection = ({control}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography
        gutterBottom
        className={classes.caption}
        variant="caption"
      >
        Credentials
      </Typography>
      <CredsFormSection control={control}/>
    </Container>
  );
};

const ReferenceListItem = ({reference, deleteSelf}) => {
  return (
    <ListItem
    >
      <ListItemText
        primary={reference}
      />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={deleteSelf}
        >
          <DeleteIcon
            color={'secondary'}
          />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const ReferenceList = ({references, setReferences}) => {

  const removeSelf = (idx) => () => {
    references.splice(idx, 1);
    setReferences([...references]);
  };

  return (
    <>
      {references.length !== 0 &&
      <List>
        {references.map((reference, idx) =>
          <ReferenceListItem reference={reference} key={idx} deleteSelf={removeSelf(idx)}/>
        )}
      </List>
      }
    </>
  );
};

const ReferencesSection = ({references, setReferences}) => {
  const classes = useStyles();
  const [reference, setReference] = useState('');

  return (
    <Container className={classes.container}>
      <Typography
        gutterBottom
        className={classes.caption}
        variant="caption"
      >
        References
      </Typography>
      <ReferenceList references={references} setReferences={setReferences}/>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}>
        <FormControl
          className={classes.input}
        >
          <TextField
            variant={"outlined"}
            label={'Reference'}
            autoComplete='off'
            value={reference}
            onChange={(e) => setReference(e.target.value)}
          />
        </FormControl>
        <IconButton
          onClick={() => {
            setReferences([...references, reference]);
            setReference('');
          }}
        >
          <AddIcon/>
        </IconButton>
      </div>
    </Container>
  );
};

const CredentialsForm = (
  {
    formAction,
    defaultValues = {'part': ''},
    title = 'Add New Credentials'
  }
) => {
  const classes = useStyles();
  const {handleSubmit, control, reset, getValues, watch} = useForm({defaultValues: defaultValues});
  const [references, setReferences] = useState([]);
  const values = watch();

  // TODO: Must refresh the page if you immediately return.
  // Steps to reproduce: Edit a cred. Immediately click edit. Changes are not reflected in the form.
  // Hit refresh. Changes are now reflected.

  const onSubmit = (data) => {
    let newCred = {};

    newCred['cpe'] = {
      part: data.part || 'ANY',
      vendor: data.vendor || 'ANY',
      product: data.product || 'ANY',
      version: data.version || 'ANY',
      update: data.update || 'ANY',
      edition: data.edition || 'ANY',
      language: data.language || 'ANY',
    };

    newCred['username'] = data.username;
    newCred['password'] = data.password;
    newCred['references'] = references;
    newCred['protocol'] = data.protocol;

    formAction(newCred);
  };

  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container className={classes.container}>
          <Typography gutterBottom variant="h4">
            {title}
          </Typography>
        </Container>
        <CredentialsSection control={control}/>
        <Divider/>
        <CPESection control={control} autoCompleteParams={values} />
        <Divider/>
        <ProtocolSection control={control}/>
        <Divider/>
        <ReferencesSection references={references} setReferences={setReferences}/>
        <ActionButtons reset={reset}/>
      </form>
    </Paper>
  );
};

export default CredentialsForm;
