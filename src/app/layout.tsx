import './styles/globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import { Metadata } from 'next'; // Add this import
import ScrollToTop from './components/ScrollToTop';
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Terraman Infratech | Leading Infrastructure Solutions',
  description: 'Innovative infrastructure, highway design, and project management services.',
  icons: {
    icon: '/favicon.ico', // This points to public/favicon.ico
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className={inter.className}>
        {/* This creates the thin loading line at the top */}
        <NextTopLoader 
          color="#DDBCBC"       // Matches your brown/gold theme
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}            // Thin and professional
          showSpinner={false}    // Keeps it clean
          easing="ease"
          speed={200}
        />
        <ScrollToTop />
        <Navbar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
