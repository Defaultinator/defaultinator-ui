import React from 'react';
import PropTypes from 'prop-types';

import {
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';

function SuggestionItem({ suggestion }) {
  const { _id: name, count } = suggestion;

  // TODO: These should be clickable
  return (
    <ListItem button>
      <ListItemText primary={name} secondary={`Records: ${count}`} />
    </ListItem>
  );
}

function AutoCompleteSuggestions({ suggestions }) {
  return (
    <Paper>
      <List>
        {suggestions.map((suggestion) => <SuggestionItem key={suggestion._id} suggestion={suggestion} />)}
      </List>
    </Paper>
  );
}

AutoCompleteSuggestions.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
  })),
};

AutoCompleteSuggestions.defaultProps = {
};

export default AutoCompleteSuggestions;
