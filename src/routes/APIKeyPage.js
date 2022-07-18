import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch, Link,
} from 'react-router-dom';

import {
  Fab,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import makeStyles from '@mui/styles/makeStyles';

import withAuth from '../components/withAuth';

import ListAPIKeysPage from './APIKeyPage/ListAPIKeysPage';
import ViewAPIKeyPage from './APIKeyPage/ViewAPIKeyPage';
import AddAPIKeyPage from './APIKeyPage/AddAPIKeyPage';
import EditAPIKeyPage from './APIKeyPage/EditAPIKeyPage';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function APIKeyPage() {
  const { path, url } = useRouteMatch();
  const classes = useStyles();

  const pages = [
    {
      path: `${path}/add`,
      content: <AddAPIKeyPage />,
    },
    {
      path: `${path}/:apiKeyId/edit`,
      content: <EditAPIKeyPage />,
    },
    {
      path: `${path}/:apiKeyId`,
      content: <ViewAPIKeyPage />,
    },
    {
      path: `${path}/`,
      content: <ListAPIKeysPage />,
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
          className={classes.fab}
          color="primary"
        >
          <PersonAddIcon />
        </Fab>
      </Link>
    </div>
  );
}

export default withAuth(APIKeyPage);
