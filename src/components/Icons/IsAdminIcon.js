import PropTypes from 'prop-types';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';

const IsAdminIcon = ({ isAdmin = false }) => (
  isAdmin ? <SupervisorAccountIcon /> : <PersonIcon />
);

IsAdminIcon.propTypes = {
  isAdmin: PropTypes.bool,
};

IsAdminIcon.defaultProps = {
  isAdmin: false,
};

export default IsAdminIcon;
