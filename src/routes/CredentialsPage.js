import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch, Link,
} from "react-router-dom";

import {
  Fab,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import makeStyles from '@mui/styles/makeStyles';

import withAuth from '../components/withAuth';

import CredentialDetailsPage from "./CredentialsPage/CredentialDetailsPage";
import CredentialsListPage from "./CredentialsPage/CredentialsListPage";
import AddCredentialsPage from "./CredentialsPage/AddCredentialsPage";
import EditCredentialsPage from "./CredentialsPage/EditCredentialsPage";
import SearchCredentialsPage from "./CredentialsPage/SearchCredentialsPage";

const useStyles = makeStyles((theme) => ({
  root: {
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const CredentialsPage = () => {
  let { path, url } = useRouteMatch();
  let classes = useStyles();

  const pages = [
    {
      path: `${path}/add`,
      content: <AddCredentialsPage />,
    },
    {
      path: `${path}/search`,
      content: <SearchCredentialsPage />,
    },
    {
      path: `${path}/:credentialId/edit`,
      content: <EditCredentialsPage />,
    },
    {
      path: `${path}/:credentialId`,
      content: <CredentialDetailsPage />,
    },
    {
      path: `${path}/`,
      content: <CredentialsListPage />,
    }
  ];

  return (
    <div>
      <Switch>
        {pages.map((page, idx) =>
          <Route path={page.path} key={idx}>
            {page.content}
          </Route>
        )}
      </Switch>
      <Link to={`${url}/add`}>
        <Fab
          className={classes.fab}
          color={"primary"}
        >
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default withAuth(CredentialsPage);
