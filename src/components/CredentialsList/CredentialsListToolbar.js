import { useState } from 'react';

import { alpha } from '@mui/material/styles';

import {
  Dialog,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import AdvancedSearchModal from '../AdvancedSearchModal/AdvancedSearchModal';

export const CredentialsListToolbar = () => {
  const theme = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <Dialog
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      >
        <AdvancedSearchModal onSearch={() => setSearchOpen(false)} />
      </Dialog>
      <Toolbar
        sx={{
          backgroundColor:
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }}
      >
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
        >
          Credentials
        </Typography>
        <Tooltip title="Filter Results">
          <IconButton onClick={() => setSearchOpen(true)} size="large">
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </>
  );
};

export default CredentialsListToolbar;
