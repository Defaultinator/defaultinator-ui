import React from 'react';
import PropTypes from 'prop-types';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  LinearProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  loadingRow: {
    padding: 0,
  },
  errorRow: {
    padding: 0,
    height: 350,
  },
  errorIcon: {
    margin: 'auto',
    display: 'block',
    color: theme.palette.error.main,
  }
}));

export const PaginatedDataTable = (
  {
    data = [],
    dataConfig,
    rowsPerPage,
    page,
    totalRows,
    loading = false,
    error = false,
    updateConfig,
    dense = false,
  }
) => {
  const styles = useStyles();
  const { fields, pagination } = dataConfig;

  console.log(data, loading);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="data table" size={dense ? 'small' : 'medium'}>
        <TableHead>
          <TableRow>
            {dataConfig.fields.map((field, idx) => (
              <TableCell
                key={idx}
                align={field.align || "right"}
                style={{borderBottom: 'none'}}
              >
                {field.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {error ?
            <TableRow>
              <TableCell colSpan={fields.length} className={styles.errorRow}>
                <ErrorOutlineIcon fontSize={'large'} colSpan={3} className={styles.errorIcon} />
              </TableCell>
            </TableRow>
            :
            <>
              <TableRow>
                <TableCell colSpan={fields.length} className={styles.loadingRow}>
                  {loading ?
                    <LinearProgress colSpan="3" /> :
                    <div style={{ height: 4 }} colSpan={3} />
                  }
                </TableCell>
              </TableRow>
              {loading && (!data || data.length === 0) &&
                Array(rowsPerPage || pagination.defaultRowsPerPage).fill(Array(dataConfig.fields.length).fill('')).map((columns, idx) =>
                  <TableRow key={idx}>
                    {columns.map((col, idx) => 
                      <TableCell key={idx}>
                        <Skeleton />
                      </TableCell>
                    )}
                  </TableRow>
                )
              }
              {data &&
                <>
                  {data.map((row, idx) => (
                    <TableRow
                      key={idx}
                      hover
                      {...row.rowProps}
                    >
                      {fields.map((field, idx) => (
                        <TableCell
                          key={idx}
                          align={field.align || "right"}
                        >
                          {row[field.fieldName]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={pagination.rowsPerPageOptions}
                      count={totalRows || data?.length}
                      rowsPerPage={rowsPerPage || pagination.defaultRowsPerPage}
                      page={page || 0}
                      onPageChange={(e, p) => updateConfig({ page: p })}
                      onRowsPerPageChange={(e) => updateConfig({ rowsPerPage: e.target.value })}
                    />
                  </TableRow>
                </>
              }
            </>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

PaginatedDataTable.propTypes = {
  /**
   * The data to display
   */
  data: PropTypes.arrayOf(PropTypes.object),
  dataConfig: PropTypes.shape({
    fields: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      fieldName: PropTypes.string.isRequired,
      align: PropTypes.oneOf(['left', 'right']),
    })),
  }).isRequired,
  rowsPerPage: PropTypes.number,
  page: PropTypes.number,
  totalRows: PropTypes.number,
  updateConfig: PropTypes.func.isRequired,
  dense: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

PaginatedDataTable.defaultProps = {
  data: [],
  updateConfig: () => { },
  dense: false,
  loading: false,
  error: false,
};

export default PaginatedDataTable;