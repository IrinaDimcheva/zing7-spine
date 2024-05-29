import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import './globals.css';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const sfPro = localFont({
  src: [
    {
      path: './sf-pro/SFPRODISPLAYMEDIUM.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './sf-pro/SF-Pro-Display-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './sf-pro/SFPRODISPLAYBOLD.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Spine App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} text-natural-black leading-[140%]`}
      >
        {children}
      </body>
    </html>
  );
}
