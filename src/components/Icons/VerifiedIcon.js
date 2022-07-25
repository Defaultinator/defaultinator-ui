import PropTypes from 'prop-types';

import { Tooltip } from '@mui/material';

import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const VerifiedIcon = ({ isVerified = false }) => {
  if (isVerified) {
    return (
      <Tooltip title="Verified Record" aria-label="verified">
        <VerifiedUserIcon sx={{ color: 'success.main' }} />
      </Tooltip>
    );
  }
  return (
    <Tooltip title="Record Needs Review" aria-label="unverified">
      <SecurityIcon sx={{ color: 'warning.main' }} />
    </Tooltip>
  );
};

VerifiedIcon.propTypes = {
  isVerified: PropTypes.bool,
};

VerifiedIcon.defaultProps = {
  isVerified: false,
};

export default VerifiedIcon;
