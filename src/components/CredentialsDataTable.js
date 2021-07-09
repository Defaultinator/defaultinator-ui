import React from 'react';

import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Paper,
  Container,
  Typography,
  LinearProgress,
} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  paper: {
    //padding: theme.spacing(2),
  },
  title: {
    flex: '1 1 100%',
  },
  row: {
    textDecoration: 'none',
  }
}));

const CredentialsTableToolbar = ({title}) => {
  const classes = useStyles();

  return(
    <Toolbar>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        {title}
      </Typography>
    </Toolbar>
  );
};

const CredentialsTableHeader = () => {
  const columnConfig = [
    {
      "name": "Vendor",
    },
    {
      "name": "Product",
    },
    {
      "name": "Version",
    },
    {
      "name": "Username",
    },
    {
      "name": "Password"
    }
  ];

  return(
    <TableHead>
      <TableRow>
        {columnConfig.map((col, idx) =>
          <TableCell key={idx}>{col.name}</TableCell>
        )}
      </TableRow>
    </TableHead>
  );
};

const CredentialsDataTable = ({loading = false, data, config}) => {
  const classes = useStyles();

  const { title } = {
    'title': 'Credentials',
  };

  // TODO: Must refresh the page to get changes. Fix it.
  return(
    <Container>
      <Paper className={classes.paper}>
        <CredentialsTableToolbar title={title} />
        { loading && <LinearProgress color="secondary" /> }
        <TableContainer>
          <Table>
            <CredentialsTableHeader />
            { data?.map((row, idx) =>
                <TableRow
                  hover
                  component={Link}
                  to={`/credentials/${row._id}`}
                  className={classes.row}
                >
                  <TableCell>{row.cpe.vendor || 'ANY'}</TableCell>
                  <TableCell>{row.cpe.product || 'ANY'}</TableCell>
                  <TableCell>{row.cpe.version || 'ANY'}</TableCell>
                  <TableCell>{row.username}</TableCell>
                  <TableCell>{row.password}</TableCell>
                </TableRow>
            )}
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default CredentialsDataTable;
