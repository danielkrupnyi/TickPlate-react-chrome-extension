import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#46484F", // item
      main: "#35363b", // bg
      dark: "#515151", // header
      contrastText: "#fff",
    },
    background: {
      default: "#35363b",
    },
  },
});

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#eee", // item
      main: "#f5f5f5", // bg
      dark: "#E9ECF0", // header
      contrastText: "#000",
    },
    background: {
      default: "#fff",
    },
  },
});

export { darkTheme, lightTheme };
