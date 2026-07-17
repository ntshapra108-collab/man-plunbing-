import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';

// Dynamic icon resolver component to safely render Lucide icons by string name
function ServiceIcon({ name, className }: { name: string; className?: string }) {
  // Fallback to Wrench if icon is not found
  const IconComponent = (Icons as any)[name] || Icons.Wrench;
  return <IconComponent className={className} />;
}

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
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
            Our Plumbing Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy"
          >
            Premium Solutions For Every Issue
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 font-sans"
          >
            From tiny tap leak fixes to complex high-pressure installations, we deliver 5-star professional craftsmanship right to your doorstep.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white border border-slate-100 p-6 sm:p-7 rounded-2xl shadow-premium shadow-premium-hover flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-5">
                {/* Icon Box */}
                <div className="bg-blue-50 text-brand-blue p-3.5 rounded-2xl w-14 h-14 flex items-center justify-center transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white shrink-0">
                  <ServiceIcon name={service.iconName} className="h-7 w-7" />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-brand-navy group-hover:text-brand-blue transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Action link */}
              <div className="pt-6 mt-4 border-t border-slate-50 flex items-center justify-between text-brand-blue">
                <span className="text-xs font-bold uppercase tracking-wider group-hover:underline">
                  Inquire Now
                </span>
                <Icons.ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-brand-navy-dark text-white rounded-[2rem] p-8 sm:p-12 relative overflow-hidden shadow-xl"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold font-display">
                Need a Custom Plumbing Installation?
              </h3>
              <p className="text-slate-300 max-w-xl text-sm sm:text-base font-sans">
                We design and implement comprehensive plumbing architecture for newly built homes, restaurants, corporate offices, and apartments.
              </p>
            </div>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors duration-300 shadow-lg shrink-0 w-full md:w-auto text-center"
            >
              Get Custom Quotation
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
