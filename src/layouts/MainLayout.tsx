import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-site">
      <ScrollProgress />
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;
