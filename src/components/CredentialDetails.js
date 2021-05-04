import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from  'clsx';
import Paper from '@material-ui/core/Paper';
import useAxios from "axios-hooks";
import Container from "@material-ui/core/Container";
import Skeleton from '@material-ui/lab/Skeleton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';

import { API_URI } from '../config/constants';

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
    height: 250
  },
  dataField: {

  }
}));

const CredentialDetails = ({vendorId, productId}) => {
  const classes = useStyles();

  const request = {
    url: `${API_URI}/getCredentialsByProductAndVendor`,
    method: 'POST',
    data: {
      product: productId,
      vendor: vendorId
    }
  };

  const [{data, loading, error}] = useAxios(request);

  // TODO: Skeleton size is messed up
  return (
    <Container>
      <div className={classes.mainContent}>
        { error ?
          <div>There was an error.</div> :
          <>
            { loading ?
              <Skeleton
                variant={'rect'}
                animation={'wave'}
                data-testid={"credentialdetail-skeleton"}
                style={{height: 250, width: 350}}
              >
              </Skeleton> :
              <Paper className={clsx(classes.credentialCard, classes.dataHeight)}>
                { data.map((row, idx) =>
                  <div key={idx}>
                    <div><h2>{row.cpe}</h2></div>
                    <div><AccountCircleIcon />{row.username}</div>
                    <div><LockIcon />{row.password}</div>
                  </div>
                )}
              </Paper>
            }
          </>
        }
      </div>
    </Container>

  );
};

export default CredentialDetails;
