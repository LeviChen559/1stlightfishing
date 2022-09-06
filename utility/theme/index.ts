import { createTheme } from '@mui/material/styles';


interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}
export const themePalette ={
  main:'#233D4D',
}



export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: '#233D4D',
    },
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      light: '#39505E',
      main: '#233D4D',
      dark: '#0f2533',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f3e5f5',
      main: '#ce93d8',
      dark: '#ab47bc',
      contrastText: '#000',
    },
    info: {
      light: '#4fc3f7',
      main: '#29b6f6',
      dark: '#0288d1',
      contrastText: '#fff',
    },
    warning: {
      light: '#ffb74d',
      main: '#ffa726',
      dark: '#f57c00',
      contrastText: '#fff',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f'
    },
  }
  });
  // declare module '@mui/material/styles' {
  //   interface Palette {
  //     warning: Palette['warning'];
  //   }
  //   interface PaletteOptions {
  //     warning?: PaletteOptions['warning'];
  //   }
  // }