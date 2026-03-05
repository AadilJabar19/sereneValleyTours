import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1CA8AF',
      light: '#4FC3C9',
      dark: '#148A90',
    },
    secondary: {
      main: '#FF6B6B',
      light: '#FF8E8E',
      dark: '#E85555',
    },
    background: {
      default: '#F8FCFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#7F8C8D',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#2C3E50',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#2C3E50',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#2C3E50',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#2C3E50',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      color: '#2C3E50',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      color: '#2C3E50',
    },
    body1: {
      fontSize: '1rem',
      color: '#7F8C8D',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      color: '#7F8C8D',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
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
          borderRadius: '50px',
          padding: '14px 36px',
          fontSize: '1.0625rem',
          fontWeight: 700,
          transition: 'all 0.3s ease',
          textTransform: 'none',
          boxShadow: 'none',
          letterSpacing: '0.5px',
        },
        contained: {
          background: 'linear-gradient(135deg, #1CA8AF 0%, #0F7075 100%)',
          color: '#FFFFFF',
          boxShadow: '0 4px 15px rgba(28, 168, 175, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #0F7075 0%, #0A5559 100%)',
            boxShadow: '0 8px 30px rgba(28, 168, 175, 0.6)',
            transform: 'translateY(-3px) scale(1.02)',
          },
        },
        outlined: {
          borderWidth: '2.5px',
          borderColor: '#1CA8AF',
          color: '#1CA8AF',
          fontWeight: 700,
          '&:hover': {
            borderWidth: '2.5px',
            borderColor: '#0F7075',
            backgroundColor: 'rgba(28, 168, 175, 0.12)',
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: '0 4px 15px rgba(28, 168, 175, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '28px',
          backgroundColor: '#FFFFFF',
          boxShadow: '0 10px 40px rgba(28, 168, 175, 0.15)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
          border: '2px solid rgba(28, 168, 175, 0.1)',
          '&:hover': {
            transform: 'translateY(-16px) scale(1.02)',
            boxShadow: '0 25px 60px rgba(28, 168, 175, 0.35)',
            borderColor: 'rgba(28, 168, 175, 0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #1CA8AF 0%, #148A90 100%)',
          color: '#FFFFFF',
          fontWeight: 700,
          borderRadius: '25px',
          padding: '6px 12px',
          fontSize: '0.875rem',
          boxShadow: '0 4px 12px rgba(28, 168, 175, 0.3)',
          border: '2px solid rgba(255, 255, 255, 0.5)',
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
