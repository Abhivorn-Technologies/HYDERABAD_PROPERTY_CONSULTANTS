import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="text-card" size={28} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
