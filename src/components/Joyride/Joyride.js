import OldJoyride, {
  ACTIONS,
  EVENTS,
} from "react-joyride";
import JoyrideTooltip from "./JoyrideTooltip";
import { useState } from "react";
import { useHistory } from "react-router";
import { Grid, Paper, Typography } from "@material-ui/core";
import VerifiedIcon from "../Icons/VerifiedIcon";
import PartIcon from "../Icons/PartIcon";

const MyJoyride = ({ ...props }) => {
  const history = useHistory();

  const [stepIndex, setStepIndex] = useState(0);
  const [running, setRunning] = useState(true);

  const steps = [
    {
      title: "Home",
      target: "#home",
      content: "This page gives an overview of the project and it's intended usecases.",
      spotlightPadding: 0,
      placementBeacon: 'left',
      disableBeacon: true,
      before: async () => await history.push('/'),
    },
    {
      title: "Credentials",
      target: "#credentials",
      content: "Here you can find all of the credentials stored in the database. You can also search by vendor and product, or by credential.",
      spotlightPadding: 0,
      placementBeacon: 'left',
      before: async () => await history.push('/credentials'),
    },
    {
      title: "Verified Credentials",
      target: "#table-header-verified",
      content:
        <Grid container style={{ textAlign: 'center' }}>
          <Grid item xs={12}>
            <Typography
              variant={'body2'}
              style={{ textAlign: 'center' }}
              gutterBottom
            >
              Some records have been verified by the admin team, and others are community submissions that have yet to be verified. You can tell the difference by the icons in this column.
            </Typography>
          </Grid>
          <Grid item container xs={6} style={{ padding: '16px' }}>
            <Grid item xs={12}>
              <VerifiedIcon isVerified={false} />
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ display: 'inline-block', padding: '4px' }} variant={'outlined'}>
                <Typography variant={'subtitle2'}>Unverified</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid item container xs={6} style={{ padding: '16px' }}>
            <Grid item xs={12}>
              <VerifiedIcon isVerified={true} />
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ display: 'inline-block', padding: '4px' }} variant={'outlined'}>
                <Typography variant={'subtitle2'}>Verified</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>,
      spotlightPadding: 0,
      before: async () => await history.push('/credentials'),
    },
    {
      title: "Part",
      target: "#table-header-part",
      content:
        <Grid container style={{ textAlign: 'center' }}>
          <Grid item xs={12}>
            <Typography
              variant={'body2'}
              style={{ textAlign: 'center' }}
              gutterBottom
            >
              The "part" field is to distinguish the kind of product being described. The options are Hardware, Software, or Operating System, and they are described by the following icons.
            </Typography>
          </Grid>
          <Grid item container xs={4} style={{ padding: '16px' }}>
            <Grid item xs={12}>
              <PartIcon part={'h'} />
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ display: 'inline-block', padding: '4px' }} variant={'outlined'}>
                <Typography variant={'subtitle2'}>Hardware</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid item container xs={4} style={{ padding: '16px' }}>
            <Grid item xs={12}>
              <PartIcon part={'a'} />
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ display: 'inline-block', padding: '4px' }} variant={'outlined'}>
                <Typography variant={'subtitle2'}>Software</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid item container xs={4} style={{ padding: '16px' }}>
            <Grid item xs={12}>
              <PartIcon part={'o'} />
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ display: 'inline-block', padding: '4px' }} variant={'outlined'}>
                <Typography variant={'subtitle2'}>Operating System</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>,
      spotlightPadding: 0,
      before: async () => await history.push('/credentials'),
    },
    {
      title: "Search",
      target: "#search-credentials",
      content: "You can search this table by product and vendor, or username and password.",
      spotlightPadding: 0,
      styles: { spotlight: { borderRadius: 50 } },
      before: async () => await history.push('/credentials'),
    },
    {
      title: "Terms and Conditions",
      target: "#terms-and-conditions",
      content: "This page outlines the terms and conditons. Most importantly, this app is only approved for authorized purposes. Don't use it for anything illegal.",
      spotlightPadding: 0,
      placementBeacon: 'left',
      before: async () => await history.push('/terms'),
    },
    {
      title: "Feedback",
      target: "#feedback",
      content: "Run into a problem? Let us know on the Feedback page.",
      spotlightPadding: 0,
      placementBeacon: 'left',
      before: async () => await history.push('/feedback'),
    },
  ];

  const handleCallback = ({ action, index, type, status, step }) => {

    switch (type) {
      case EVENTS.STEP_AFTER:
        switch (action) {
          case ACTIONS.NEXT:
            // This is a workaround because joyride looks for the target before dispatching the step:before event.
            // So we have to run the function manually when we know the user wants the next step.
            if (steps[index + 1].before) {
              steps[index + 1].before();
            }

            setStepIndex(index + 1);
            break;
          case ACTIONS.PREV:
            // This is a workaround because joyride looks for the target before dispatching the step:before event.
            // So we have to run the function manually when we know the user wants the next step.
            if (steps[index - 1].before) {
              steps[index - 1].before();
            }

            setStepIndex(index - 1);
            break;
          case ACTIONS.CLOSE:
            setRunning(false);
            break;

          default:
            return;
        };
        break;

      // case EVENTS.STEP_BEFORE:
      //   const { before } = step;
      //   if (before) {
      //     before();
      //   }
      //   break

      default:
        return;
    }
  };

  return (
    <OldJoyride
      steps={steps}
      stepIndex={stepIndex}
      run={running}
      continuous
      showProgress
      tooltipComponent={JoyrideTooltip}
      beaconComponent={null}
      callback={handleCallback}
      floaterProps={{
        hideArrow: true,
        styles: {
          wrapper: {
            zIndex: 1201
          },
        },
      }}
      styles={{
        options: {
          zIndex: 1201,
        }
      }}
      {...props}
    />
  );
};

export default MyJoyride;