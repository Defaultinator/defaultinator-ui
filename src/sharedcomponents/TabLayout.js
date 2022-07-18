import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import {
  Slide,
  Tab,
  Tabs,
} from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  toolbarAdjustment: {
    paddingTop: theme.spacing(2),
  },
  tabContainer: {
    width: '100%',
    paddingBottom: theme.spacing(2),
  },
  tabHeightFlex: {
    '& div[style*="visibility: hidden;"]': {
      height: 0,
    },
    '& div[aria-hidden="false"]': {
      height: '100%',
    },
  },
  active: {
    maxHeight: 500,
    transition: 'max-height 1s ease-in',
  },
  inactive: {
    maxHeight: 0,
    transition: 'max-height 0.15s ease-out',
  },
  toolbar: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
  },
}));

function TabBar({
  tabText, activeTab, setActiveTab, tabBarStyles,
}) {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
      <Tabs
        centered
        value={activeTab}
        onChange={(e, newActiveTab) => setActiveTab(newActiveTab)}
        variant="fullWidth"
        style={tabBarStyles}
      >
        {tabText.map((text, idx) => (
          <Tab key={idx} label={text} />
        ))}
      </Tabs>
    </div>
  );
}

function TabContent({ tabContent, active }) {
  const classes = useStyles();

  const prevActiveRef = useRef();
  useEffect(() => {
    prevActiveRef.current = active;
  });
  const prevActive = prevActiveRef.current;

  const getDirection = (idx) => {
    if (active === idx) {
      return (active > prevActive ? 'left' : 'right');
    }
    return (active < prevActive ? 'left' : 'right');
  };

  return (
    <>
      <div className={`${classes.toolbarAdjustment}`} />
      {tabContent.map((content, idx) => (
        <div
          className={classes.tabHeightFlex}
          key={idx}
        >
          <Slide
            direction={getDirection(idx)}
            in={active === idx}
          >
            <div className={`${classes.tabContainer} ${active === idx ? classes.active : classes.inactive}`}>{content}</div>
          </Slide>
        </div>
      ))}
    </>
  );
}

function TabLayout({ tabs, tabBarStyles = {} }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <TabBar
        tabText={tabs.map((tab) => tab.tabText)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabBarStyles={tabBarStyles}
      />
      <TabContent
        tabContent={tabs.map((tab) => tab.tabContent)}
        active={activeTab}
      />
    </div>
  );
}

TabLayout.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    tabText: PropTypes.string.isRequired,
    tabIcon: PropTypes.element,
    tabContent: PropTypes.element.isRequired,
  })).isRequired,
  tabBarStyles: PropTypes.object,
};

TabLayout.defaultProps = {
  tabs: [],
  tabBarStyles: {},
};

export default TabLayout;
