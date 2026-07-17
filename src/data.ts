import { ServiceItem, WhyChooseUsItem, ProcessStep, ReviewItem, FAQItem } from './types';

export const BUSINESS_INFO = {
  name: 'Mannan Plumber Work',
  tagline: 'Professional Plumbing Services in New Delhi',
  address: 'T61AB, New Colony, Khirki Extension, Malviya Nagar, New Delhi 110017, India',
  googleRating: 4.7,
  totalReviews: 148,
  workingHours: 'Open 24 Hours (7 Days a Week)',
  phone: '+91 98765 43210', // Standard high-fidelity placeholder
  whatsapp: '+91 98765 43210',
  email: 'info@mannanplumber.in',
  primaryServiceArea: 'Malviya Nagar and nearby South Delhi areas',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.152864223403!2d77.21175657065961!3d28.537060505298912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f3e25bbfbf%3A0x6bbf7811bfbd34f2!2sKhirki%20Extension%2C%20Malviya%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1784260000000!5m2!1sen!2sin'
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'leak-detection',
    name: 'Leak Detection',
    description: 'Advanced non-invasive technology to accurately locate hidden wall leaks and underground pipe leaks without damage.',
    iconName: 'Search'
  },
  {
    id: 'pipe-repair',
    name: 'Pipe Repair',
    description: 'Fast, durable repair and replacement of damaged, rusted, or burst copper, CPVC, and GI pipelines.',
    iconName: 'Wrench'
  },
  {
    id: 'bathroom-fittings',
    name: 'Bathroom Fittings',
    description: 'Expert installation of premium vanity basins, showers, stylish wall-hung commodes, and sanitaryware.',
    iconName: 'Bath'
  },
  {
    id: 'kitchen-plumbing',
    name: 'Kitchen Plumbing',
    description: 'Comprehensive installation of kitchen sinks, waste crushers, dishwashers, water purifiers, and pipeline configurations.',
    iconName: 'ChefHat'
  },
  {
    id: 'water-tank-installation',
    name: 'Water Tank Installation',
    description: 'Installation and multi-layer insulation of highly durable overhead and underground water storage tanks.',
    iconName: 'Database'
  },
  {
    id: 'tap-repair',
    name: 'Tap Repair & Install',
    description: 'Fixing dripping taps, mixers, sensor faucets, and installing new premium designer bathroom fittings.',
    iconName: 'Droplet'
  },
  {
    id: 'drain-cleaning',
    name: 'Drain Cleaning',
    description: 'High-pressure jetting and professional motorized drain cleaning to clear severe blockages in kitchen and toilet lines.',
    iconName: 'FlameKindling'
  },
  {
    id: 'emergency-plumbing',
    name: 'Emergency Plumbing',
    description: 'Available 24/7 for urgent pipe bursts, heavy water overflow, blockage emergencies, and fast response dispatch.',
    iconName: 'AlertTriangle'
  },
  {
    id: 'water-motor-installation',
    name: 'Water Motor Installation',
    description: 'Expert setting and wiring of domestic water motors, pressure pumps, and automated tank sensors.',
    iconName: 'Cpu'
  },
  {
    id: 'toilet-repair',
    name: 'Toilet Repair',
    description: 'Solving flush valve issues, siphon repairs, premium sanitary fittings, and leakage resolution.',
    iconName: 'Settings'
  },
  {
    id: 'commercial-plumbing',
    name: 'Commercial Plumbing',
    description: 'Heavy-duty piping, continuous maintenance, drainage management, and repairs for restaurants, shops, and offices.',
    iconName: 'Building'
  },
  {
    id: 'residential-plumbing',
    name: 'Residential Plumbing',
    description: 'Full-spectrum household plumbing services, routine checkups, pressure testing, and multi-flat pipe management.',
    iconName: 'Home'
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'professional-team',
    title: 'Professional Team',
    description: 'Fully trained, polite, and background-checked technicians committed to clean and professional workmanship.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'availability',
    title: '24/7 Availability',
    description: 'Plumbing issues don\'t wait, and neither do we. Our expert team is available 24/7, including weekends & holidays.',
    iconName: 'Clock'
  },
  {
    id: 'pricing',
    title: 'Affordable Pricing',
    description: 'No hidden fees. We provide transparent upfront quotes after diagnostic checks, ensuring fair and competitive rates.',
    iconName: 'CirclePercent'
  },
  {
    id: 'fast-arrival',
    title: 'Fast Arrival',
    description: 'Strategically located in Malviya Nagar to ensure a rapid arrival within 20 to 45 minutes for emergency situations.',
    iconName: 'Zap'
  },
  {
    id: 'materials',
    title: 'Quality Materials',
    description: 'We use only top-tier, ISI-marked piping, connectors, adhesives, and genuine premium brand accessories for durability.',
    iconName: 'Award'
  },
  {
    id: 'satisfaction',
    title: 'Customer Satisfaction',
    description: 'We are proud of our 4.7/5 Google Rating. We clean up fully after ourselves and ensure you are 100% happy before we leave.',
    iconName: 'Heart'
  },
  {
    id: 'technicians',
    title: 'Experienced Technicians',
    description: 'Over a decade of hands-on experience solving complex plumbing, structural drainage, and pressurized system issues.',
    iconName: 'Users'
  },
  {
    id: 'warranty',
    title: 'Warranty on Work',
    description: 'Our repair and installation jobs come with a service warranty for your complete peace of mind and long-term security.',
    iconName: 'ClipboardCheck'
  }
];

export const PROCESS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Call Us',
    description: 'Contact our 24/7 helpdesk. Explain your plumbing requirement or emergency and our team will schedule an instant visit.'
  },
  {
    stepNumber: 2,
    title: 'Inspection',
    description: 'Our plumbing expert arrives quickly at your premises, inspects the issue thoroughly, and provides a clear upfront quote.'
  },
  {
    stepNumber: 3,
    title: 'Repair',
    description: 'With your approval, we commence the work immediately using premium tools and high-quality genuine replacement materials.'
  },
  {
    stepNumber: 4,
    title: 'Testing',
    description: 'We run multiple pressure and flow checks to guarantee the issue is 100% resolved and verify robust pipeline performance.'
  },
  {
    stepNumber: 5,
    title: 'Satisfaction',
    description: 'We perform a complete post-job cleanup. You review the final work, and enjoy peace of mind with our service warranty.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'review-1',
    author: 'Verified Customer',
    role: 'Homeowner',
    rating: 5,
    text: 'Outstanding plumbing service! I had a major pipe burst in my bathroom at midnight. Mannan Plumber Work arrived within 30 minutes of calling. They fixed it efficiently, cleaned the entire area, and charged a very fair price for emergency services. Extremely professional!',
    date: '1 week ago'
  },
  {
    id: 'review-2',
    author: 'Verified Customer',
    role: 'Restaurant Owner',
    rating: 5,
    text: 'We had a blocked kitchen line in our Malviya Nagar restaurant during our busy Sunday dinner service. The team was incredibly fast. They cleared the kitchen drain block in no time using heavy-duty spring machines. Truly a lifesaver for business owners!',
    date: '3 weeks ago'
  },
  {
    id: 'review-3',
    author: 'Verified Customer',
    role: 'Apartment Manager',
    rating: 5,
    text: 'I hired them for a complete sanitaryware upgrade and water tank installation for our entire building. The alignment is perfect, they used top-quality Astral CPVC pipes, and their pricing was very competitive. Best plumbers in South Delhi!',
    date: '1 month ago'
  },
  {
    id: 'review-4',
    author: 'Verified Customer',
    role: 'Office Administrator',
    rating: 4,
    text: 'Excellent tap repairs and water motor sensor setup done at our office. They were on time, worked with great focus, and explained everything nicely. Will definitely hire them for regular maintenance.',
    date: '2 months ago'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How quickly can you arrive for a plumbing emergency in Malviya Nagar?',
    answer: 'We provide prompt, round-the-clock emergency plumbing assistance. Our technicians typically arrive at your doorstep within 20 to 45 minutes in Malviya Nagar and neighboring South Delhi localities.'
  },
  {
    id: 'faq-2',
    question: 'Are your services really available 24 hours a day?',
    answer: 'Yes! Plumbing disasters can happen at any time. We are fully operational 24 hours a day, 7 days a week, including weekends and national holidays. There is always a skilled plumber ready to take your call.'
  },
  {
    id: 'faq-3',
    question: 'Do you charge a visit fee, and how do you price your work?',
    answer: 'We believe in full transparency. Our specialist visits your site, diagnoses the problem, and presents a clear, upfront quote before starting any work. No hidden charges or unexpected bills!'
  },
  {
    id: 'faq-4',
    question: 'Do you provide a service warranty or guarantee on your work?',
    answer: 'Yes, absolutely. We offer a standard service warranty on our repairs and installations. If a problem persists, we will return and fix it to make sure you are 100% satisfied.'
  },
  {
    id: 'faq-5',
    question: 'What types of pipes and plumbing materials do you use?',
    answer: 'We prioritize longevity, which is why we only utilize premium, certified ISI-standard materials from top industry-leading brands (such as Astral, Ashirvad, and Supreme) for CPVC, UPVC, or GI pipes.'
  },
  {
    id: 'faq-6',
    question: 'Can you handle water motor and automatic pump controller installations?',
    answer: 'Yes, we specialize in domestic water motor installations, monoblock pump repairs, booster pumps, automatic water level sensors, and controller switch setups.'
  },
  {
    id: 'faq-7',
    question: 'What immediate steps should I take if a pipe burst occurs?',
    answer: 'First, don\'t panic. Immediately locate and turn off the main water shut-off valve—usually situated near your water meter or water storage tank inlet. This stops water flow and limits structural damage. Then, call us immediately.'
  },
  {
    id: 'faq-8',
    question: 'How do you find water leaks hidden inside walls?',
    answer: 'We employ advanced, non-destructive leak tracing tools and thermal checking guidelines. This allows us to locate pinhole pipe leaks behind tiles and concrete without tear-downs.'
  },
  {
    id: 'faq-9',
    question: 'Do you provide plumbing contracts for commercial projects?',
    answer: 'Yes, we cater to retail outlets, offices, schools, clinics, and restaurants. We offer on-call repair services as well as customizable preventative maintenance packages.'
  },
  {
    id: 'faq-10',
    question: 'Why is water pressure suddenly very low in my home?',
    answer: 'Sudden low pressure is usually caused by clogged tap aerators, main supply gate valve problems, pipeline scale blockages, or an airlock inside overhead tanks. We can trace and fix this issue rapidly.'
  }
];
