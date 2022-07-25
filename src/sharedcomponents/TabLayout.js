import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Slide,
  Tab,
  Tabs,
} from '@mui/material';

const TabBar = ({
  tabText,
  activeTab,
  setActiveTab,
  tabBarStyles,
}) => (
  <Box
    sx={{
      width: '100%',
      backgroundColor: 'background.paper',
      color: 'primary.main',
    }}
  >
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
  </Box>
);

const TabContent = ({ tabContent, active }) => {
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
      <Box sx={{ paddingTop: 2 }} />
      {tabContent.map((content, idx) => (
        <Box
          sx={{
            '& div[style*="visibility: hidden;"]': {
              height: 0,
            },
            '& div[aria-hidden="false"]': {
              height: '100%',
            },
          }}
          key={idx}
        >
          <Slide
            direction={getDirection(idx)}
            in={active === idx}
          >
            <Box
              sx={{
                width: '100%',
                paddingBottom: 2,
                maxHeight: 0,
                transition: 'max-height 0.15s ease-out',
                ...(active === idx
                  && {
                    maxHeight: '500px',
                    transition: 'max-height 1s ease-in',
                  }),
              }}
            >
              {content}
            </Box>
          </Slide>
        </Box>
      ))}
    </>
  );
};

const TabLayout = ({ tabs, tabBarStyles = {} }) => {
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
};

TabLayout.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    tabText: PropTypes.string.isRequired,
    tabIcon: PropTypes.element,
    tabContent: PropTypes.element.isRequired,
  })).isRequired,
  tabBarStyles: PropTypes.object,
};

TabLayout.defaultProps = {
  tabBarStyles: {},
};

export default TabLayout;
