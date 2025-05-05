'use client'

import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import { Playfair_Display, Libre_Baskerville } from 'next/font/google';

// Initialize the fonts with subset configurations
export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Coach Ross Cuts</title>
        <meta name="description" content="Charity event for Coach Ross Cuts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}