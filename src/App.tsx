import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy } from "react";
import MainLayout from "@/layouts/MainLayout";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const InvestmentPage = lazy(() => import("./pages/InvestmentPage"));
const ProcessPage = lazy(() => import("./pages/ProcessPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const WhyUsPage = lazy(() => import("./pages/WhyUsPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/investment" element={<InvestmentPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/why-us" element={<WhyUsPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
