import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1'); // Default open first item

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-brand-gray/40 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-sans">
            Find quick answers to common plumbing questions, emergency troubleshooting tips, and our servicing guidelines.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border rounded-2xl transition-all duration-300 ${
                  isOpen ? 'border-brand-blue shadow-md' : 'border-slate-100 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3.5">
                    <HelpCircle className={`h-5 w-5 shrink-0 transition-colors ${
                      isOpen ? 'text-brand-blue' : 'text-slate-400'
                    }`} />
                    <span className="font-display font-bold text-base sm:text-lg text-brand-navy leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg transition-colors ${
                    isOpen ? 'bg-blue-50 text-brand-blue' : 'bg-slate-50 text-slate-400'
                  }`}>
                    {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-500 leading-relaxed border-t border-slate-50 pl-[48px] font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
