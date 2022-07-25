import {
  Toolbar,
  Typography,
  useTheme,
  alpha,
} from '@mui/material';

export const APIKeyListToolbar = () => {
  const theme = useTheme();

  return (
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
        className={{ flex: '1 1 100%' }}
        variant="h6"
      >
        API Keys
      </Typography>
    </Toolbar>
  );
};

export default APIKeyListToolbar;
