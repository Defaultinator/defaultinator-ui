import {
  BrowserRouter as Router,
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import LockIcon from '@material-ui/icons/Lock';
import HomeIcon from '@material-ui/icons/Home';
import GavelIcon from '@material-ui/icons/Gavel';
import FeedbackIcon from '@material-ui/icons/Feedback';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import MainNavigation from './sharedcomponents/MainNavigation';
import useApiKey from "./util/useApiKey";

import CredentialsPage from './routes/CredentialsPage';
import APIKeyPage from './routes/APIKeyPage';
import AboutPage from './routes/AboutPage';
import AuthButton from './components/AuthButton';
import TermsPage from "./routes/TermsPage";
import FeedbackPage from "./routes/FeedbackPage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();
  const [isAdmin] = useApiKey(s => [s.isAdmin]);

  const pages = [
    {
      navText: "Home",
      navIcon: <HomeIcon />,
      pageContent: <AboutPage />,
      pageTitle: "About",
      path: "/about",
    },
    {
      navText: "Credentials",
      navIcon: <LockIcon />,
      pageContent: <CredentialsPage />,
      pageTitle: "Credentials",
      path: "/credentials",
    },
    {
      navText: "Key Management",
      navIcon: <VpnKeyIcon />,
      pageContent: <APIKeyPage />,
      pageTitle: "API Keys",
      path: "/apikeys",
      hidden: !isAdmin,
    },
    {
      navText: "Terms and Conditions",
      navIcon: <GavelIcon />,
      pageContent: <TermsPage />,
      pageTitle: "Terms and Conditions",
      path: "/terms",
    },
    {
      navText: "Feedback",
      navIcon: <FeedbackIcon />,
      pageContent: <FeedbackPage />,
      pageTitle: "Feedback",
      path: "/feedback",
    },
  ];

  return (
    <div className={classes.root}>
      <Router>
        <MainNavigation pages={pages} title={"Defaultinator"} AppBarAction={<AuthButton />}/>
      </Router>
    </div>
  );
};

export default App;
