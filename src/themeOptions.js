//import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createTheme } from '@mui/material/styles';
export const themeOptions = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#ff7b26',
    },
    secondary: {
      main: '#2ed6be',
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