import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BookingModal from "@/components/BookingModal";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-site">
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppButton />
      <BookingModal />
    </div>
  );
};

export default MainLayout;
