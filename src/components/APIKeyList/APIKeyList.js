import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
} from '@material-ui/core';
import { APIKeyType, PaginatedDataTableConfigType } from '../../config/types';
import APIKeyListToolbar from './APIKeyListToolbar';
import PaginatedDataTable from '../../sharedcomponents/PaginatedDataTable';
import IsAdminIcon from '../Icons/IsAdminIcon';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: 'auto',
  },
});

export const APIKeyList = ({ data = [], dataConfig, loading, rowsPerPage, page, totalRows, updateConfig, dense, error }) => {
  const styles = useStyles();

  data = data?.map((row) => ({...row, isAdmin: <IsAdminIcon isAdmin={row.isAdmin} />}))

  return (
    <Paper className={styles.root}>
      <APIKeyListToolbar />
      <PaginatedDataTable
        data={data || []}
        dataConfig={dataConfig}
        loading={loading}
        rowsPerPage={rowsPerPage}
        page={page}
        totalRows={totalRows}
        updateConfig={updateConfig}
        dense={dense}
        error={error}
      />
    </Paper>
  );
};

APIKeyList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    ...APIKeyType,
    rowProps: PropTypes.object,
  })),
  dataConfig: PaginatedDataTableConfigType,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  totalRows: PropTypes.number,
  updateConfig: PropTypes.func.isRequired,
  dense: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

APIKeyList.defaultProps = {
  data: [],
  updateConfig: () => { },
  dense: false,
  loading: false,
  error: false,
};

export default APIKeyList;