import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    typography: {
      fontFamily: "'Work Sans', sans-serif",
      h2:{
        color: "#000 !important",
        fontWeight: 600,
        textAlign: 'center'
      },
      h3: {
        color: "#000 !important",
        fontWeight: 600
      },
      h6: {
        color: "#000 !important",
        fontWeight: 600
      },
      h5: {
        color: "#000 !important",
        textAlign: "center"
      }
    },
    h3: { 
      color: "#000", textAlign: "center" 
    },
    h2: {
      fontWeight: 600
    },
    p:{ 
      color: "#393939", textAlign: "center", fontSize: 23, fontWeight: 600 
    },
    palette: {
      primary: {
        light: '#fff',
        main: '#fff',
        dark: '#fff',
        contrastText: '#fff',
      },
    },
  });