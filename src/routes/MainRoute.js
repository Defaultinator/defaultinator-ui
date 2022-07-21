import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import CredentialsPage from './CredentialsPage';
import APIKeyPage from './APIKeyPage';
import { Box } from '@mui/material';

export const MainRoute = () => {
  const pages = [
    {
      path: '/credentials',
      content: <CredentialsPage />,
    },
    {
      path: '/apikeys',
      content: <APIKeyPage />,
    },
  ];

  return (
    <Switch>
      {pages.map((page, idx) => (
        <Route path={page.path} key={idx}>
          <Box sx={{ margin: 'auto' }}>
            {page.content}
          </Box>
        </Route>
      ))}
    </Switch>
  );
};

export default MainRoute;
