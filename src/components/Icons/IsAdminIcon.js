import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonIcon from '@material-ui/icons/Person';

const IsAdminIcon = ({ isAdmin = false }) => {
  return (
    <>
      {isAdmin ? <SupervisorAccountIcon /> : <PersonIcon />}
    </>
  );
};

export default IsAdminIcon;