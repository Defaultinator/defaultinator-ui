import PropTypes from 'prop-types';
import { useState } from 'react';

import {
  Box,
  IconButton,
  Skeleton,
} from '@mui/material';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const ApiKey = ({ apiKey }) => {
  const [showKey, setShowKey] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <IconButton
        aria-label={`${showKey ? `hide` : `show`} key`}
        color="secondary"
        component="label"
        onClick={() => setShowKey(!showKey)}
      >
        {showKey ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconButton>
      <Box sx={{ width: '18rem' }}>
        {
          showKey ?
            apiKey :
            <Skeleton
              animation={false}
            />
        }
      </Box>

    </Box>
  );
};

ApiKey.propTypes = {
  apiKey: PropTypes.string.isRequired
};
export default ApiKey;