import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Star, MapPin } from "lucide-react";
import investmentBg from "@/assets/investment-bg.jpg";
import { investmentAreas } from "@/data/content";

const InvestmentSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="investment" className="relative section-padding overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={investmentBg} alt="Hyderabad at night" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">Investment Opportunities</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mt-3 mb-4">
            Hyderabad's <span className="text-gradient-gold">Hottest</span> Investment Zones
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Hyderabad continues to attract investors due to rapid IT growth, world-class infrastructure, and high rental demand.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {investmentAreas.map((area, i) => (
            <motion.div key={area.name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }} className="glass-dark rounded-2xl p-6 hover:bg-secondary/10 transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="text-secondary" size={18} />
                <h3 className="font-heading font-semibold text-primary-foreground">{area.name}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-primary-foreground/70">
                  <span>Growth</span>
                  <span className="text-secondary font-medium">{area.growth}</span>
                </div>
                <div className="flex justify-between text-primary-foreground/70">
                  <span>Expected ROI</span>
                  <span className="text-secondary font-medium">{area.roi}</span>
                </div>
                <div className="flex items-center gap-1 pt-1">
                  {Array.from({ length: area.rating }).map((_, j) => (
                    <Star key={j} className="text-secondary fill-secondary" size={14} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
