
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "@/components/Helmet";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Gruzchiki from "./pages/Gruzchiki";
import MasterNaChas from "./pages/MasterNaChas";
import Raznorabochie from "./pages/Raznorabochie";
import Vakansii from "./pages/Vakansii";
import Pricing from "./pages/Pricing";
import Contacts from "./pages/Contacts";
import Zabory from "./pages/Zabory";
import Elektrik from "./pages/Elektrik";
import Santehnik from "./pages/Santehnik"
import Banya from "./pages/Banya";
import StroitelnayaKompaniya from "./pages/StroitelnayaKompaniya";
import StroitelstvoDomov from "./pages/StroitelstvoDomov";
import Fundamenty from "./pages/Fundamenty";
import PechiKaminy from "./pages/PechiKaminy";
import PlastikovyeOkna from "./pages/PlastikovyeOkna";
import RusskayaPech from "./pages/RusskayaPech";
import NotFound from "./pages/NotFound";
import { CookieBanner } from "./components/CookieBanner"

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
            <Route path="/raznorabochie" element={<Raznorabochie />} />
            <Route path="/vakansii" element={<Vakansii />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/zabory" element={<Zabory />} />
            <Route path="/elektrik" element={<Elektrik />} />
            <Route path="/santehnik" element={<Santehnik />} />
            <Route path="/banya" element={<Banya />} />
            <Route path="/stroitelnaya-kompaniya" element={<StroitelnayaKompaniya />} />
            <Route path="/stroitelstvo-domov" element={<StroitelstvoDomov />} />
            <Route path="/fundamenty" element={<Fundamenty />} />
            <Route path="/pechi-kaminy" element={<PechiKaminy />} />
            <Route path="/plastikovye-okna" element={<PlastikovyeOkna />} />
            <Route path="/russkaya-pech" element={<RusskayaPech />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;