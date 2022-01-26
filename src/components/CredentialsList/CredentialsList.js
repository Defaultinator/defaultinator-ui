import { Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import PaginatedDataTable from '../../sharedcomponents/PaginatedDataTable';
import PartIcon from '../Icons/PartIcon';
import VerifiedIcon from '../Icons/VerifiedIcon';
import CredentialsListToolbar from './CredentialsListToolbar';

export const CredentialsList = ({ data, dataConfig, loading, rowsPerPage, page, totalRows, updateConfig, dense, error }) => {

  data = data.map((row) => ({...row, isVerified: <VerifiedIcon isVerified={row.isVerified} /> }));
  data = data.map((row) => ({...row, part: <PartIcon part={row.part} /> }));

  return (
    <Paper>
      <CredentialsListToolbar />
      <PaginatedDataTable
        data={data}
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

CredentialsList.propTypes = {
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

CredentialsList.defaultProps = {
  data: [],
  updateConfig: () => { },
  dense: false,
  loading: false,
  error: false,
};

export default CredentialsList;