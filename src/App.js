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
import MyJoyride from "./components/Joyride/Joyride";

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

  const steps = [
    {
      title: "Home",
      target: "#home",
      content: "This page gives an overview of the project and it's intended usecases.",
      spotlightPadding: 0,
      placementBeacon: 'left',
    },
    {
      title: "Credentials",
      target: "#credentials",
      content: "Here you can find all of the credentials stored in the database. You can also search by vendor and product, or by credential.",
      spotlightPadding: 0,
      placementBeacon: 'left',
    },
    {
      title: "T's and C's",
      target: "#terms-and-conditions",
      content: "This page outlines the terms and conditons. Most importantly, this app is only approved for authorized purposes. Don't use it for anything illegal.",
      spotlightPadding: 0,
      placementBeacon: 'left',
    },
    {
      title: "Feedback",
      target: "#feedback",
      content: "Run into a problem? Let us know on the Feedback page.",
      spotlightPadding: 0,
      placementBeacon: 'left',
    },
  ];

  return (
    <div className={classes.root}>
      <MyJoyride steps={steps} />
      <Router>
        <MainNavigation pages={pages} title={"Defaultinator"} AppBarAction={<AuthButton />}/>
      </Router>
    </div>
  );
};

export default App;
