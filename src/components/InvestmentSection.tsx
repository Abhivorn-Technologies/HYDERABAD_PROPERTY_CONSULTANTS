import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Star, MapPin } from "lucide-react";
import investmentBg from "@/assets/investment-bg.jpg";
import mainvideo2 from "@/assets/mainvideo2.mp4";
import { investmentAreas } from "@/data/content";

const InvestmentSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="investment" className="relative section-padding overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <motion.div style={{ y: videoY }} className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={investmentBg}
            className="w-full h-full object-cover scale-110"
          >
            <source src={mainvideo2} type="video/mp4" />
          </video>
        </motion.div>
        <div className="absolute inset-0 bg-primary/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-transparent to-primary/35" />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-widest leading-relaxed">Investment Opportunities</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-3 mb-4 drop-shadow-lg">
            Hyderabad's <span className="text-gradient-gold">Hottest</span> Investment Zones
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto drop-shadow-md font-medium">
            Hyderabad continues to attract investors due to rapid IT growth, world-class infrastructure, and high rental demand.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {investmentAreas.map((area, i) => (
            <motion.div key={area.name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.08 }} className="investment-card p-6 cursor-pointer">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="text-secondary" size={18} />
                <h3 className="font-heading font-semibold text-white">{area.name}</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-white/70">
                  <span>Growth</span>
                  <span className="text-secondary font-bold">{area.growth}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Expected ROI</span>
                  <span className="text-secondary font-bold">{area.roi}</span>
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
