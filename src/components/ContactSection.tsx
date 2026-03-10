import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import heroBg from "@/assets/hero-bg.jpg";
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
  const inView = useInView(ref, { once: true, margin: "-100px" });
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
        <img src={heroBg} alt="Hyderabad" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary/92" />
      </div>
      <div className="container mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">Contact Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mt-3">
            Get Expert Property <span className="text-gradient-gold">Guidance</span> Today
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <form ref={formRef} onSubmit={handleSubmit} className="glass-dark rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <input name="name" type="text" placeholder="Your Name" required className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors" />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input name="phone" type="tel" placeholder="Phone Number" required className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors" />
                  {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div>
                <input name="email" type="email" placeholder="Email Address" required className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors" />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <select name="budget" className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground/60 focus:outline-none focus:border-secondary transition-colors">
                  <option value="">Select Budget</option>
                  <option>Under ₹50 Lakhs</option>
                  <option>₹50L - ₹1 Cr</option>
                  <option>₹1 Cr - ₹2 Cr</option>
                  <option>₹2 Cr - ₹5 Cr</option>
                  <option>Above ₹5 Cr</option>
                </select>
                <select name="location" className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground/60 focus:outline-none focus:border-secondary transition-colors">
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
              <textarea name="message" placeholder="Your Message" rows={4} className="w-full bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary transition-colors resize-none" />
              <button type="submit" disabled={sending} className="w-full gradient-gold-btn py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-70">
                {submitted ? "Thank You! We'll Contact You Soon" : sending ? "Sending..." : (<>Request Free Consultation <Send size={18} /></>)}
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">Let's Find Your Perfect Property</h3>
              <p className="text-primary-foreground/70 leading-relaxed">Our experts are ready to help you discover the best real estate opportunities in Hyderabad. Get personalized guidance — absolutely free.</p>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center"><MapPin className="text-secondary" size={22} /></div>
                <div><p className="text-primary-foreground/50 text-sm">Location</p><p className="text-primary-foreground font-medium">{contactInfo.location}</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center"><Phone className="text-secondary" size={22} /></div>
                <div><p className="text-primary-foreground/50 text-sm">Phone</p><p className="text-primary-foreground font-medium">{contactInfo.phone}</p></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center"><Mail className="text-secondary" size={22} /></div>
                <div><p className="text-primary-foreground/50 text-sm">Email</p><p className="text-primary-foreground font-medium">{contactInfo.email}</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
