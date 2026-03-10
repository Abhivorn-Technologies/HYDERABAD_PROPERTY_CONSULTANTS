import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img src={heroBg} alt="Hyderabad" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary/92" />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mt-3">
            Get Expert Property <span className="text-gradient-gold">Guidance</span> Today
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-dark rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors"
              />
              <div className="grid sm:grid-cols-2 gap-5">
                <select
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground/60 focus:outline-none focus:border-secondary transition-colors"
                >
                  <option value="">Select Budget</option>
                  <option>Under ₹50 Lakhs</option>
                  <option>₹50L - ₹1 Cr</option>
                  <option>₹1 Cr - ₹2 Cr</option>
                  <option>₹2 Cr - ₹5 Cr</option>
                  <option>Above ₹5 Cr</option>
                </select>
                <select
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground/60 focus:outline-none focus:border-secondary transition-colors"
                >
                  <option value="">Preferred Location</option>
                  <option>Financial District</option>
                  <option>Kokapet</option>
                  <option>Tellapur</option>
                  <option>Narsingi</option>
                  <option>Shamshabad</option>
                  <option>Kollur</option>
                  <option>Other</option>
                </select>
              </div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full gradient-gold-btn py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                {submitted ? "Thank You! We'll Contact You Soon" : (
                  <>Request Free Consultation <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
                Let's Find Your Perfect Property
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                Our experts are ready to help you discover the best real estate opportunities in Hyderabad.
                Get personalized guidance — absolutely free.
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <MapPin className="text-secondary" size={22} />
                </div>
                <div>
                  <p className="text-primary-foreground/50 text-sm">Location</p>
                  <p className="text-primary-foreground font-medium">Hyderabad, Telangana</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Phone className="text-secondary" size={22} />
                </div>
                <div>
                  <p className="text-primary-foreground/50 text-sm">Phone</p>
                  <p className="text-primary-foreground font-medium">+91 XXXXX XXXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Mail className="text-secondary" size={22} />
                </div>
                <div>
                  <p className="text-primary-foreground/50 text-sm">Email</p>
                  <p className="text-primary-foreground font-medium">info@hyderabadpropertyconsultants.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
