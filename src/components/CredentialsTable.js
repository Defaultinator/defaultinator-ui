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
  Link
} from "react-router-dom";

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

  const [{data, loading, error}] = useAxios({
    url: 'http://localhost:3000/getCredentialsByCpe',
    method: 'POST',
    data: {
      cpe: query
    }
  });

  return (
    <>
      { error ?
        <div>Query resulted in an error.</div> :
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
                {data.map((row, idx) => (
                  <TableRow
                    key={idx}
                    className={classes.tableRow}
                    component={Link}
                    to={`/lookup/${row.vendor}/${row.product}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <TableCell component="th" scope="row">
                      {row.cpe}
                    </TableCell>
                    <TableCell align="right">{row.username}</TableCell>
                    <TableCell align="right">{row.password}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            }
          </Table>
          { true &&
            <LinearProgress color={'secondary'} />
          }
        </TableContainer>
      }
    </>

  );
};

export default CredentialsTable;
