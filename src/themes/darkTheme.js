import {
// createMuiTheme,
  responsiveFontSizes, adaptV4Theme,
} from '@mui/material/styles';

// TODO: Not safe for production
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@mui/material';

const darkTheme = createMuiTheme(adaptV4Theme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E85E26',
    },
    secondary: {
      main: '#21B3CD',
      // main: '#DEE5E8'
    },
    warning: {
      main: '#FFD349',
    },
    info: {
      main: '#21B3CD',
    },
    success: {
      main: '#1CBB98',
    },
    // background: {
    //   default: '#3B454A',
    //   paper: '#4f595e'
    // },
    // text: {
    //   primary: '#DEE5E8'
    // }
  },
}));

export default responsiveFontSizes(darkTheme);
