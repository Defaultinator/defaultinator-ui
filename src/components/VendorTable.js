import React, {
} from 'react';
import {
  makeStyles,
  lighten
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import useAxios from 'axios-hooks'
import LinearProgress from "@material-ui/core/LinearProgress";

import {
  Link,
  BrowserRouter,
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

// TODO: This is currently both the vendor list and product list. That probably isn't good.
const VendorTable = () => {
  const classes = useStyles();

  const [{data, loading, error}] = useAxios({
    url: `${API_URI}/getVendors`,
  });

  return (
    <BrowserRouter>
      { error ?
        <div>There was an error.</div> :
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="products by vendor table">
            <TableHead>
              <TableRow>
                <TableCell>Vendors</TableCell>
              </TableRow>
            </TableHead>
            { !loading &&
            <TableBody>
              {data.map((vendor, idx) => (
                <TableRow component={Link} to={`/products/${vendor}`} key={idx} style={{ textDecoration: 'none' }} className={classes.tableRow}>
                    <TableCell component="th" scope="row">
                      {vendor}
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
            }
          </Table>
          { loading &&
          <LinearProgress  color={'secondary'} />
          }
        </TableContainer>
      }
    </BrowserRouter>
  );
};

export default VendorTable;
