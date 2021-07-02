import React, {
  useState
} from 'react';
import {
  useHistory,
} from "react-router-dom";
import {
  useForm,
} from "react-hook-form";
import {
  useSnackbar,
} from 'notistack';

import useAxios from "axios-hooks";

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
import CPEForm from "../../components/forms/CPEForm";
import CredsForm from "../../components/forms/CredsForm";
import {API_URI} from "../../config/constants";
import ProtocolForm from "../../components/forms/ProtocolForm";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    padding: theme.spacing(2),
  },
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

const CPESection = ({control}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography gutterBottom variant="body1">
        CPE Information
      </Typography>
      <CPEForm control={control}/>
    </Container>
  );
};

const ProtocolSection = ({control}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography gutterBottom variant="body1">
        Protocol
      </Typography>
      <ProtocolForm control={control}/>
    </Container>
  );
};

const CredentialsSection = ({control}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography gutterBottom variant="body1">
        Credentials
      </Typography>
      <CredsForm control={control}/>
    </Container>
  );
};

const ReferenceListItem = ({reference, deleteSelf}) => {
  return(
    <ListItem
      button
    >
      <ListItemText
        primary={reference}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon
            onClick={deleteSelf}
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
          <ReferenceListItem reference={reference} key={idx} deleteSelf={removeSelf(idx)} />
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
      <Typography gutterBottom variant="body1">
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

const AddCredentialsPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const {handleSubmit, control, reset} = useForm();
  const [references, setReferences] = useState([]);

  const [
    ,executePost
  ] = useAxios(
    {
      url: `${API_URI}/credentials`,
      method: 'POST'
    },
    { manual: true }
  );

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

    executePost({data: newCred}).then((res) => {
      if(res.status === 200) {
        enqueueSnackbar('Credential added!');
        history.push(`/credentials/${res.data._id}`);
      } else {
        enqueueSnackbar('There has been an error submitting your credentials.');
        console.log(res);
      }
    });
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container className={classes.container}>
          <Typography gutterBottom variant="h4">
            Add New Credentials
          </Typography>
        </Container>
        <CredentialsSection control={control}/>
        <Divider/>
        <CPESection control={control}/>
        <Divider/>
        <ProtocolSection control={control} />
        <Divider/>
        <ReferencesSection references={references} setReferences={setReferences}/>
        <ActionButtons reset={reset}/>
      </form>
    </Paper>
  );
};

export default AddCredentialsPage;
