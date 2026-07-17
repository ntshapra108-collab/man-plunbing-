import { motion } from 'motion/react';
import { Phone, Search, Wrench, CheckSquare, HeartHandshake } from 'lucide-react';
import { PROCESS } from '../data';

export default function Process() {
  const stepIcons = [
    <Phone className="h-6 w-6" />,
    <Search className="h-6 w-6" />,
    <Wrench className="h-6 w-6" />,
    <CheckSquare className="h-6 w-6" />,
    <HeartHandshake className="h-6 w-6" />
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider"
          >
            How We Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy"
          >
            Our Simple 5-Step Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 font-sans"
          >
            We take the guesswork out of plumbing. From the very first phone call to final delivery, here is how we ensure perfect results.
          </motion.p>
        </div>

        {/* Process Roadmap */}
        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative">
            {PROCESS.map((step, index) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative px-2"
              >
                {/* Step indicator bubble */}
                <div className="relative mb-6">
                  <div className="bg-brand-blue text-white w-14 h-14 rounded-full flex items-center justify-center font-display font-black text-lg shadow-lg shadow-blue-500/20 relative z-10 hover:scale-110 transition-transform duration-300">
                    {stepIcons[index]}
                  </div>
                  {/* Step counter badge */}
                  <span className="absolute -top-1 -right-1 bg-brand-navy-dark text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white z-20">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Vertical connecting line for mobile (drawn between steps) */}
                {index < PROCESS.length - 1 && (
                  <div className="lg:hidden absolute top-[70px] bottom-[-40px] left-[50%] -translate-x-[50%] w-0.5 bg-blue-100 -z-10" />
                )}

                {/* Step Card Text */}
                <div className="space-y-2 bg-brand-gray/30 lg:bg-transparent p-6 lg:p-0 rounded-2xl border border-slate-100 lg:border-none w-full max-w-sm lg:max-w-none">
                  <h3 className="font-display font-extrabold text-xl text-brand-navy">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto font-sans">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
