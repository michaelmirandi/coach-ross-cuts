// First, create a new file called 'fonts.ts' in your project:
// src/fonts.ts
import { Playfair_Display, Libre_Baskerville } from 'next/font/google';

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

