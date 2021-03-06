import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Nunito Sans', sans-serif;"
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#00b200',
        borderRadius: 0,
        minWidth: '143px',
        height: '46px',
        '&:hover': {
          backgroundColor: '#00b200',
          opacity: '0.8',
        }
      },
      label: {
        fontSize: '14px',
        fontWeight: 500,
        color: '#fff',
        textTransform: 'capitalize'
      }
    },
    MuiFormControl: {
      root: {
        width: '100%'
      }
    },
    MuiSelect: {
      root:{
        opacity: 0.4
      },
      icon: {
        color: '#fff'
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
      },
    },
    MuiToolbar: {
      root: {
        justifyContent: 'flex-end'
      }
    },
    MuiInputBase: {
      root: {
        color: '#fff',
        lineHeight: '1.56',
        fontSize: '18px',
        
      }
    },
    MuiBackdrop:{
      root:{
        backgroundColor: "rgba(0,0,0, 0.9)"
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
      },
      notchedOutline: {
        borderColor: '#fff !important'
      }
    },
  },
  palette: {
    secondary: {
      main: '#000'
    }
  },
  props: {
  }
});

export default theme;
