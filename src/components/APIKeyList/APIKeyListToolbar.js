import {
  makeStyles,
  alpha,
} from '@material-ui/core/styles';

import {
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
  },
  title: {
    flex: '1 1 100%',
  },
}));

export const APIKeyListToolbar = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar
        className={classes.root}
      >
        <Typography
          className={classes.title}
          variant={'h6'}
        >
          API Keys
        </Typography>
        {/* <Tooltip title={`Search Keys`}>
          <IconButton
            onClick={() => {}}
          >
            <SearchIcon />
          </IconButton>
        </Tooltip> */}
      </Toolbar>
    </>
  );
};

export default APIKeyListToolbar;