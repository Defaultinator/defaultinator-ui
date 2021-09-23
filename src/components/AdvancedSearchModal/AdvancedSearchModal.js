import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {

  Paper,
} from '@material-ui/core';

import AdvancedSearchByCPE from './AdvancedSearchByCPE';
import AdvancedSearchByCredentials from './AdvancedSearchByCredentials';
import TabLayout from '../../sharedcomponents/TabLayout';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    overflow: 'hidden',
  },
}));

export const AdvancedSearchModal = () => {
  const styles = useStyles();

  const tabs = [
    {
      tabText: "CPE",
      tabContent: <AdvancedSearchByCPE />,
    },
    {
      tabText: "Credential",
      tabContent: <AdvancedSearchByCredentials />,
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