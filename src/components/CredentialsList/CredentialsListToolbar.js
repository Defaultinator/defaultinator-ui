import { useState } from "react";

import {
  makeStyles,
  alpha,
} from '@material-ui/core/styles';

import {
  Dialog,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import AdvancedSearchModal from '../AdvancedSearchModal/AdvancedSearchModal';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
  },
  title: {
    flex: '1 1 100%',
  },
}));

export const CredentialsListToolbar = () => {
  const classes = useStyles();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <Dialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      >
        <AdvancedSearchModal onSearch={() => setSearchOpen(false)}/>
      </Dialog>
      <Toolbar
        className={classes.root}
      >
        <Typography
          className={classes.title}
          variant={'h6'}
        >
          Credentials
        </Typography>
        <Tooltip title={`Filter Results`}>
          <IconButton
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </>
  );
};
export default CredentialsListToolbar;