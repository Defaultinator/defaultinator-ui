import {
  BrowserRouter as Router,
} from 'react-router-dom';

import LockIcon from '@mui/icons-material/Lock';
import HomeIcon from '@mui/icons-material/Home';
import GavelIcon from '@mui/icons-material/Gavel';
import FeedbackIcon from '@mui/icons-material/Feedback';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import MainNavigation from './sharedcomponents/MainNavigation';
import { useApiKey } from './util/useApiKey';

import CredentialsPage from './routes/CredentialsPage';
import APIKeyPage from './routes/APIKeyPage';
import AboutPage from './routes/AboutPage';
import AuthButton from './components/AuthButton';
import TermsPage from './routes/TermsPage';
import FeedbackPage from './routes/FeedbackPage';

function App() {
  const [isAdmin] = useApiKey((s) => [s.isAdmin]);

  const pages = [
    {
      navText: 'Home',
      navIcon: <HomeIcon />,
      pageContent: <AboutPage />,
      pageTitle: 'About',
      path: '/about',
    },
    {
      navText: 'Credentials',
      navIcon: <LockIcon />,
      pageContent: <CredentialsPage />,
      pageTitle: 'Credentials',
      path: '/credentials',
    },
    {
      navText: 'Key Management',
      navIcon: <VpnKeyIcon />,
      pageContent: <APIKeyPage />,
      pageTitle: 'API Keys',
      path: '/apikeys',
      hidden: !isAdmin,
    },
    {
      navText: 'Terms and Conditions',
      navIcon: <GavelIcon />,
      pageContent: <TermsPage />,
      pageTitle: 'Terms and Conditions',
      path: '/terms',
    },
    {
      navText: 'Feedback',
      navIcon: <FeedbackIcon />,
      pageContent: <FeedbackPage />,
      pageTitle: 'Feedback',
      path: '/feedback',
    },
  ];

  return (
    <div sx={{ flexGrow: 1 }}>
      <Router>
        <MainNavigation pages={pages} title="Defaultinator" AppBarAction={<AuthButton />} />
      </Router>
    </div>
  );
}

export default App;
