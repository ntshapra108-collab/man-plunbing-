import { ArrowUp, Phone, Mail, MapPin, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Our Process', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const servicesLinks = [
    { name: 'Leak Detection', href: '#services' },
    { name: 'Pipe Repair', href: '#services' },
    { name: 'Bathroom Fittings', href: '#services' },
    { name: 'Kitchen Plumbing', href: '#services' },
    { name: 'Water Tank Installation', href: '#services' },
    { name: 'Tap Repair', href: '#services' },
    { name: 'Drain Cleaning', href: '#services' },
    { name: 'Emergency Plumbing', href: '#services' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-dark text-white pt-16 pb-28 lg:pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-12">
          
          {/* Column 1: Brand Intro */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="bg-brand-blue text-white p-2.5 rounded-xl transition-all duration-300 group-hover:scale-105">
                <Wrench className="h-6 w-6" />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-white block leading-none">
                  MANNAN
                </span>
                <span className="text-[10px] font-semibold text-brand-blue tracking-widest uppercase block mt-1">
                  Plumber Work
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-sans">
              Delhi\'s trusted, premium professional plumbing service. Available 24 hours a day, 7 days a week for immediate doorstep assistance, inspections, and high-fidelity installation.
            </p>
            {/* Quick stats indicators */}
            <div className="flex items-center space-x-4 pt-1">
              <span className="text-xs font-bold text-white bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5">
                ★ 4.7 Rating
              </span>
              <span className="text-xs font-bold text-white bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/5">
                ✓ Open 24 Hours
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-300">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-sans">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-brand-blue transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-300">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-sans">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-brand-blue transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-300">
              Have Questions?
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400 font-sans">
              <li className="flex items-start space-x-3">
                <MapPin className="h-4.5 w-4.5 text-brand-blue shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs">
                  {BUSINESS_INFO.address}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4.5 w-4.5 text-brand-blue shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-brand-blue">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4.5 w-4.5 text-brand-blue shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-brand-blue">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line: Copyright, Privacy, and Scroll To Top */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500 font-sans text-center md:text-left">
            &copy; 2026 Mannan Plumber Work. All rights reserved. Designed by premium web agency.
          </p>
          
          <div className="flex items-center space-x-6 text-xs text-slate-500 font-sans">
            <a href="#about" className="hover:text-brand-blue">Privacy Policy</a>
            <a href="#about" className="hover:text-brand-blue">Terms of Service</a>
            <a href="/sitemap.xml" target="_blank" className="hover:text-brand-blue">Sitemap</a>
            
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="bg-white/5 hover:bg-brand-blue hover:text-white text-slate-400 p-2.5 rounded-xl border border-white/10 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-blue"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
