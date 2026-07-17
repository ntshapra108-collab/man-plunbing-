import { motion } from 'motion/react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-brand-gray/40 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Rating Scorecard */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
                Google Reviews
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy">
                What Our Customers Say
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-sans">
                We are committed to delivering honest consultations, fair quotes, and top-tier workmanship. Read reviews from our happy residential and commercial clients.
              </p>
            </div>

            {/* Scorecard block */}
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-premium max-w-sm mx-auto lg:mx-0">
              <div className="space-y-4">
                <div className="flex justify-center lg:justify-start items-center space-x-3">
                  <span className="text-4xl sm:text-5xl font-black font-display text-brand-navy leading-none">
                    {BUSINESS_INFO.googleRating}
                  </span>
                  <div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 sm:h-5 w-4 sm:w-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 font-semibold mt-1 block">
                      Out of 5 Stars
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-700">Verified Reviews</span>
                  <span className="text-sm font-bold text-brand-blue">{BUSINESS_INFO.totalReviews}+ Total</span>
                </div>

                <div className="flex items-center space-x-2.5 text-xs text-slate-500 font-semibold bg-blue-50/50 p-2.5 rounded-xl border border-blue-50">
                  <CheckCircle className="h-4.5 w-4.5 text-brand-blue shrink-0" />
                  <span>100% genuine, local customer reviews.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Review Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-100/80 p-6 sm:p-8 rounded-3xl shadow-premium flex flex-col justify-between relative overflow-hidden"
              >
                {/* Quote Icon watermark */}
                <div className="absolute top-4 right-6 text-slate-50 opacity-[0.06] -z-10">
                  <Quote className="h-20 w-20 transform rotate-180" />
                </div>

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4.5 w-4.5 ${
                          i < Math.floor(review.rating) ? 'fill-current' : 'text-slate-200'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic font-sans">
                    "{review.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                  <div>
                    <h4 className="font-display font-extrabold text-sm sm:text-base text-brand-navy">
                      {review.author}
                    </h4>
                    <p className="text-xs text-brand-blue font-semibold mt-0.5 uppercase tracking-wide">
                      {review.role}
                    </p>
                  </div>
                  <span className="text-xs text-slate-400 font-semibold">
                    {review.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
