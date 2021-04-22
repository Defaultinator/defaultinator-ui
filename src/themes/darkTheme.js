import {
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#E85E26',
    },
    secondary: {
      main: '#21B3CD'
      //main: '#DEE5E8'
    },
    warning: {
      main: '#FFD349'
    },
    info: {
      main: '#21B3CD'
    },
    success: {
      main: '#1CBB98'
    },
    background: {
      default: '#3B454A',
      paper: '#4f595e'
    },
    text: {
      primary: '#DEE5E8'
    }
  },
});

export default responsiveFontSizes(darkTheme);
