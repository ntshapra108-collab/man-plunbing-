import { motion } from 'motion/react';
import { Phone, CheckCircle2, Star, ShieldAlert } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import heroImage from '../assets/images/hero_plumbing_service_1784262400430.jpg';

export default function Hero() {
  const trustBadges = [
    'Open 24 Hours',
    'Fast 20-45 Mins Response',
    'Experienced Technicians',
    'Transparent Upfront Pricing'
  ];

  return (
    <section
      id="home"
      className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden hero-gradient bg-gradient-to-b from-brand-gray/20 via-white to-white"
    >
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-100/40 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Badges */}
          <div className="lg:col-span-7 space-y-8">
            {/* Live Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100/80"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-blue"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Live & Open 24/7 in Malviya Nagar
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-navy leading-[1.1]"
              >
                Professional Plumbing <br />
                <span className="text-brand-blue">Services in New Delhi</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-slate-600 max-w-xl leading-relaxed font-sans"
              >
                24/7 Emergency Plumbing, Leak Repairs, Premium Bathroom Fittings, Pipe Installation, and Household Water Motor Maintenance. Fast doorstep service within minutes.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none"
            >
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center space-x-3 px-8 py-4.5 rounded-2xl text-base font-bold text-white bg-brand-blue hover:bg-brand-blue-hover transition-all duration-300 shadow-xl shadow-blue-500/15 hover:shadow-blue-500/25 group focus:ring-4 focus:ring-blue-100"
              >
                <Phone className="h-5 w-5 animate-bounce" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center space-x-2 px-8 py-4.5 rounded-2xl text-base font-bold text-slate-700 bg-white hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-sm focus:ring-4 focus:ring-slate-100"
              >
                <span>Get Free Quote</span>
              </a>
            </motion.div>

            {/* Trust Badges Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t border-slate-100"
            >
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center space-x-2.5">
                  <div className="text-brand-blue bg-blue-50 p-1.5 rounded-lg shrink-0">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{badge}</span>
                </div>
              ))}
            </motion.div>

            {/* Ratings Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center space-x-4 pt-1"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <div className="text-sm font-medium text-slate-600">
                <span className="font-bold text-brand-navy">{BUSINESS_INFO.googleRating} / 5</span> Google Rating based on{' '}
                <span className="font-bold text-brand-navy">{BUSINESS_INFO.totalReviews}+ Verified Customer</span> reviews.
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient accent card */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-[2.5rem] blur-2xl opacity-40 -z-10" />

            {/* Main Visual Frame */}
            <div className="relative rounded-[2rem] overflow-hidden border-4 border-white bg-slate-100 shadow-2xl">
              <img
                src={heroImage}
                alt="Expert Plumber Work"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              
              {/* Floating Emergency Badge */}
              <div className="absolute bottom-6 left-6 right-6 glass-nav rounded-2xl p-5 border border-white/50 shadow-lg flex items-center space-x-4">
                <div className="bg-red-500 text-white p-3 rounded-xl shrink-0 animate-pulse">
                  <ShieldAlert className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brand-navy text-sm leading-tight">
                    Emergency Leak / Block?
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Emergency response plumbers active right now in Malviya Nagar.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
