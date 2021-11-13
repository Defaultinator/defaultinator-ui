import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
  makeStyles,
} from '@material-ui/core/styles';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    height: '100vh',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
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
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
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
      <main className={classes.content}>
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