import React from 'react';
import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

/**
 * Primary UI component for user interaction
 */
export const DataTable = ({ data, dataConfig }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="data table">
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
            <TableRow key={idx}>
              {dataConfig.fields.map((field, idx) => (
                <TableCell
                  key={idx}
                  align={field.align || "right"}
                >
                  {row[field.fieldName]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

DataTable.propTypes = {
  /**
   * The data to display
   */
  data: PropTypes.array,
  dataConfig: PropTypes.object,
};

DataTable.defaultProps = {
  data: [],
  dataConfig: {},
};
