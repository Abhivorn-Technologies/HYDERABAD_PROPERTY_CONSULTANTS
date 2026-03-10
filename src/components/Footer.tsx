import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-secondary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logo} alt="Hyderabad Property Consultants" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your trusted real estate advisory partner in Hyderabad. We help you make the right property decisions with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {["Property Consultation", "Investment Advisory", "Site Visits", "Buyer Support", "Developer Coordination"].map((s) => (
                <li key={s}>
                  <span className="text-primary-foreground/60 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-lg mb-5">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-secondary mt-0.5" size={16} />
                <span className="text-primary-foreground/60 text-sm">Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-secondary" size={16} />
                <span className="text-primary-foreground/60 text-sm">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-secondary" size={16} />
                <span className="text-primary-foreground/60 text-sm">info@hyderabadpropertyconsultants.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Hyderabad Property Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
