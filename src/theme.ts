import { createTheme } from '@mui/material/styles';
import { cookie, lato } from './fonts'; // Import both fonts

// Create a more elegant color palette based on the provided colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#03202f',      // Deep navy blue
      light: '#1a3747',     // Lighter shade for hover states
      dark: '#021825',      // Darker shade for pressed states
      contrastText: '#ffffff', // White text for contrast
    },
    secondary: {
      main: '#A71930',      // Rich burgundy red
      light: '#c52d44',     // Lighter shade for hover states
      dark: '#8c1428',      // Darker shade for pressed states
      contrastText: '#ffffff', // White text for contrast
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#03202f',   // Use primary color for text
      secondary: '#5a6a72', // Muted version of primary for secondary text
    },
  },
  typography: {
    // Set Lato as the default font family
    fontFamily: lato.style.fontFamily,
    
    // Customize heading styles with Cookie font
    h1: {
      fontFamily: cookie.style.fontFamily,
      fontWeight: 400, // Cookie only has 400 weight
      letterSpacing: '0.02em',
    },
    h2: {
      fontFamily: cookie.style.fontFamily,
      fontWeight: 400,
      letterSpacing: '0.01em',
    },
    h3: {
      fontFamily: cookie.style.fontFamily,
      fontWeight: 400,
    },
    h4: {
      fontFamily: cookie.style.fontFamily,
      fontWeight: 400,
    },
    h5: {
      fontFamily: cookie.style.fontFamily,
      fontWeight: 400,
    },
    h6: {
      fontFamily: cookie.style.fontFamily,
      fontWeight: 400,
    },
    // Body text with Lato
    body1: {
      fontFamily: lato.style.fontFamily,
      lineHeight: 1.6,
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontFamily: lato.style.fontFamily,
      lineHeight: 1.6,
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: lato.style.fontFamily,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    subtitle2: {
      fontFamily: lato.style.fontFamily,
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      fontFamily: lato.style.fontFamily, // Changed to Lato for better readability
      fontWeight: 700, // Bold for buttons
      letterSpacing: '0.05em',
      textTransform: 'none', // Don't force uppercase on buttons
    },
    caption: {
      fontFamily: lato.style.fontFamily,
      fontSize: '0.75rem',
      lineHeight: 1.4,
    },
    overline: {
      fontFamily: lato.style.fontFamily,
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: '0.75rem',
    },
  },
  components: {
    // Customize buttons
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #03202f 0%, #05394f 100%)',
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #A71930 0%, #c52d44 100%)',
        },
      },
    },
    // Customize AppBar
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        },
      },
    },
    // Customize Paper component
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

export default theme;