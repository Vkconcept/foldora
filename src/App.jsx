import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import FoldoraHero from "./components/FoldoraHero";
import FoldoraServices from "./components/FoldoraServices";
import FoldoraHowItWorks from "./components/FoldoraHowItWorks";
import FoldoraPricing from "./components/FoldoraPricing";
import FoldoraWhyUs from "./components/FoldoraWhyUs";
import FoldoraFAQ from "./components/FoldoraFAQ";
import FoldoraCTA from "./components/FoldoraCTA";
import FoldoraFooter from "./components/FoldoraFooter";
import About from "./pages/About";
import Services from "./pages/Services";
import FoldoraPricingPage from "./pages/Pricing";
import laundryRoom from "./assets/foldora-room.jpg";
import Booking from "./pages/Booking";
function Home() {
  return (
    <>
      <Navbar />
      <FoldoraHero />
      <FoldoraServices />
      <FoldoraHowItWorks />
      <FoldoraPricing />
      <FoldoraWhyUs image={laundryRoom} />
      <FoldoraFAQ />
      <FoldoraCTA />
      <FoldoraFooter />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<FoldoraPricingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/book-pickup" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;