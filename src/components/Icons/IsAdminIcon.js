import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';

function IsAdminIcon({ isAdmin = false }) {
  return (
    <>
      {isAdmin ? <SupervisorAccountIcon /> : <PersonIcon />}
    </>
  );
}

export default IsAdminIcon;
