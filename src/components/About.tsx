import { motion } from 'motion/react';
import { ShieldCheck, Award, HeartHandshake, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '10+', label: 'Years Experience', icon: <Award className="h-5 w-5" /> },
    { value: '4.7/5', label: 'Google Rating', icon: <ShieldCheck className="h-5 w-5" /> },
    { value: '5K+', label: 'Happy Customers', icon: <HeartHandshake className="h-5 w-5" /> },
    { value: '30m', label: 'Avg Arrival Time', icon: <Zap className="h-5 w-5" /> }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stats & Bento Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6 order-2 lg:order-1">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-gray p-6 sm:p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center space-y-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-brand-blue bg-blue-50 p-3 rounded-2xl w-12 h-12 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <span className="font-display font-black text-3xl sm:text-4xl text-brand-navy block tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 block leading-tight">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: About Narrative */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
                About Mannan Plumber Work
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy">
                Honest, Professional & Available Round-the-Clock
              </h2>
            </div>

            <div className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                At <span className="font-bold text-brand-navy">Mannan Plumber Work</span>, we have built our reputation in South Delhi on a foundation of extreme responsiveness, complete honesty, and unparalleled workmanship. We understand that plumbing leaks, motor failures, and drainage issues can disrupt your daily peace and even damage your beautiful home structure.
              </p>
              <p>
                Our team consists of highly skilled, certified, and vetted plumbing experts who possess over a decade of hands-on experience in residential and commercial plumbing environments. We take extreme care of your workspace, ensuring we do a thorough diagnostic check, explain the issue transparently, offer fair upfront quotes, and clean up completely post-service.
              </p>
              <p>
                Whether it is a minor dripping tap repair, premium sanitaryware fitting upgrades, or high-pressure underground leak repairs, we handle every single project with identical precision and a rock-solid warranty.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm font-semibold text-slate-700">100% Honest Consultations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm font-semibold text-slate-700">ISI-Certified Premium Materials</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm font-semibold text-slate-700">Service Warranty Included</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm font-semibold text-slate-700">Neat & Clean Post-Job Cleanups</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
