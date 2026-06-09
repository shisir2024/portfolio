import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import ParticlesBackground from './ParticlesBackground';
import LoadingScreen from './LoadingScreen';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <LoadingScreen isLoading={loading} />
        <CustomCursor />
        <ScrollProgress />
        <ParticlesBackground />

        <div className="relative min-h-screen animated-bg">
          {/* Subtle grid overlay */}
          <div
            className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default Layout;
