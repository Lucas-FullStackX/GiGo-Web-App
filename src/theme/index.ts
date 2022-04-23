import { createTheme } from '@mui/material/styles';
import { blue, lightBlue, red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: blue,
    secondary: lightBlue,
    error: {
      main: red.A400,
    },
  },
});

export default theme;
