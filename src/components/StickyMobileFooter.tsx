import { Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function StickyMobileFooter() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-100 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] flex gap-3 animate-fade-in">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 active:bg-emerald-700 shadow-md transition-colors"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageSquare className="h-4.5 w-4.5" />
        <span>WhatsApp</span>
      </a>

      {/* Call Now Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex-1 flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-brand-blue active:bg-brand-blue-hover shadow-md transition-colors animate-pulse"
        aria-label="Call Mannan Plumber Work Now"
      >
        <Phone className="h-4.5 w-4.5" />
        <span>Call Now</span>
      </a>
    </div>
  );
}
