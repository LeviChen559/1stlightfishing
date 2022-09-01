import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: '#233D4D',
    },
    common: { black: '#000', white: '#fff' },
    primary: {
      light: '#F3BC2D',
      main: '#233D4D',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    info: {
      light: '#03a9f4',
      main: '#0288d1',
      dark: '#01579b',
      contrastText: '#fff',
    },
  },
});