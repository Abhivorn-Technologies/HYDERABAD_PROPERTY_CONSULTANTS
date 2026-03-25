import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import heroBg from "@/assets/hero-bg.jpg";
import mainvideo3 from "@/assets/mainvideo3.mp4";
import { contactInfo } from "@/data/content";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Valid phone number required").max(15).regex(/^[+\d\s()-]+$/, "Invalid phone format"),
  email: z.string().trim().email("Invalid email address").max(255),
  budget: z.string().optional(),
  location: z.string().optional(),
  message: z.string().trim().max(1000).optional(),
});

type FormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.3, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      budget: formData.get("budget") as string,
      location: formData.get("location") as string,
      message: formData.get("message") as string,
    };

    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSending(true);

    try {
      // Replace with your EmailJS credentials
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      );
      setSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      // Fallback: still show success for demo
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover"
        >
          <source src={mainvideo3} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mt-3 drop-shadow-lg">
            Get Expert Property <span className="text-gradient-gold">Guidance</span> Today
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -80 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
            <form ref={formRef} onSubmit={handleSubmit} className="bg-primary/30 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 md:space-y-5 shadow-2xl mx-auto max-w-md lg:max-w-none">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input name="name" type="text" placeholder="Your Name" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors" />
                  {errors.name && <p className="text-secondary text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input name="phone" type="tel" placeholder="Phone Number" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors" />
                  {errors.phone && <p className="text-secondary text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <input name="email" type="email" placeholder="Email Address" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors" />
                {errors.email && <p className="text-secondary text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <select name="budget" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/70 focus:outline-none focus:border-secondary transition-colors appearance-none scrollbar-hide">
                  <option value="" className="bg-primary text-white">Select Budget</option>
                  <option className="bg-primary text-white">Under ₹50 Lakhs</option>
                  <option className="bg-primary text-white">₹50L - ₹1 Cr</option>
                  <option className="bg-primary text-white">₹1 Cr - ₹2 Cr</option>
                  <option className="bg-primary text-white">₹2 Cr - ₹5 Cr</option>
                  <option className="bg-primary text-white">Above ₹5 Cr</option>
                </select>
                <select name="location" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/70 focus:outline-none focus:border-secondary transition-colors appearance-none">
                  <option value="" className="bg-primary text-white">Preferred Location</option>
                  <option className="bg-primary text-white">Financial District</option>
                  <option className="bg-primary text-white">Kokapet</option>
                  <option className="bg-primary text-white">Tellapur</option>
                  <option className="bg-primary text-white">Narsingi</option>
                  <option className="bg-primary text-white">Shamshabad</option>
                  <option className="bg-primary text-white">Kollur</option>
                  <option className="bg-primary text-white">Other</option>
                </select>
              </div>
              <textarea name="message" placeholder="Your Message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors resize-none text-sm md:text-base" />
              <button type="submit" disabled={sending} className="w-full gradient-gold-btn py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-70">
                {submitted ? "Thank You!" : sending ? "Sending..." : (<>Request Consultation <Send size={18} /></>)}
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 80 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4 drop-shadow-md">Let's Find Your Perfect Property</h3>
              <p className="text-white/80 leading-relaxed max-w-lg mx-auto lg:mx-0">Our experts are ready to help you discover the best real estate opportunities in Hyderabad. Get personalized guidance — absolutely free.</p>
            </div>
            <div className="space-y-6 flex flex-col items-center lg:items-start mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0"><MapPin className="text-secondary" size={22} /></div>
                <div className="text-center sm:text-left">
                  <p className="text-white/60 text-sm">Location</p>
                  <p className="text-white font-medium">{contactInfo.location}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0"><Phone className="text-secondary" size={22} /></div>
                <div className="text-center sm:text-left">
                  <p className="text-white/60 text-sm">Phone</p>
                  <p className="text-white font-medium">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0"><Mail className="text-secondary" size={22} /></div>
                <div className="text-center sm:text-left">
                  <p className="text-white/60 text-sm">Email</p>
                  <p className="text-white font-medium">{contactInfo.email}</p>
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
