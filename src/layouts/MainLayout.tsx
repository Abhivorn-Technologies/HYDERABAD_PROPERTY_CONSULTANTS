import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { Suspense, lazy } from "react";

const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));
const BookingModal = lazy(() => import("@/components/BookingModal"));

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-site">
      <Preloader />
      <Header />
      <Outlet />
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
      <Suspense fallback={null}>
        <BookingModal />
      </Suspense>
    </div>
  );
};

export default MainLayout;

