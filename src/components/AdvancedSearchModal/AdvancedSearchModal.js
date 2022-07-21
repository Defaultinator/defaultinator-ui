import React from 'react';

import {
  useHistory,
} from 'react-router-dom';

import {
  Paper,
} from '@mui/material';

import AdvancedSearchByCPE from './AdvancedSearchByCPE';
import AdvancedSearchByCredentials from './AdvancedSearchByCredentials';
import TabLayout from '../../sharedcomponents/TabLayout';

export const AdvancedSearchModal = ({ onSearch = () => { }, onClear }) => {
  const history = useHistory();

  const handleSearch = (fields) => {
    history.push({
      pathname: '/credentials/search',
      search: `?${new URLSearchParams(fields)}`,
    });
    onSearch();
  };

  const tabs = [
    {
      tabText: 'CPE',
      tabContent: <AdvancedSearchByCPE onSubmit={handleSearch} />,
    },
    {
      tabText: 'Credential',
      tabContent: <AdvancedSearchByCredentials onSubmit={handleSearch} />,
    },
  ];

  return (
    <Paper sx={{ padding: 0, overflow: 'hidden' }}>
      <TabLayout tabs={tabs} />
    </Paper>
  );
};

AdvancedSearchModal.propTypes = {
};

AdvancedSearchModal.defaultProps = {
};

export default AdvancedSearchModal;
