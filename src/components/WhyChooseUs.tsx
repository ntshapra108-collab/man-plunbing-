import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

function WhyIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name] || Icons.Award;
  return <IconComponent className={className} />;
}

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-brand-gray/40 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider"
          >
            Why Choose Mannan Plumber Work?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy"
          >
            Built On Honesty, Quality & Trust
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 font-sans"
          >
            We take pride in our honest consultations, high workmanship standards, and rapid response times. Here is what makes us Delhi\'s chosen plumbing service.
          </motion.p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border border-slate-100 p-6 sm:p-7 rounded-2xl shadow-premium shadow-premium-hover relative overflow-hidden"
            >
              {/* Subtle accent vertical strip */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="space-y-4">
                {/* Icon box */}
                <div className="text-brand-blue bg-blue-50/80 p-3 rounded-xl w-12 h-12 flex items-center justify-center shrink-0">
                  <WhyIcon name={item.iconName} className="h-6 w-6" />
                </div>
                
                {/* Description */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
