import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Sponsors } from "./components/Sponsors";
import { ScrollToTop } from "./components/ScrollToTop";
import AnotherPage from "./AnotherPage";
import Missionvisionanotherpage from "./Misionvision-another-page"; // Import the new page
import Historyanotherpage from "./History-another-page"; // Import the new page
import Targetmarketsanotherpage from "./Targetmarkets-another-page"; // Import the new page
import Servicesanotherpage from "./Services-another-page";
import Contact from "./Contact"; // Import the new page
import { Cta } from "./components/Cta";
import Aboutanotherpage from "./About-another-page"; // Import the new page
import { Herotwo } from "./components/Herotwo";
import { FAQ } from "./components/FAQ";
import { Testimonials } from "./components/Testimonials";
import { Statistics } from "./components/Statistics";
import { Pricing } from "./components/Pricing";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <Router>
      {/* Main layout wrapper */}
      <div className="flex flex-col min-h-screen">
        {/* Navbar is always displayed */}
        <Navbar />

        {/* Main content area */}
        <div className="flex-grow">
          <Routes>
            {/* Route for the main page */}
            <Route
              path="/"
              element={
                <>      
                  <Hero />
                  <Statistics />
                  <Herotwo />
                  <Testimonials />
                  <Pricing /> 
                
                  <FAQ /> 
                  <Sponsors />  
                  <ScrollToTop />
                </>
              }
            />

            {/* Route for AnotherPage */}
            <Route path="/another" element={<AnotherPage />} />

            {/* Route for Missionvisionanotherpage */}
            <Route path="/missionvision-another" element={<Missionvisionanotherpage />} />

            <Route path="/history-another" element={<Historyanotherpage />} />

            <Route path="/targetmarkets-another" element={<Targetmarketsanotherpage />} />

            <Route path="/services-another" element={<Servicesanotherpage />} />
            <Route path="/about-another" element={<Aboutanotherpage />} />
          
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      
        {/* Footer is always displayed */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

