import PropTypes from 'prop-types';

import {
  makeStyles, Tooltip,
} from "@material-ui/core";

import SecurityIcon from '@material-ui/icons/Security';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const useStyles = makeStyles((theme) => ({
  verified: {
    color: theme.palette.success.main,
  },
  unverified: {
    color: theme.palette.warning.main,
  }
}));

const VerifiedIcon = ({ isVerified = false }) => {
  const classes = useStyles();

  console.log(isVerified);

  if (isVerified)
    return (
      <Tooltip title={"Verified Record"} aria-label="verified">
        <VerifiedUserIcon className={classes.verified} />
      </Tooltip>
    );
  else
    return (
      <Tooltip title={"Record Needs Review"} aria-label="unverified">
        <SecurityIcon className={classes.unverified} />
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
