import React, {
} from 'react';
import {lighten, makeStyles} from '@material-ui/core/styles';
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
  Link
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
const ProductsByVendorTable = ({vendorId}) => {
  const classes = useStyles();

  const [{data, loading, error}] = useAxios({
    url: `${API_URI}/getProductsByVendor`,
    method: 'POST',
    data: {
      vendor: vendorId
    }
  });

  return (
    <>
      { error ?
        <div>There was an error.</div> :
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="products by vendor table">
            <TableHead>
              <TableRow>
                <TableCell>Products</TableCell>
              </TableRow>
            </TableHead>
            { !loading &&
              <TableBody>
                {data.map((product, idx) => (
                  <TableRow key={idx} className={classes.tableRow}>
                    <TableCell component={Link} to={`/lookup/${vendorId}/${product}`}  style={{ textDecoration: 'none' }} scope="row">
                      {product}
                    </TableCell>
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

export default ProductsByVendorTable;
