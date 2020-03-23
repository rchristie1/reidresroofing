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
        fontWeight: 600,
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
    MuiInputBase: {
      root: {
        color: '#fff',
        lineHeight: '1.56',
        fontSize: '18px',
        
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
      },
      notchedOutline: {
        borderColor: '#fff !important'
      }
    }
  },
  props: {
  }
});

export default theme;
