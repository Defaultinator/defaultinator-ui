import React, {
  useState
} from 'react';

import {
  BrowserRouter as Router,
  useHistory,
  withRouter,
  Link
} from "react-router-dom";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import useAxios from "axios-hooks";
import {API_URI} from "./config/constants";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MainRoute from "./routes/MainRoute";

import AdvancedSearchModal from './components/AdvancedSearchModal/AdvancedSearchModal';

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
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
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
      width: '24ch',
      '&:focus': {
        width: '32ch',
      },
    },
    [theme.breakpoints.up('md')]: {
      width: '48ch',
      '&:focus': {
        width: '48ch',
      },
    },
  },
  mainContent: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
  },
  advancedSearch: {
    position: 'absolute',
    marginTop: theme.spacing(1),
    width: '100%',
    padding: theme.spacing(2),
    flexGrow: 1,
  },
  formControl: {
    width: '100%',
  },
  searchField: {
    width: '100%',
  },
  offset: theme.mixins.toolbar,
  searchSuggestions: {
    position: 'absolute',
    marginTop: theme.spacing(1),
    width: '100%',
    flexGrow: 1,
  },
}));

export const SearchBarTypeahead = ({data}) => {
  const classes = useStyles();

  return(
    <Paper className={classes.searchSuggestions} elevation={4}>
      <List aria-label={"search-suggestions"}>
        { data?.map((item, idx) => (
          <ListItem
            button
            dense
            component={Link}
            to={`/dictionary/search?query=cpe:/a:${item._id}`}
            key={idx}
          >
            <ListItemText primary={`Vendor: ${item._id}`} secondary={`Records: ${item.count}`} />
          </ListItem>
        ))}
      </List>

    </Paper>
  );
};

export const SearchBar = withRouter(() => {
  const history = useHistory();
  const classes = useStyles();

  const [hasFocus, setHasFocus] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [advancedSearch, setAdvancedSearch] = useState(false);

  const [{data}] = useAxios({
    manual: true,
    url: `${API_URI}/dictionary/typeahead?prefix=${searchText}&count=5`,
    method: 'GET',
  });

  const advancedSubmit = (text) => {
    setAdvancedSearch(false);
    history.push(`/credentials/search?query=${text}`);
  };

  return(
    <div className={classes.search}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          history.push(`/credentials/search?query=${searchText}`);
          setSearchText('');
        }}
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
          onFocus={() => {
            setHasFocus(true);
            advancedSearch && setAdvancedSearch(false)
          }}
          onBlur={() => {
            setHasFocus(false);
          }}
          onChange={(e) => setSearchText(e.target.value)}
          endAdornment={
            <InputAdornment position={"end"}>
              <IconButton
                aria-label={"advanced search"}
                onClick={() => setAdvancedSearch(!advancedSearch)}
                disableRipple
                style={{ backgroundColor: 'transparent' }}
              >
                { advancedSearch ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/> }
              </IconButton>
            </InputAdornment>
          }
        />
        <Fade in={data && hasFocus} disableStrictModeCompat>
          <div><SearchBarTypeahead data={data} /></div>
        </Fade>
        <Fade in={advancedSearch} disableStrictModeCompat>
          <div className={classes.advancedSearch}><AdvancedSearchModal onSubmit={advancedSubmit}/></div>
        </Fade>
      </form>
    </div>
  );
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              component={Link}
              to={'/credentials'}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Defaultinator
            </Typography>
            <SearchBar />
          </Toolbar>
        </AppBar>
        <div className={classes.offset} />
        <Container className={classes.mainContent}>
          <MainRoute />
        </Container>
      </Router>
    </div>
  );
};

export default App;
