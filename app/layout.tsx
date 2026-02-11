import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google';
import { Header, Footer } from '@/components/Layout';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
});

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body style={{ 
        margin: 0, 
        padding: 0,
        backgroundColor: '#FFFFFF',
        color: '#5E5E60',
        fontFamily: 'var(--font-dm-sans)',
      }}>
        <Header isTransparent={true} />
        <main style={{ paddingTop: '80px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}