//import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createTheme } from '@mui/material/styles';

export const themeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ef6c00',
    },
    secondary: {
      main: '#26a69a',
      light: '#ffea00',
    },
    info: {
      main: '#03a9f4',
    },
  },
  shape: {
    pillRadius: 50
  },
})