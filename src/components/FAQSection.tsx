import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Is your service really free for buyers?", a: "Yes. Our services are completely free because we are official channel partners with developers. We earn our commission from the developers, not from buyers." },
  { q: "How do you select projects?", a: "We recommend only verified projects from trusted developers after proper evaluation of builder reputation, construction quality, legal clearances, and location potential." },
  { q: "Can you help with investment properties?", a: "Absolutely! We specialize in identifying high-growth locations and investment opportunities in Hyderabad. Our team provides detailed ROI analysis and market insights." },
  { q: "Do you arrange site visits?", a: "Yes, we arrange guided site visits for our clients. Our team accompanies you to explain layouts, amenities, and help you make informed comparisons." },
  { q: "What areas in Hyderabad do you cover?", a: "We cover all major areas including Financial District, Kokapet, Tellapur, Narsingi, Shamshabad, Kollur, Patancheru, and more." },
  { q: "How long does the property buying process take?", a: "The timeline varies based on your requirements and readiness. Typically, from consultation to booking, it takes 2-4 weeks. We ensure a smooth and efficient process." },
];

const FAQSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mt-3">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-heading font-semibold text-foreground text-lg pr-4">{faq.q}</span>
                <ChevronDown
                  className={`text-secondary flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  size={22}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-48 pb-6" : "max-h-0"
                }`}
              >
                <p className="px-6 text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
