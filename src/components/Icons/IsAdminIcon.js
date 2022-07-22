import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';

const IsAdminIcon = ({ isAdmin = false }) => (
  isAdmin ? <SupervisorAccountIcon /> : <PersonIcon />
);

export default IsAdminIcon;
