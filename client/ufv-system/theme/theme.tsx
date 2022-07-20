import { createTheme } from "@mui/material";

export const themeUI = createTheme({
  palette:{
    primary:{
      main: "#818181",
      contrastText: "#818181"
    },
    secondary:{
      main: "#818181",
      contrastText: "#818181",
    },
  },
  components:{
    MuiInputLabel:{
      styleOverrides:{
        root:{
          color: "#bdbdbd",
        },
      }
    },
    MuiOutlinedInput:{
      styleOverrides:{
        root:{
          color:"#bdbdbd",
        },
        input:{
          borderColor: "#bdbdbd",
        },
        notchedOutline:{
          borderColor:"#bdbdbd",
        },
      }
    }
  },
});

export const theme = {
  colors: {
    primary: '#111',
    secondary: '#818181',
    white: '#d9d9d9'
  },
  font: {
    family: {
      default: "'Poppins', sans-serif"
    },
    weight:{
      medium: 400,
      bold: 900
    }
  }
}