import { Inter } from 'next/font/google';
import { Nunito } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'The huge World Cup bet',
  description: 'VM-tipset där alla kan vinna!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
