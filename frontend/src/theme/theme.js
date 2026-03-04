import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C',
    },
    secondary: {
      main: '#2196F3',
      light: '#64B5F6',
      dark: '#1976D2',
    },
    background: {
      default: '#F1F8E9',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1B5E20',
      secondary: '#546E7A',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#0F3F3F',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#0F3F3F',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#0F3F3F',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      color: '#0F3F3F',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#0F3F3F',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
      color: '#0F3F3F',
    },
    body1: {
      fontSize: '1rem',
      color: '#6B7A7A',
    },
    body2: {
      fontSize: '0.875rem',
      color: '#6B7A7A',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1600px !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          padding: '10px 24px',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
        },
        contained: {
          backgroundColor: '#1CA8AF',
          color: '#FFFFFF',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#148A90',
            boxShadow: '0 4px 12px rgba(28, 168, 175, 0.3)',
          },
        },
        outlined: {
          borderColor: '#1CA8AF',
          color: '#1CA8AF',
          '&:hover': {
            borderColor: '#148A90',
            backgroundColor: 'rgba(28, 168, 175, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#1CA8AF',
          color: '#FFFFFF',
          fontWeight: 500,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1CA8AF',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1CA8AF',
            },
          },
        },
      },
    },
  },
});

export default theme;
