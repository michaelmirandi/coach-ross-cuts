import { ReactNode } from 'react';
import { playfairDisplay } from '../fonts';
import ThemeRegistry from './ThemeRegistry';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={playfairDisplay.className}>
      <head>
        <title>Coach Ross Cuts</title>
        <meta name="description" content="Charity event for Coach Ross Cuts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}