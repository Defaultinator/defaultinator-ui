import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Link,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import makeStyles from '@mui/styles/makeStyles';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  // appBar: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginLeft: drawerWidth,
  //   //zIndex: theme.zIndex.drawer + 1,
  // },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  //toolbar: theme.mixins.toolbar,
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  // content: {
  //   height: '100vh',
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.default,
  // },
  pages: {
    padding: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppDrawerContent = ({ pages }) => {
  const classes = useStyles();
  const { pathname: activePath } = useLocation();

  return (
    <div className={classes.drawer}>
      <List>
        {pages.map((page, index) => (
          <ListItem
            key={index}
            button
            component={Link}
            to={page.path}
            selected={page.path === activePath}
            disabled={page.hidden || false}
          >
            <ListItemIcon>
              {page.navIcon}
            </ListItemIcon>
            <ListItemText primary={page.navText} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const MainNavigation = ({ pages, title, AppBarAction = <></> }) => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={clsx(classes.appBar, {
          [classes.appBarShift]: mobileOpen,
        })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            size="large">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          {AppBarAction}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Drawer
          variant="persistent"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          className={classes.drawer}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <AppDrawerContent pages={pages} />
        </Drawer>
      </nav>
      <main className={clsx(classes.content, {
          [classes.contentShift]: mobileOpen,
        })}>
        <div className={classes.toolbar} />
        <div className={classes.pages}>
          <Switch>
            {pages.map((page, index) => (
              <Route
                key={index}
                path={page.path}
                render={() => (
                  page.pageContent
                )}
              />
            ))}
          </Switch>
        </div>
      </main>
    </div>
  );
}

MainNavigation.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    navText: PropTypes.string,
    navIcon: PropTypes.element,
    pageContent: PropTypes.element,
    pageTitle: PropTypes.string,

    // TODO: Validate this is a path
    path: PropTypes.string,
    hidden: PropTypes.bool,
  })).isRequired,
  title: PropTypes.string,
};

MainNavigation.defaultProps = {
  pages: [],
};

export default MainNavigation;