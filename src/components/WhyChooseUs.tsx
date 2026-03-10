import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Shield, Users, Eye, Brain, Heart, FileCheck } from "lucide-react";

const points = [
  { icon: Check, title: "100% Free Service for Buyers" },
  { icon: Shield, title: "Trusted Channel Partner" },
  { icon: Eye, title: "Verified & Genuine Projects Only" },
  { icon: Brain, title: "Complete Market Knowledge" },
  { icon: Users, title: "Professional Property Advisors" },
  { icon: Heart, title: "Personalized Recommendations" },
  { icon: FileCheck, title: "Transparent & Hassle-Free Process" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-primary relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_hsla(43,56%,52%,0.06)_0%,transparent_50%)]" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mt-3">
            The Smart Way to <span className="text-gradient-gold">Buy Property</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-dark rounded-2xl p-6 text-center hover:bg-secondary/10 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <point.icon className="text-secondary" size={22} />
              </div>
              <h3 className="font-heading font-semibold text-primary-foreground text-lg">{point.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
