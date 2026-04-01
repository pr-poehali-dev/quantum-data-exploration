
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Gruzchiki from "./pages/Gruzchiki";
import MasterNaChas from "./pages/MasterNaChas";
import MuzhNaChas from "./pages/MuzhNaChas";
import Raznorabochie from "./pages/Raznorabochie";
import Vakansii from "./pages/Vakansii";
import Pricing from "./pages/Pricing";
import SborkaMebeli from "./pages/SborkaMebeli";
import Contacts from "./pages/Contacts";
import Plotnik from "./pages/Plotnik";
import Zabory from "./pages/Zabory";
import OtdelkaBani from "./pages/OtdelkaBani";
import NotFound from "./pages/NotFound";
import { CookieBanner } from "./components/CookieBanner";
import { FloatingLeaves } from "./components/FloatingLeaves";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/gruzchiki" element={<Gruzchiki />} />
            <Route path="/master-na-chas" element={<MasterNaChas />} />
            <Route path="/muzh-na-chas" element={<MuzhNaChas />} />
            <Route path="/raznorabochie" element={<Raznorabochie />} />
            <Route path="/vakansii" element={<Vakansii />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/sborka-mebeli" element={<SborkaMebeli />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/plotnik" element={<Plotnik />} />
            <Route path="/zabory" element={<Zabory />} />
            <Route path="/otdelka-bani" element={<OtdelkaBani />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieBanner />
          <FloatingLeaves />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;