/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Reviews from './components/Reviews';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyMobileFooter from './components/StickyMobileFooter';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Reviews />
        <About />
        <FAQ />
        <Contact />
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* Conversion-optimized sticky bottom footer on mobile */}
      <StickyMobileFooter />
    </div>
  );
}

