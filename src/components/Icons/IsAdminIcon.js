import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonIcon from '@material-ui/icons/Person';
import PropTypes from 'prop-types';

const IsAdminIcon = ({ isAdmin = false }) => {
  return (
    <>
      {isAdmin ? <SupervisorAccountIcon /> : <PersonIcon />}
    </>
  );
};
IsAdminIcon.propTypes = {
  isAdmin: PropTypes.bool,
};

IsAdminIcon.defaultProps = {
  defaultValues: { 'part': '' },
  title: 'Add New Credentials',
};
export default IsAdminIcon;