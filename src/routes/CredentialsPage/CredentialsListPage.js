import React, {
  useState,
  useEffect,
} from 'react';
import {
  useHistory,
} from 'react-router-dom';
import useAxios from "axios-hooks";
import {
  useSnackbar,
} from 'notistack';
import { API_URI } from "../../config/constants";
import { useApiKey } from '../../util/useApiKey';
import CredentialsList from '../../components/CredentialsList/CredentialsList';
import { CREDENTIALS_TABLE_CONFIG } from '../../config/tables';

const CredentialsListPage = () => {
  const history = useHistory();
  const [paginationParams, setPaginationParams] = useState();
  const [apikey] = useApiKey(s => [s.apikey]);

  const { enqueueSnackbar } = useSnackbar();

  const [{ data, loading, error }] = useAxios({
    url: `${API_URI}/credentials`,
    headers: {
      'X-API-KEY': apikey,
    },
    params: {
      ...paginationParams
    }
  });

  useEffect(() => {
    if (error) {
      console.log(error);
      enqueueSnackbar('There was an error loading the requested data.');
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
        vendor: item.cpe?.vendor || 'ANY',
        product: item.cpe?.product || 'ANY',
        part: item.cpe?.part || 'unknown',
        rowProps: { onClick: () => history.push(`/credentials/${item._id}`), style: {cursor: 'pointer'} }
      }
    ));
  };

  return (
    <CredentialsList
      data={formatData(data?.docs)}
      loading={loading}
      dataConfig={CREDENTIALS_TABLE_CONFIG}
      rowsPerPage={data?.limit}
      page={data ? data.page - 1 : null}
      totalRows={data?.total}
      updateConfig={handlePaginationChange}
    />
  );
};

export default CredentialsListPage;
