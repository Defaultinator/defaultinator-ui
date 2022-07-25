import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch, Link,
} from 'react-router-dom';

import {
  Fab, useTheme,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import withAuth from '../components/withAuth';

import CredentialDetailsPage from './CredentialsPage/CredentialDetailsPage';
import CredentialsListPage from './CredentialsPage/CredentialsListPage';
import AddCredentialsPage from './CredentialsPage/AddCredentialsPage';
import EditCredentialsPage from './CredentialsPage/EditCredentialsPage';
import SearchCredentialsPage from './CredentialsPage/SearchCredentialsPage';

const CredentialsPage = () => {
  const { path, url } = useRouteMatch();
  const theme = useTheme();

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
    },
  ];

  return (
    <div>
      <Switch>
        {pages.map((page, idx) => (
          <Route path={page.path} key={idx}>
            {page.content}
          </Route>
        ))}
      </Switch>
      <Link to={`${url}/add`}>
        <Fab
          sx={{ position: 'fixed', bottom: theme.spacing(2), right: theme.spacing(2) }}
          color="primary"
        >
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default withAuth(CredentialsPage);
