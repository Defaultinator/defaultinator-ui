import React, {
  useEffect,
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
import InputAdornment from "@material-ui/core/InputAdornment";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useAxios from "axios-hooks";
import {API_URI} from "./config/constants";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
    margin: '0px',
    padding: '0px',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    },
  },
  advancedSearch: {
    position: 'absolute',
    marginTop: theme.spacing(4),
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

export const AdvancedSearchModal = ({onSubmit}) => {
  const classes = useStyles();
  const [part, setPart] = useState('');
  const [vendor, setVendor] = useState('');
  const [product, setProduct] = useState('');
  const [version, setVersion] = useState('');
  const [update, setUpdate] = useState('');
  const [edition, setEdition] = useState('');
  const [language, setLanguage] = useState('');

  let spacing = 3;

  const generateCpeStringFromAttributes = (attrs) => {
    let cpeString = "cpe:/";
    let stringBuilder = "";

    let {
      part,
      vendor   = '*',
      product  = '*',
      version  = '*',
      update   = '*',
      edition  = '*',
      language = '*',
    } = attrs;

    // Convert ANY keyword to asterisk
    if (vendor === 'ANY') vendor = '*';
    if (product === 'ANY') product = '*';
    if (version === 'ANY') version = '*';
    if (update === 'ANY') update = '*';
    if (edition === 'ANY') edition = '*';
    if (language === 'ANY') language = '*';

    // Convert blanks to asterisks
    if (vendor === '') vendor = '*';
    if (product === '') product = '*';
    if (version === '') version = '*';
    if (update === '') update = '*';
    if (edition === '') edition = '*';
    if (language === '') language = '*';

    cpeString = `${cpeString}${part}`;

    // Check value of vendor, append to the end if it isn't the final value and a wildcard
    stringBuilder = `${stringBuilder}:${vendor}`;
    if (vendor !== '*') {
      cpeString = `${cpeString}${stringBuilder}`;
      stringBuilder = '';
    }

    // Check value of product, append to the end if it isn't the final value and a wildcard
    stringBuilder = `${stringBuilder}:${product}`;
    if (product !== '*') {
      cpeString = `${cpeString}${stringBuilder}`;
      stringBuilder = '';
    }

    // Check value of version, append to the end if it isn't the final value and a wildcard
    stringBuilder = `${stringBuilder}:${version}`;
    if (version !== '*') {
      cpeString = `${cpeString}${stringBuilder}`;
      stringBuilder = '';
    }

    // Check value of update, append to the end if it isn't the final value and a wildcard
    stringBuilder = `${stringBuilder}:${update}`;
    if (update !== '*') {
      cpeString = `${cpeString}${stringBuilder}`;
      stringBuilder = '';
    }

    // Check value of edition, append to the end if it isn't the final value and a wildcard
    stringBuilder = `${stringBuilder}:${edition}`;
    if (edition !== '*') {
      cpeString = `${cpeString}${stringBuilder}`;
      stringBuilder = '';
    }

    // Check value of language, append to the end if it isn't the final value and a wildcard
    stringBuilder = `${stringBuilder}:${language}`;
    if (language !== '*') {
      cpeString = `${cpeString}${stringBuilder}`;
    }

    return cpeString;

  };

  const handleSubmit = () => {
    let cpeAttrs = {
      part: part,
      vendor: vendor,
      product: product,
      version: version,
      update: update,
      edition: edition,
      language: language,
    };

    onSubmit(generateCpeStringFromAttributes(cpeAttrs));
  };

  return(
    <Paper className={classes.advancedSearch} elevation={4}>
      <Grid container spacing={spacing}>
        <Grid item xs={5} md={3}>
          <FormControl variant={"outlined"} className={classes.formControl}>
            <InputLabel
              id={"advanced-search-part-label"}
            >
              Part
            </InputLabel>
            <Select
              id={"advanced-search-part-input"}
              labelId={"advanced-search-part-label"}
              value={part}
              onChange={(e) => setPart(e.target.value)}
              label={"Part"}
            >
              <MenuItem value={""}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={'a'}>
                a
              </MenuItem>
              <MenuItem value={'o'}>
                o
              </MenuItem>
              <MenuItem value={'h'}>
                h
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs>
          <TextField
            className={classes.searchField}
            label={"Vendor"}
            variant={"outlined"}
            value={vendor}
            onChange={(e) => setVendor(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={spacing}>
        <Grid item xs>
            <TextField
              className={classes.searchField}
              label={"Product"}
              variant={"outlined"}
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
        </Grid>
        <Grid item xs>
            <TextField
              className={classes.searchField}
              label={"Version"}
              variant={"outlined"}
              value={version}
              onChange={(e) => setVersion(e.target.value)}
            />
        </Grid>
      </Grid>
      <Grid container spacing={spacing}>
        <Grid item xs>
            <TextField
              className={classes.searchField}
              label={"Update"}
              variant={"outlined"}
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
            />
        </Grid>
        <Grid item xs>
            <TextField
              className={classes.searchField}
              label={"Edition"}
              variant={"outlined"}
              value={edition}
              onChange={(e) => setEdition(e.target.value)}
            />
        </Grid>
      </Grid>
      <Grid container spacing={spacing}>
        <Grid item xs={6}>
          <TextField
            className={classes.searchField}
            label={"Language"}
            variant={"outlined"}
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </Grid>
        <Grid item container xs align="center" justify="center" alignItems="center">
          <div>
            <Button
              color="primary"
              onClick={() => {
                setPart('');
                setVendor('');
                setProduct('');
                setVersion('');
                setUpdate('');
                setEdition('');
                setLanguage('');
              }}
            >
              Reset
            </Button>
          </div>
        </Grid>
        <Grid item container xs align="center" justify="center" alignItems="center">
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export const SearchBarTypeahead = ({data}) => {
  const history = useHistory();
  const classes = useStyles();

  return(
    <Paper className={classes.searchSuggestions} elevation={4}>
      <List aria-label={"search-suggestions"}>
        { data?.map((item, idx) => (
          <ListItem
            button
            dense
            key={idx}
            onClick={() => {
              console.log('boom');
              history.push(`/lookup/${item.vendor}/${item.product}`)
            }}
          >
            <ListItemText primary={`${item.vendor}`} secondary={item.product} />
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

  const [{data}, refetch] = useAxios({
    manual: true,
    url: `${API_URI}/textSearchTypeahead`,
    method: 'POST',
    data: {
      text: searchText
    }
  });

  useEffect(() => {
    if(searchText !== '') refetch();
  }, [searchText, refetch]);

  const advancedSubmit = (text) => {
    setAdvancedSearch(false);
    history.push(`/search?query=${text}`);
  };

  return(
    <div className={classes.search}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          history.push(`/search?query=${searchText}`);
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
          <div><AdvancedSearchModal onSubmit={advancedSubmit}/></div>
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
        <div className={classes.offset} />
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
