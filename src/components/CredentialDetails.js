import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Link, useHistory,
} from 'react-router-dom';
import {
  Paper,
  Typography,
  Button,
  Grid,
} from '@material-ui/core';
import useAxios from "axios-hooks";
import Container from "@material-ui/core/Container";
import Skeleton from '@material-ui/lab/Skeleton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

import {API_URI} from '../config/constants';
import {useConfirm} from "material-ui-confirm";
import {useSnackbar} from "notistack";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    maxWidth: 350,
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  credentialCard: {
    padding: theme.spacing(2),
  },
  dataHeight: {
    // height: 250
  },
  dataField: {
    display: 'flex',
    alignContent: 'center',
    marginLeft: theme.spacing(2),
  },
  button: {
    float: 'right',
  }
}));

const CredentialDetails = ({credentialId}) => {
  const classes = useStyles();
  const history = useHistory();
  const confirm = useConfirm();
  const {enqueueSnackbar} = useSnackbar();
  const [{data, loading, error}] = useAxios(`${API_URI}/credentials/${credentialId}`);
  const [
    , executeDelete
  ] = useAxios(
    {
      url: `${API_URI}/credentials/${credentialId}`,
      method: 'DELETE'
    },
    {manual: true}
  );

  const handleDelete = () => {
    confirm({description: "Are you sure you want to delete this entry?"})
      .then(() => {
        executeDelete()
          .then((res) => {
            if (res.status === 200) {
              enqueueSnackbar('Credential deleted!');
              history.push(`/credentials`);
            } else {
              enqueueSnackbar('There has been an error deleting this record.');
              console.log(res);
            }
          })
          .catch((err) => {
            enqueueSnackbar('There has been an error deleting this record.');
            console.log(err);
          });
      });
  };

  // TODO: Skeleton size is messed up
  return (
    <Container>
      <div className={classes.mainContent}>
        {error ?
          <div>There was an error.</div> :
          <>
            {loading ?
              <Skeleton
                variant={'rect'}
                animation={'wave'}
                data-testid={"credentialdetail-skeleton"}
                style={{height: 250, width: 350}}
              >
              </Skeleton> :
              <Paper className={clsx(classes.credentialCard, classes.dataHeight)}>
                <Grid
                  container
                  spacing={2}
                  direction="column"
                  justify="flex-start"
                  alignItems="stretch"
                >
                  <Grid item xs={12}>
                    <Typography gutterBottom variant={"h4"}>
                      {`cpe:/${data.cpe.part}:${data.cpe.vendor}:${data.cpe.product}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.dataField} variant={"body1"} component={'span'}>
                      <AccountCircleIcon/>
                      {data.username}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className={classes.dataField} variant={"body1"}>
                      <LockIcon/>
                      {data.password}
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Button
                      className={classes.button}
                      onClick={() => handleDelete()}
                      color="secondary">
                      Delete
                    </Button>
                  </Grid>
                  <Grid item xs>
                    <Button
                      className={classes.button}
                      component={Link}
                      to={`/credentials/${credentialId}/edit`}
                      color="primary"
                      variant={'outlined'}
                    >
                      Edit
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            }
          </>
        }
      </div>
    </Container>

  );
};

export default CredentialDetails;
