import { createTheme } from '@mui/material/styles';

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
    // Use a system of cursive fonts with fallbacks to ensure readability
    fontFamily: '"Libre Baskerville", "Playfair Display", "Cormorant Garamond", "Georgia", serif',
    
    // Customize heading styles
    h1: {
      fontFamily: '"Playfair Display", "Cormorant", "Georgia", serif',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
    h2: {
      fontFamily: '"Playfair Display", "Cormorant", "Georgia", serif',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    h3: {
      fontFamily: '"Playfair Display", "Cormorant", "Georgia", serif',
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Playfair Display", "Cormorant", "Georgia", serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Playfair Display", "Cormorant", "Georgia", serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Playfair Display", "Cormorant", "Georgia", serif',
      fontWeight: 500,
    },
    // Body text 
    body1: {
      fontFamily: '"Libre Baskerville", "Georgia", serif',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Libre Baskerville", "Georgia", serif',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Playfair Display", "Georgia", serif',
      fontWeight: 500,
      letterSpacing: '0.05em',
      textTransform: 'none', // Don't force uppercase on buttons
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