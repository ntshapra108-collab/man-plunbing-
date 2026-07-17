import { useState, FormEvent } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Mail, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Leak Detection',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    'Leak Detection',
    'Pipe Repair',
    'Bathroom Fittings',
    'Kitchen Plumbing',
    'Water Tank Installation',
    'Tap Repair',
    'Drain Cleaning',
    'Emergency Plumbing',
    'Water Motor Installation',
    'Toilet Repair',
    'Other Service'
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Create WhatsApp direct messaging link with pre-filled customer query
    const text = `Hi Mannan Plumber Work, my name is ${formData.name}. I need assistance with "${formData.service}". ${formData.message ? `Details: ${formData.message}` : ''} My contact: ${formData.phone}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encodedText}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold uppercase tracking-wider">
            Contact & Location
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-navy">
            Get Help Instantly
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-sans">
            Need an emergency plumber? Or want to schedule an inspection? Contact us or drop a message below for a super-fast reply.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards & Form */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="bg-brand-gray border border-slate-100 p-5 rounded-2xl flex items-start space-x-4 hover:border-brand-blue transition-colors group"
              >
                <div className="bg-blue-50 text-brand-blue p-3 rounded-xl group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-brand-navy text-sm">Call Now (24/7)</h4>
                  <p className="text-sm text-slate-500 mt-1 font-sans">{BUSINESS_INFO.phone}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gray border border-slate-100 p-5 rounded-2xl flex items-start space-x-4 hover:border-emerald-500 transition-colors group"
              >
                <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-brand-navy text-sm">WhatsApp Chat</h4>
                  <p className="text-sm text-slate-500 mt-1 font-sans">{BUSINESS_INFO.whatsapp}</p>
                </div>
              </a>

              <div className="bg-brand-gray border border-slate-100 p-5 rounded-2xl flex items-start space-x-4">
                <div className="bg-blue-50 text-brand-blue p-3 rounded-xl">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-brand-navy text-sm">Working Hours</h4>
                  <p className="text-sm text-slate-500 mt-1 font-sans">{BUSINESS_INFO.workingHours}</p>
                </div>
              </div>

              <div className="bg-brand-gray border border-slate-100 p-5 rounded-2xl flex items-start space-x-4">
                <div className="bg-blue-50 text-brand-blue p-3 rounded-xl">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-brand-navy text-sm">Email Support</h4>
                  <p className="text-sm text-slate-500 mt-1 font-sans">{BUSINESS_INFO.email}</p>
                </div>
              </div>

            </div>

            {/* Inquiry Form Card */}
            <div className="bg-brand-gray/60 border border-slate-100 rounded-3xl p-6 sm:p-8 relative">
              <h3 className="font-display font-extrabold text-xl text-brand-navy mb-6">
                Send An Instant Booking Request
              </h3>
              
              {isSubmitted ? (
                <div className="bg-blue-50 border border-blue-100 text-brand-blue rounded-2xl p-8 text-center flex flex-col items-center justify-center space-y-3">
                  <CheckCircle2 className="h-12 w-12 text-brand-blue animate-bounce" />
                  <h4 className="font-display font-bold text-lg text-brand-navy">Redirecting to WhatsApp...</h4>
                  <p className="text-sm text-slate-500 font-sans max-w-xs">
                    Please hold on while we connect you directly with our plumbing dispatch specialist via WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue font-sans text-brand-navy"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        placeholder="e.g. +91 98765 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue font-sans text-brand-navy"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Service Required
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue font-sans text-brand-navy"
                    >
                      {servicesList.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Brief Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Explain the leak or fitting request..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue font-sans text-brand-navy"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-xl font-bold text-sm sm:text-base transition-colors duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-100 flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Send Request & Chat on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Address and Map Frame */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Banner */}
            <div className="bg-brand-navy text-white p-6 sm:p-8 rounded-3xl border border-brand-navy shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl" />
              <div className="relative z-10 space-y-3">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-brand-blue" />
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                    Our Location
                  </span>
                </div>
                <h4 className="font-display font-extrabold text-lg">Main Office Address</h4>
                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {BUSINESS_INFO.address}
                </p>
                <div className="border-t border-white/10 pt-4 mt-2">
                  <span className="text-xs text-slate-400 font-semibold uppercase block">
                    Primary Service Area
                  </span>
                  <span className="text-sm font-semibold text-white mt-1 block font-sans">
                    {BUSINESS_INFO.primaryServiceArea}
                  </span>
                </div>
              </div>
            </div>

            {/* Google Map Frame */}
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-lg h-[340px] bg-slate-100 relative">
              <iframe
                title="Mannan Plumber Work Location Map"
                src={BUSINESS_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
