import { alpha } from '@mui/material/styles';

import makeStyles from '@mui/styles/makeStyles';

import {
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
  },
  title: {
    flex: '1 1 100%',
  },
}));

export function APIKeyListToolbar() {
  const classes = useStyles();

  return (
    <Toolbar
      className={classes.root}
    >
      <Typography
        className={classes.title}
        variant="h6"
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
  );
}

export default APIKeyListToolbar;
