import Joyride from '../../../components/Joyride/Joyride';
import { MemoryRouter as Router } from 'react-router';

import LockIcon from '@material-ui/icons/Lock';
import HomeIcon from '@material-ui/icons/Home';
import GavelIcon from '@material-ui/icons/Gavel';
import FeedbackIcon from '@material-ui/icons/Feedback';

import MainNavigation from '../../../sharedcomponents/MainNavigation';

import CredentialsPage from '../../../routes/CredentialsPage';
import AboutPage from '../../../routes/AboutPage';
import AuthButton from '../../../components/AuthButton';
import TermsPage from "../../../routes/TermsPage";
import FeedbackPage from "../../../routes/FeedbackPage";

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

export default {
  title: 'Components/Joyride/Joyride',
  component: Joyride,
  decorators: [
    (Story) => (
      <Router>
        <Story />
        <MainNavigation pages={pages} title={"Defaultinator"} AppBarAction={<AuthButton />}/>
      </Router>
    ),
  ]
};

const Template = (args) => <Joyride {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};