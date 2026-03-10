import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { projects } from "@/data/content";

const imageMap: Record<string, string> = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
};

const FeaturedProjects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">Featured Projects</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3">
            Discover the Best Projects in <span className="text-gradient-gold">Hyderabad</span>
          </h2>
        </motion.div>

        <div className="overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-6 w-max">
            {projects.map((project, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="w-[320px] md:w-[360px] group site-card rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 flex-shrink-0">
                <div className="relative overflow-hidden h-56">
                  <img src={imageMap[project.image]} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4">
                    <span className="gradient-gold-btn px-3 py-1 rounded-full text-xs font-semibold">{project.type}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">{project.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-bold text-lg">{project.price}</span>
                    <Link to="/contact" className="flex items-center gap-1 text-primary hover:text-secondary transition-colors text-sm font-medium">
                      Enquire <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
