import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';
import { Orbitron, Roboto_Mono } from 'next/font/google';

// Load Google Fonts
const orbitron = Orbitron({ subsets: ['latin'], weight: ['500','700'] });
const robotoMono = Roboto_Mono({ subsets: ['latin'], weight: ['400','500'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} ${robotoMono.className}`}>
        <div className="page-container">
          <Navbar />
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
