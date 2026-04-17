import { ReactNode } from 'react';
import ThemeRegistry from './ThemeRegistry';
import { Analytics } from "@vercel/analytics/react"

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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              var match = function(r){
                var m = (r && r.message) || r;
                return typeof m === 'string' && (
                  m.indexOf('localStorage.getItem is not a function') !== -1 ||
                  m.indexOf('Talisman extension has not been configured') !== -1
                );
              };
              window.addEventListener('unhandledrejection', function(e){
                if (match(e.reason)) { e.preventDefault(); e.stopImmediatePropagation && e.stopImmediatePropagation(); }
              }, true);
              window.addEventListener('error', function(e){
                if (match(e.error || e.message)) { e.preventDefault(); e.stopImmediatePropagation && e.stopImmediatePropagation(); }
              }, true);
            })();`,
          }}
        />
      </head>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
        <Analytics/>
      </body>
    </html>
  );
}