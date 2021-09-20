import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch, Link,
} from "react-router-dom";

import {
  Fab,
  Container,
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {
  makeStyles,
} from "@material-ui/core/styles";

import CredentialDetailsPage from "./Credentials/CredentialDetailsPage";
import CredentialsListPage from "./Credentials/CredentialsListPage";
import AddCredentialsPage from "./Credentials/AddCredentialsPage";
import EditCredentialsPage from "./Credentials/EditCredentialsPage";
import SearchCredentialsPage from "./Credentials/SearchCredentialsPage";

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
          onClick={() => console.log('clock')}
        >
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default CredentialsPage;
