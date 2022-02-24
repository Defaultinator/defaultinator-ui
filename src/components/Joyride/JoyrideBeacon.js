import { makeStyles } from '@material-ui/core';
import NewReleasesIcon from '@material-ui/icons/NewReleases';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.error.main,
    boxShadow: "8px 8px 0 0 rgba(255, 0, 0, 1)",
    borderRadius: 50,
    transform: "scale(1)",
    animation: `$pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite`,
    opacity: .95,
  },
  "@keyframes pulse-ring": {
    "0%": {
      //transform: "scale(.95)",
      boxShadow: "0 0 0 0 rgba(255, 0, 0, .7)",

    },
    "70%": {
      transform: "scale(1)",
      boxShadow: "0 0 0 10px rgba(255, 0, 0, 0)",
    },
    "100%": {
      //transform: "scale(.95)",
      boxShadow: "0 0 0 0 rgba(255, 0, 0, 0)",
    }
  },
}));

export const JoyrideBeacon = ({ ...props }) => {
  const classes = useStyles();

  return (
    <NewReleasesIcon
      {...props}
      className={classes.root}
      color="secondary"
    />
  );
};

export default JoyrideBeacon;