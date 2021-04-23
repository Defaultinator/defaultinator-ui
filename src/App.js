import React, {
  useState
} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  withRouter,
  Link
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import Container from "@material-ui/core/Container";
import SearchResultsPage from "./routes/SearchResultsPage";
import VendorListPage from "./routes/VendorListPage";
import ProductsByVendorPage from "./routes/ProductsByVendorPage";
import CredentialLookupPage from "./routes/CredentialLookupPage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '24ch',
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '24ch',
      '&:focus': {
        width: '24ch',
      },
    },
  },
  mainContent: {
    margin: '0px',
    padding: '0px',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
  }
}));

export const SearchBar = withRouter(() => {
  const history = useHistory();
  const classes = useStyles();

  const [searchText, setSearchText] = useState('');

  return(
    <div className={classes.search}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          history.push(`/search?query=${searchText}`);
          setSearchText('');        }}
      >
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search by CPE…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </div>
  );
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              component={Link}
              to={'/vendors'}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Defaultinator
            </Typography>
            <SearchBar />
          </Toolbar>
        </AppBar>
        <Container className={classes.mainContent}>
          <Switch>
            <Route path={"/search"}>
              <SearchResultsPage />
            </Route>
            <Route path={"/vendors/"}>
              <VendorListPage />
            </Route>
            <Route path={"/products/:vendorId?"}>
              <ProductsByVendorPage />
            </Route>
            <Route path={"/lookup/:vendorId/:productId"}>
              <CredentialLookupPage />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
};

export default App;
