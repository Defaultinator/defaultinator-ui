import React, {
  useEffect,
  useState,
} from 'react';
import {
  useHistory,
} from 'react-router-dom';
import useAxios from "axios-hooks";
import {
  useSnackbar,
} from 'notistack';
import { useApiKey } from '../../util/useApiKey';

import { API_URI } from '../../config/constants';

import APIKeyList from '../../components/APIKeyList/APIKeyList';
import { APIKEY_TABLE_CONFIG } from '../../config/tables';

const ListAPIKeysPage = () => {
  const history = useHistory();
  const [paginationParams, setPaginationParams] = useState();
  const [apikey] = useApiKey(s => [s.apikey]);
  const { enqueueSnackbar } = useSnackbar();

  const [{ data, loading, error }] = useAxios({
    url: `${API_URI}/apikeys`,
    headers: {
      'X-API-KEY': apikey,
    },
  });

  useEffect(() => {
    if (error) {
      const message = error.response?.data?.message || 'There was an error loading the requested data.';
      enqueueSnackbar(message), { variant: 'error' };
    }
  }, [error, enqueueSnackbar]);

  const handlePaginationChange = ({ rowsPerPage, page }) => {
    setPaginationParams({
      ...paginationParams,
      ...(rowsPerPage && { limit: rowsPerPage }),
      ...((page || page === 0) && { page: parseInt(page) + 1 }),
    });
  };

  const formatData = (data) => {
    return data?.map((item) => (
      {
        ...item,
        rowProps: { onClick: () => history.push(`/apikeys/${item._id}`), style: {cursor: 'pointer'} }
      }
    ));
  };

  return (
    <APIKeyList
      data={formatData(data?.docs)}
      loading={loading}
      dataConfig={APIKEY_TABLE_CONFIG}
      rowsPerPage={data?.limit}
      page={data ? data.page - 1 : null}
      totalRows={data?.total}
      updateConfig={handlePaginationChange}
    />
  );
};

export default ListAPIKeysPage;