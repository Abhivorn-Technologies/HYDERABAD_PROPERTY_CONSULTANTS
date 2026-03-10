import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, BookOpen, MapPin, Users, TrendingUp, Shield } from "lucide-react";

const services = [
  { icon: MessageSquare, title: "Property Consultation", desc: "We understand your requirements and recommend the best properties based on budget, location, and goals." },
  { icon: BookOpen, title: "Project Knowledge & Guidance", desc: "Complete information about builder reputation, construction quality, amenities, pricing, and future growth." },
  { icon: MapPin, title: "Site Visit Assistance", desc: "We arrange guided site visits so you can explore projects and evaluate options before making decisions." },
  { icon: Users, title: "Developer Coordination", desc: "We act as a bridge between buyers and developers, helping with negotiations, booking, and documentation." },
  { icon: TrendingUp, title: "Investment Advisory", desc: "We help investors identify high-growth areas and future hotspots in Hyderabad for maximum ROI." },
  { icon: Shield, title: "End-to-End Buying Support", desc: "From property selection to final booking, our team ensures a smooth and hassle-free buying experience." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-primary relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsla(43,56%,52%,0.08)_0%,transparent_60%)]" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mt-3">
            Complete Real Estate <span className="text-gradient-gold">Guidance</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-dark rounded-2xl p-8 hover:bg-secondary/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="text-secondary" size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-primary-foreground/60 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
