import './globals.css';

export const metadata = {
  title: 'The huge World Cup bet',
  description: 'VM-tipset där alla kan vinna!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  );
}
