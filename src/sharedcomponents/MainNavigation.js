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
  Box,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DRAWER_WIDTH = 250;

const AppDrawerContent = ({ pages, linkClicked, DrawerHeader }) => {
  const { pathname: activePath } = useLocation();

  return (
    <Box sx={{ width: `${DRAWER_WIDTH}px` }}>
      {DrawerHeader}
      <List>
        {pages.map((page, index) => (
          ((page.navLink || page.path) && page.navText)
          && (
            <ListItem
              key={index}
              sx={{ display: page.hidden && 'none' }}
              button
              component={Link}
              to={page.navLink || page.path}
              selected={page.path === activePath}
              disabled={page.disabled}
              onClick={() => linkClicked()}
            >
              <ListItemIcon>
                {page.navIcon}
              </ListItemIcon>
              <ListItemText primary={page.navText} />
            </ListItem>
          )
        ))}
      </List>
    </Box>
  );
};

const MainNavigation = ({
  pages,
  title,
  AppBarAction = null,
  DrawerHeader = null,
}) => {
  const theme = useTheme();

  // TODO: If we ever want SSR, this will bork it
  const temporaryDrawer = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });
  const [mobileOpen, setMobileOpen] = useState(!temporaryDrawer);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ ...(!temporaryDrawer && { display: 'flex' }) }}>
      <AppBar
        position="fixed"
        sx={{
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          ...((mobileOpen && !temporaryDrawer)
            && ({
              width: `calc(100% - ${DRAWER_WIDTH}px)`,
              marginLeft: DRAWER_WIDTH,
              transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
            })
          ),
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex' }}>
            {AppBarAction}
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ width: DRAWER_WIDTH }}>
        <Drawer
          variant={`${temporaryDrawer ? 'temporary' : 'persistent'}`}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{ width: DRAWER_WIDTH }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <AppDrawerContent
            DrawerHeader={DrawerHeader}
            pages={pages}
            linkClicked={() => setMobileOpen(!temporaryDrawer)}
          />
        </Drawer>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: `${-DRAWER_WIDTH}px`,
          ...((mobileOpen && !temporaryDrawer)
            && ({
              width: `calc(100% - ${DRAWER_WIDTH}px)`,
              marginLeft: 0, // `${-DRAWER_WIDTH}px`,
              transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
              }),
            })),
          ...(temporaryDrawer
            && ({
              margin: 0,
            })),
        }}
      >
        <Box sx={{ ...theme.mixins.toolbar }} />
        <Box sx={{
          padding: 1,
          [theme.breakpoints.up('md')]: {
            padding: 2,
          },
          [theme.breakpoints.up('lg')]: {
            padding: 3,
          },
        }}
        >
          <Switch>
            {pages.map((page, index) => (
              <Route
                key={index}
                path={page.path}
                exact={page.exact}
                render={() => (
                  page.pageContent
                )}
              />
            ))}
          </Switch>
        </Box>
      </Box>
    </Box>
  );
};

MainNavigation.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    navText: PropTypes.string,
    navIcon: PropTypes.element,
    pageContent: PropTypes.element,
    pageTitle: PropTypes.string,
    disabled: PropTypes.bool,
    // TODO: Validate this is a path
    path: PropTypes.string,
  })).isRequired,
  title: PropTypes.string.isRequired,
  AppBarAction: PropTypes.element,
  DrawerHeader: PropTypes.element,
};

MainNavigation.defaultProps = {
  AppBarAction: null,
  DrawerHeader: null,
};

export default MainNavigation;
