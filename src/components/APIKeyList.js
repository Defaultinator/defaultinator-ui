import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@material-ui/core';
import { APIKeyType } from '../config/types';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
});

export const APIKeyList = ({ keys=[] }) => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <Paper className={styles.root}>
      <List>
        {keys.map(({ apiKey, email, _id }, idx) =>
          <ListItem 
            key={idx} 
            button
            onClick={() => history.push(`/apikeys/${_id}`)}
            >
            <ListItemText primary={apiKey} secondary={email} />
          </ListItem>
        )}
      </List>
    </Paper>
  );
};

APIKeyList.propTypes = {
  keys: PropTypes.arrayOf(APIKeyType),
};

APIKeyList.defaultProps = {
  keys: [],
};

export default APIKeyList;