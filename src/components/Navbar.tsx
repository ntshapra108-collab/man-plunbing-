import { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Our Process', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-md py-3' : 'bg-white/90 py-5 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group focus:outline-none">
            <div className="bg-brand-blue text-white p-2.5 rounded-xl transition-all duration-300 group-hover:scale-105">
              <Wrench className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <span className="font-display text-xl font-bold tracking-tight text-brand-navy block leading-none">
                MANNAN
              </span>
              <span className="text-[10px] font-semibold text-brand-blue tracking-widest uppercase block mt-1">
                Plumber Work
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Nav CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-colors duration-200"
              aria-label="Contact us on WhatsApp"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover transition-all duration-200 shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-100"
              aria-label="Call Mannan Plumber Work Now"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Hamburger Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex sm:hidden items-center justify-center p-2 rounded-xl text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors"
              aria-label="Call Now"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-brand-navy hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <div
        className={`fixed inset-0 top-[65px] bg-white z-40 lg:hidden transform transition-transform duration-300 ease-in-out border-t border-slate-100 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-4 py-6 space-y-3 h-full overflow-y-auto bg-brand-gray/30">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3">
            Navigation Menu
          </p>
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-brand-navy hover:bg-brand-blue/5 hover:text-brand-blue transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 space-y-3 px-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Immediate Assistance
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center space-x-3 w-full py-4 rounded-xl text-base font-bold text-white bg-brand-blue hover:bg-brand-blue-hover shadow-lg shadow-blue-500/15"
            >
              <Phone className="h-5 w-5 animate-pulse" />
              <span>Call Us: {BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full py-4 rounded-xl text-base font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
