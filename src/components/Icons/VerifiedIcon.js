import PropTypes from 'prop-types';

import { Tooltip } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const useStyles = makeStyles((theme) => ({
  verified: {
    color: theme.palette.success.main,
  },
  unverified: {
    color: theme.palette.warning.main,
  },
}));

function VerifiedIcon({ isVerified = false }) {
  const classes = useStyles();

  if (isVerified) {
    return (
      <Tooltip title="Verified Record" aria-label="verified">
        <VerifiedUserIcon className={classes.verified} />
      </Tooltip>
    );
  }
  return (
    <Tooltip title="Record Needs Review" aria-label="unverified">
      <SecurityIcon className={classes.unverified} />
    </Tooltip>
  );
}

VerifiedIcon.propTypes = {
  isVerified: PropTypes.bool,
};

VerifiedIcon.defaultProps = {
  isVerified: false,
};

export default VerifiedIcon;
