import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(55, 55, 124)',
      light: 'rgba(55, 55, 124, 0.4)',
      contrastText: 'rgba(55, 55, 124, 1)',
    },
    secondary: {
      main: 'rgb(255, 149, 149)',
      light: 'rgb(252, 194, 194)',
      contrastText: 'rgba(255, 149, 149, 1)',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    grey: {
      A100: grey['100'],
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontWeightBold: 600,
    fontWeightLight: 300,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    h1: {
      fontSize: '8rem',
    },
    h2: {
      fontSize: '6rem',
    },
    h3: {
      fontSize: '4.5rem',
    },
    h4: {
      fontSize: '3.5rem',
    },
    h5: {
      fontSize: '2.5rem',
    },
    h6: {
      fontSize: '2rem',
    },
    subtitle1: {
      fontSize: '1.8rem',
    },
    subtitle2: {
      fontSize: '1.3rem',
    },
  },
  spacing: ['0.5rem', '1rem', '2rem', '3rem'],
});
