import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import vid2 from "@/assets/vid2.mp4";
import { heroContent } from "@/data/content";


const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <motion.div 
        style={{ y: videoY, scale: videoScale, opacity }} 
        className="absolute inset-0 bg-primary"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroBg}
          className="w-full h-full object-cover will-change-transform"
        >
          <source src={vid2} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/35 via-transparent to-primary/45" />
      </motion.div>


      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl pt-28 md:pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-secondary/40 text-secondary text-sm font-medium tracking-wider uppercase">
            {heroContent.badge}
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.2 }} 
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-2xl"
        >
          {heroContent.heading}{" "}
          <span className="text-gradient-gold">{heroContent.highlight}</span>
          <br className="hidden sm:block" />
          <span className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-light italic text-white/90 block sm:inline mt-2 sm:mt-0">
            {heroContent.subheading}
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md">
          {heroContent.description}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/projects" className="gradient-gold-btn px-8 py-4 rounded-lg text-lg">
            {heroContent.ctaPrimary}
          </Link>
          <Link to="/contact" className="site-button-outline px-8 py-4 rounded-lg text-lg font-semibold">
            {heroContent.ctaSecondary}
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 bg-secondary rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
