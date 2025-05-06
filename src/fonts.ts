import { Cookie, Lato } from 'next/font/google';

export const cookie = Cookie({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

export const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
});