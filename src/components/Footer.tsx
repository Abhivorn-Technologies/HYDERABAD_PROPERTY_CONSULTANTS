import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { footerQuickLinks, footerServices, contactInfo } from "@/data/content";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-secondary/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Hyderabad Property Consultants" className="h-16 w-auto mb-4" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Your trusted real estate advisory partner in Hyderabad. We help you make the right property decisions with confidence.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((s) => (
                <li key={s}>
                  <span className="text-primary-foreground/60 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground text-lg mb-5">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-secondary mt-0.5" size={16} />
                <span className="text-primary-foreground/60 text-sm">{contactInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-secondary" size={16} />
                <span className="text-primary-foreground/60 text-sm">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-secondary" size={16} />
                <span className="text-primary-foreground/60 text-sm">{contactInfo.email}</span>
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
