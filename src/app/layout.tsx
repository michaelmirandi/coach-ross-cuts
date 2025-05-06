import { ReactNode } from 'react';
import ThemeRegistry from './ThemeRegistry';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>Coach&apos;s Cuts</title>
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