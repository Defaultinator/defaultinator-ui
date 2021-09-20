import React from "react";

import {
  Route,
  Switch,
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import CredentialsPage from "./CredentialsPage";

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
    }
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
