import React from "react";

import {
  Route,
  Switch,
} from "react-router-dom";

import SearchResultsPage from "./SearchResultsPage";
import VendorListPage from "./VendorListPage";
import ProductsByVendorPage from "./ProductsByVendorPage";
import CredentialsPage from "./CredentialsPage";

export const MainRoute = () => {

  const pages = [
    {
      "path": '/search',
      "content": <SearchResultsPage />,
    },
    {
      "path": '/vendors/',
      "content": <VendorListPage />
    },
    {
      "path": '/products/:vendorId?',
      "content": <ProductsByVendorPage />
    },
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
