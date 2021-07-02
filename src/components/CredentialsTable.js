import React from 'react';

import {lighten, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useAxios from "axios-hooks";
import LinearProgress from "@material-ui/core/LinearProgress";

import {
  useHistory,
} from "react-router-dom";

import { API_URI } from '../config/constants';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 150,
  },
  tableRow: {
    '&:hover': {
      backgroundColor: lighten(theme.palette.background.paper, 0.1)
    }
  },
}));

const CredentialsTable = ({query}) => {
  const classes = useStyles();
  const history = useHistory();

  const [{data, loading, error}] = useAxios({
    url: `${API_URI}/credentials/search`,
    method: 'POST',
    data: {
      cpe: query
    }
  });

  return (
    <>
      { error ?
        <div>There was an error.</div> :
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="credentials table">
            <TableHead>
              <TableRow>
                <TableCell>CPE</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Password</TableCell>
              </TableRow>
            </TableHead>
            { !loading &&
              <TableBody>
                {data.docs.map((row) => (
                  <TableRow
                    key={row._id}
                    className={classes.tableRow}
                    onClick={() => history.push(`/credentials/${row._id}`)}
                  >
                    <TableCell component="th" scope="row">
                      {`cpe:/${row.cpe.part}:${row.cpe.vendor}:${row.cpe.product}`}
                    </TableCell>
                    <TableCell align="right">{row.username}</TableCell>
                    <TableCell align="right">{row.password}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            }
          </Table>
          { loading &&
            <LinearProgress color={'secondary'} />
          }
        </TableContainer>
      }
    </>

  );
};

export default CredentialsTable;
