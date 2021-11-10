import {
  BrowserRouter as Router,
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import LockIcon from '@material-ui/icons/Lock';
import InfoIcon from '@material-ui/icons/Info';
import GavelIcon from '@material-ui/icons/Gavel';
import FeedbackIcon from '@material-ui/icons/Feedback';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import MainNavigation from './sharedcomponents/MainNavigation';

import CredentialsPage from './routes/CredentialsPage';
import APIKeyPage from './routes/APIKeyPage';
import AuthButton from './components/AuthButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  const pages = [
    {
      navText: "About",
      navIcon: <InfoIcon />,
      pageContent: <div>About Page</div>,
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
    },
    {
      navText: "Terms and Conditions",
      navIcon: <GavelIcon />,
      pageContent: <div>Legal Page</div>,
      pageTitle: "Terms and Conditions",
      path: "/terms",
    },
    {
      navText: "Feedback",
      navIcon: <FeedbackIcon />,
      pageContent: <div>Feedback Page</div>,
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
