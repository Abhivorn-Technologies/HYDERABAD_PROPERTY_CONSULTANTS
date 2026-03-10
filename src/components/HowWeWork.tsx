import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Understanding Requirement", desc: "We listen to your needs, budget, and preferences." },
  { num: "02", title: "Project Shortlisting", desc: "We curate the best options matching your criteria." },
  { num: "03", title: "Project Explanation", desc: "Detailed insights on builders, amenities, and pricing." },
  { num: "04", title: "Site Visit", desc: "Guided visits to explore projects firsthand." },
  { num: "05", title: "Developer Negotiation", desc: "We negotiate the best deals on your behalf." },
  { num: "06", title: "Booking Support", desc: "Complete documentation and booking assistance." },
];

const HowWeWork = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">How We Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3">
            Simple & <span className="text-gradient-gold">Transparent</span> Process
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative glass-card rounded-2xl p-8 text-center hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full gradient-gold-btn flex items-center justify-center mx-auto mb-5">
                  <span className="text-lg font-bold">{step.num}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
