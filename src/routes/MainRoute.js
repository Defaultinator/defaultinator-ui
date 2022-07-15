import React from "react";

import {
  Route,
  Switch,
} from "react-router-dom";

import makeStyles from '@mui/styles/makeStyles';
import CredentialsPage from "./CredentialsPage";
import APIKeyPage from "./APIKeyPage";

const useStyles = makeStyles((theme) => ({
  content: {
    margin: 'auto',
  },
}));

export const MainRoute = () => {
  const classes = useStyles();

  const pages = [
    {
      "path": '/credentials',
      "content": <CredentialsPage />
    },
    {
      "path": '/apikeys',
      "content": <APIKeyPage />
    },
  ];

  return (
    <Switch>
      {pages.map((page, idx) =>
        <Route path={page.path} key={idx}>
          <div className={classes.content}>
            {page.content}
          </div>
        </Route>
      )}
    </Switch>
  );
};

export default MainRoute;
