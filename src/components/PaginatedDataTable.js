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
} from '@material-ui/core';

/**
 * Primary UI component for user interaction
 */
export const PaginatedDataTable = ({ data, dataConfig, rowsPerPage, page, count, updateConfig, onRowClick, dense = false }) => {
  const { fields, pagination } = dataConfig;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="data table" size={dense ? 'small' : 'medium'}>
        <TableHead>
          <TableRow>
            {dataConfig.fields.map((field, idx) => (
              <TableCell
                key={idx}
                align={field.align || "right"}
              >
                {field.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow
              key={idx}
              hover
              onClick={(e) => onRowClick(e, row)}
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
              count={count || data.length}
              rowsPerPage={rowsPerPage || pagination.defaultRowsPerPage}
              page={page || 0}
              onPageChange={(e, p) => updateConfig({ page: p })}
              onRowsPerPageChange={(e) => updateConfig({ rowsPerPage: e.target.value })}
            />
          </TableRow>
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
  count: PropTypes.number,
  updateConfig: PropTypes.func.isRequired,
  dense: PropTypes.bool
};

PaginatedDataTable.defaultProps = {
  data: [],
  updateConfig: () => { },
  dense: false,
};

export default PaginatedDataTable;
