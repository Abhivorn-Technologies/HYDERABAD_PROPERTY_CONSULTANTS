import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense, lazy } from "react";

const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));
const BookingModal = lazy(() => import("@/components/BookingModal"));

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-site">
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

