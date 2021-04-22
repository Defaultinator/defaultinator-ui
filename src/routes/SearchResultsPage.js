import React from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import CredentialsTable from "../components/CredentialsTable";

const SearchResultsPage = ({data, ...props}) => {
  let { query } = queryString.parse(props.location.search);

  return(
      <>
        { query ?
          <CredentialsTable data={data} query={query} /> :
          <div>No query provided...</div>
        }
      </>
  );
};

export default withRouter(SearchResultsPage);
