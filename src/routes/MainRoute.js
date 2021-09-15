import React from "react";

import {
  Route,
  Switch,
} from "react-router-dom";

import CredentialsPage from "./CredentialsPage";

export const MainRoute = () => {

  const pages = [
    {
      "path": '/credentials',
      "content": <CredentialsPage />
    }
  ];

  return(
    <Switch>
      {pages.map((page, idx) =>
        <Route path={page.path} key={idx}>
          {page.content}
        </Route>
      )}
    </Switch>
  );
};

export default MainRoute;
