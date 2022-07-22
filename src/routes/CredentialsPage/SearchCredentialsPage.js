import React, {
  useState,
  useEffect,
} from 'react';
import {
  useHistory,
} from 'react-router-dom';
import useAxios from 'axios-hooks';
import {
  useSnackbar,
} from 'notistack';
import { useApiKey } from '../../util/useApiKey';
import { API_URI } from '../../config/constants';
import CredentialsList from '../../components/CredentialsList/CredentialsList';

const TABLE_CONFIG = {
  fields: [
    {
      label: 'CPE',
      fieldName: 'cpe',
      align: 'left',
    },
    {
      label: 'Username',
      fieldName: 'username',
    },
    {
      label: 'Password',
      fieldName: 'password',
    },
  ],
  pagination: {
    rowsPerPageOptions: [10, 25, 50, 100],
    defaultRowsPerPage: 10,
  },
};

const SearchCredentialsPage = () => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [paginationParams, setPaginationParams] = useState();
  const [apikey] = useApiKey((s) => [s.apikey]);

  const query = new URLSearchParams(document.location.search);
  const searchParams = {
    ...(query.get('part') && { part: query.get('part') }),
    ...(query.get('vendor') && { vendor: query.get('vendor') }),
    ...(query.get('product') && { product: query.get('product') }),
    ...(query.get('version') && { version: query.get('version') }),
    ...(query.get('username') && { username: query.get('username') }),
    ...(query.get('password') && { password: query.get('password') }),
  };

  const [{ data, loading, error }] = useAxios({
    url: `${API_URI}/credentials/search`,
    method: 'GET',
    params: {
      ...paginationParams,
      ...searchParams,
    },
    headers: {
      'X-API-KEY': apikey,
    },
  });

  useEffect(() => {
    if (error) {
      const message = error.response?.data?.message || 'There was an error loading the requested data.';
      enqueueSnackbar(message);
    }
  }, [error, enqueueSnackbar]);

  const handlePaginationChange = ({ rowsPerPage, page }) => {
    setPaginationParams({
      ...paginationParams,
      ...(rowsPerPage && { limit: rowsPerPage }),
      ...((page || page === 0) && { page: parseInt(page, 10) + 1 }),
    });
  };

  const formatData = (myData) => myData.map((item) => (
    {
      ...item,
      cpe: `cpe:/${item.cpe.part}:${item.cpe.vendor}:${item.cpe.product}`,
      rowProps: { onClick: () => history.push(`/credentials/${item._id}`), style: { cursor: 'pointer' } },
    }
  ));

  return (
    <CredentialsList
      data={data ? formatData(data.docs) : null}
      loading={loading}
      error={error}
      dataConfig={TABLE_CONFIG}
      rowsPerPage={data?.limit}
      page={data ? data.page - 1 : null}
      totalRows={data?.totalDocs}
      updateConfig={handlePaginationChange}
    />
  );
};

export default SearchCredentialsPage;
