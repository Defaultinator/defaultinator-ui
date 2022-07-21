import { Paper } from '@mui/material';
import PropTypes from 'prop-types';
import {
  CredentialType,
  PaginatedDataTableConfigType,
} from '../../config/types';
import PaginatedDataTable from '../../sharedcomponents/PaginatedDataTable';
import PartIcon from '../Icons/PartIcon';
import VerifiedIcon from '../Icons/VerifiedIcon';
import CredentialsListToolbar from './CredentialsListToolbar';

export const CredentialsList = ({
  data = [], dataConfig, loading, rowsPerPage, page, totalRows, updateConfig, dense, error,
}) => {
  data = data?.map((row) => ({ ...row, isVerified: <VerifiedIcon isVerified={row.isVerified} /> }));
  data = data?.map((row) => ({ ...row, part: <PartIcon part={row.part} /> }));

  return (
    <Paper>
      <CredentialsListToolbar />
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

CredentialsList.propTypes = {
  data: PropTypes.arrayOf(CredentialType),
  dataConfig: PaginatedDataTableConfigType,
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
