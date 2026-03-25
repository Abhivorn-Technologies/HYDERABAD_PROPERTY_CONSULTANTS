import { MessageSquare, BookOpen, MapPin, Users, TrendingUp, Shield, Check, Eye, Brain, Heart, FileCheck } from "lucide-react";

// ── Hero ──
export const heroContent = {
  badge: "Elevate Your Lifestyle",
  heading: "Find Your Dream Property in",
  highlight: "Hyderabad",
  subheading: "With Expert Guidance",
  description:
    "Your trusted real estate partner helping you discover the best residential projects, villas, and investment opportunities across Hyderabad.",
  ctaPrimary: "Explore Projects",
  ctaSecondary: "Book Free Consultation",
};

// ── About / Stats ──
export const aboutContent = {
  tag: "Who We Are",
  heading: "Trusted Real Estate",
  highlight: "Advisors",
  headingSuffix: "in Hyderabad",
  paragraphs: [
    "At Hyderabad Property Consultants, we bridge the gap between buyers and top real estate developers. Our goal is to simplify the property buying process by offering transparent information, expert guidance, and access to verified projects.",
    'Whether you are buying your first home, upgrading your lifestyle, or investing in real estate, our team ensures you get the best property options suited to your needs. Our services are <strong class="text-foreground">completely free for customers</strong>.',
  ],
};

export const stats = [
  { value: 1000, suffix: "+", label: "Happy Buyers" },
  { value: 50, suffix: "+", label: "Projects" },
  { value: 20, suffix: "+", label: "Developer Partners" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

// ── Services ──
export const services = [
  { icon: MessageSquare, title: "Property Consultation", desc: "We understand your requirements and recommend the best properties based on budget, location, and goals." },
  { icon: BookOpen, title: "Project Knowledge & Guidance", desc: "Complete information about builder reputation, construction quality, amenities, pricing, and future growth." },
  { icon: MapPin, title: "Site Visit Assistance", desc: "We arrange guided site visits so you can explore projects and evaluate options before making decisions." },
  { icon: Users, title: "Developer Coordination", desc: "We act as a bridge between buyers and developers, helping with negotiations, booking, and documentation." },
  { icon: TrendingUp, title: "Investment Advisory", desc: "We help investors identify high-growth areas and future hotspots in Hyderabad for maximum ROI." },
  { icon: Shield, title: "End-to-End Buying Support", desc: "From property selection to final booking, our team ensures a smooth and hassle-free buying experience." },
];

// ── Projects ──
export const projects = [
  { image: "prestige-golden-grove", name: "Prestige Golden Grove", location: "Tellapur", type: "Premium Living", price: "₹1.1 Cr onwards" },
  { image: "rajapushpa-sierra", name: "Rajapushpa Sierra", location: "Tellapur", type: "Luxury Home", price: "₹1.2 Cr onwards" },
  { image: "brigade-gateway", name: "Brigade Gateway", location: "Neopolis", type: "Elite Residency", price: "₹6 Cr onwards" },
  { image: "prestige-clairemont", name: "Prestige Clairemont", location: "Neopolis", type: "Signature Suites", price: "₹3 Cr onwards" },
  { image: "rajapushpa-skyra", name: "Rajapushpa Skyra", location: "Neopolis", type: "Sky-High Luxury", price: "₹3.5 Cr onwards" },
  { image: "lansum-elena", name: "Lansum Elena", location: "Kokapet", type: "Nature-Inspired", price: "₹3 Cr onwards" },
  { image: "lansum-encanto", name: "Lansum Encanto", location: "Puppalaguda", type: "Luxury Living", price: "₹4.5 Cr onwards" },
  { image: "rajapushpa-provincia", name: "Rajapushpa Provincia", location: "Narsingi", type: "Eco-Friendly Homes", price: "₹1.5 Cr onwards" },
];

// ── Why Choose Us ──
export const whyChooseUsPoints = [
  { icon: Check, title: "100% Free Service for Buyers" },
  { icon: Shield, title: "Trusted Channel Partner" },
  { icon: Eye, title: "Verified & Genuine Projects Only" },
  { icon: Brain, title: "Complete Market Knowledge" },
  { icon: Users, title: "Professional Property Advisors" },
  { icon: Heart, title: "Personalized Recommendations" },
  { icon: FileCheck, title: "Transparent & Hassle-Free Process" },
];

// ── Investment Areas ──
export const investmentAreas = [
  { name: "Financial District", growth: "High", roi: "12-15%", rating: 5 },
  { name: "Kokapet", growth: "Very High", roi: "15-20%", rating: 5 },
  { name: "Tellapur", growth: "High", roi: "10-14%", rating: 4 },
  { name: "Narsingi", growth: "High", roi: "12-16%", rating: 4 },
  { name: "Shamshabad", growth: "Moderate", roi: "8-12%", rating: 4 },
  { name: "Shadnagar", growth: "Emerging", roi: "10-15%", rating: 3 },
  { name: "Kollur", growth: "Very High", roi: "14-18%", rating: 5 },
  { name: "Patancheru", growth: "Moderate", roi: "8-12%", rating: 3 },
];

// ── How We Work ──
export const processSteps = [
  { num: "01", title: "Understanding Requirement", desc: "We listen to your needs, budget, and preferences." },
  { num: "02", title: "Project Shortlisting", desc: "We curate the best options matching your criteria." },
  { num: "03", title: "Project Explanation", desc: "Detailed insights on builders, amenities, and pricing." },
  { num: "04", title: "Site Visit", desc: "Guided visits to explore projects firsthand." },
  { num: "05", title: "Developer Negotiation", desc: "We negotiate the best deals on your behalf." },
  { num: "06", title: "Booking Support", desc: "Complete documentation and booking assistance." },
];

// ── Testimonials ──
export const testimonials = [
  { name: "Rajesh Kumar", review: "Hyderabad Property Consultants helped us find the perfect apartment in the Financial District. Their guidance made the process very easy and stress-free.", location: "Financial District" },
  { name: "Anjali Reddy", review: "The team provided detailed project information and arranged site visits. Highly professional service. I'm extremely happy with my new villa.", location: "Kokapet" },
  { name: "Naveen Sharma", review: "They helped us invest in a plot in a fast-growing area. Excellent support and honest advice. Our investment has already appreciated significantly.", location: "Tellapur" },
  { name: "Priya Deshmukh", review: "The entire buying experience was seamless. From shortlisting to booking, their team was with us at every step. Truly the best consultants in Hyderabad.", location: "Narsingi" },
];

// ── FAQ ──
export const faqs = [
  { q: "Is your service really free for buyers?", a: "Yes. Our services are completely free because we are official channel partners with developers. We earn our commission from the developers, not from buyers." },
  { q: "How do you select projects?", a: "We recommend only verified projects from trusted developers after proper evaluation of builder reputation, construction quality, legal clearances, and location potential." },
  { q: "Can you help with investment properties?", a: "Absolutely! We specialize in identifying high-growth locations and investment opportunities in Hyderabad. Our team provides detailed ROI analysis and market insights." },
  { q: "Do you arrange site visits?", a: "Yes, we arrange guided site visits for our clients. Our team accompanies you to explain layouts, amenities, and help you make informed comparisons." },
  { q: "What areas in Hyderabad do you cover?", a: "We cover all major areas including Financial District, Kokapet, Tellapur, Narsingi, Shamshabad, Kollur, Patancheru, and more." },
  { q: "How long does the property buying process take?", a: "The timeline varies based on your requirements and readiness. Typically, from consultation to booking, it takes 2-4 weeks. We ensure a smooth and efficient process." },
];

// ── Contact ──
export const contactInfo = {
  location: "Hyderabad, Telangana",
  phone: "+91 62812 45149",
  email: "ravindra@hyderabadpropertyconsultants.com",
};

// ── Nav ──
export const mainNavLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Investment", href: "/investment" },
];

export const companyDropdownLinks = [
  { label: "About Us", href: "/about" },
  { label: "Leadership", href: "/about#directors" },
  { label: "Why Choose Us", href: "/why-us" },
  { label: "Process", href: "/process" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
];

// ── Footer ──
export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const footerServices = [
  "Property Consultation",
  "Investment Advisory",
  "Site Visits",
  "Buyer Support",
  "Developer Coordination",
];
