import React from 'react';

import makeStyles from '@mui/styles/makeStyles';
import {
  useHistory,
} from "react-router-dom";

import {
  Paper,
} from '@mui/material';

import AdvancedSearchByCPE from './AdvancedSearchByCPE';
import AdvancedSearchByCredentials from './AdvancedSearchByCredentials';
import TabLayout from '../../sharedcomponents/TabLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    overflow: 'hidden',
  },
}));

export const AdvancedSearchModal = ({ onSearch = () => {}, onClear }) => {
  const styles = useStyles();
  const history = useHistory();

  const handleSearch = (fields) => {
    history.push({
      pathname: '/credentials/search',
      search: "?" + new URLSearchParams(fields)
    });
    onSearch();
  };

  const tabs = [
    {
      tabText: "CPE",
      tabContent: <AdvancedSearchByCPE onSubmit={handleSearch} />,
    },
    {
      tabText: "Credential",
      tabContent: <AdvancedSearchByCredentials onSubmit={handleSearch} />,
    },
  ];

  return (
    <Paper className={styles.root}>
      <TabLayout tabs={tabs} />
    </Paper>
  );
};

AdvancedSearchModal.propTypes = {
};

AdvancedSearchModal.defaultProps = {
};

export default AdvancedSearchModal;