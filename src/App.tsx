import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, Mail, Phone } from 'lucide-react';
import { Logo } from './components/Logo';
import { ContactModalProvider, useContactModal } from './contexts/ContactModalContext';

import Automations from './pages/Automations';
import Bookkeeping from './pages/Bookkeeping';
import Creations from './pages/Creations';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useContactModal();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen font-sans selection:bg-primary/30 flex flex-col">
      <ScrollToTop />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-[var(--border-color)] bg-[var(--bg-color)]/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={closeMenu}>
              <Logo className="h-14 w-auto drop-shadow-sm" />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-primary' : 'hover:text-primary'}`}>Automations</Link>
              <Link to="/bookkeeping" className={`text-sm font-medium transition-colors ${isActive('/bookkeeping') ? 'text-blue-500' : 'hover:text-blue-500'}`}>Bookkeeping</Link>
              <Link to="/creations" className={`text-sm font-medium transition-colors ${isActive('/creations') ? 'text-purple-500' : 'hover:text-purple-500'}`}>Creations</Link>
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-[var(--card-bg)] transition-colors" aria-label="Toggle theme">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={openModal} className="bg-[var(--color-cta)] hover:brightness-110 text-white px-5 py-2 rounded-md text-sm font-bold transition-colors shadow-sm">
                Get Started
              </button>
            </div>

            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-[var(--card-bg)] transition-colors">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-color)]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'bg-[var(--card-bg)] text-primary' : 'hover:bg-[var(--card-bg)]'}`}>Automations</Link>
              <Link to="/bookkeeping" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/bookkeeping') ? 'bg-[var(--card-bg)] text-blue-500' : 'hover:bg-[var(--card-bg)]'}`}>Bookkeeping</Link>
              <Link to="/creations" onClick={closeMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/creations') ? 'bg-[var(--card-bg)] text-purple-500' : 'hover:bg-[var(--card-bg)]'}`}>Creations</Link>
              <button 
                onClick={() => { closeMenu(); openModal(); }} 
                className="block w-full text-center bg-[var(--color-cta)] text-white px-3 py-2 rounded-md text-base font-bold mt-4"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-color)] py-12 bg-[var(--card-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div className="flex flex-col gap-4">
              <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Logo className="h-12 w-auto opacity-80" />
              </Link>
              <p className="text-sm text-[var(--text-muted)] max-w-xs">
                Financial Clarity, Creative Media & AI Automation. Helping Businesses Scale Efficiently.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 text-sm text-[var(--text-muted)]">
              <h4 className="font-bold text-[var(--text-color)] mb-1">Contact Us</h4>
              <a href="mailto:dave@insyncbookkeeping.co.uk" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} /> dave@insyncbookkeeping.co.uk
              </a>
              <a href="tel:07772649329" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} /> 07772649329
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--text-muted)]">
            <div>
              &copy; {new Date().getFullYear()} InSync. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors" onClick={() => window.scrollTo(0,0)}>Privacy Policy</Link>
              <Link to="/cookies" className="hover:text-primary transition-colors" onClick={() => window.scrollTo(0,0)}>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ContactModalProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Automations />} />
            <Route path="/bookkeeping" element={<Bookkeeping />} />
            <Route path="/creations" element={<Creations />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </Layout>
      </Router>
    </ContactModalProvider>
  );
}