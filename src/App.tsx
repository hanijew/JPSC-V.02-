import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
{/*import { Features } from "./components/Features"; */}
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
{/*import { HowItWorks } from "./components/HowItWorks";*/}
import { Navbar } from "./components/Navbar";
{/*import { Newsletter } from "./components/Newsletter";*/}
{/*import { Services } from "./components/Services";*/}
import { Sponsors } from "./components/Sponsors";
{/*import { Mission } from "./components/Missionandvision";*/}
import { ScrollToTop } from "./components/ScrollToTop";
import AnotherPage from "./AnotherPage";
import Missionvisionanotherpage from "./Misionvision-another-page"; // Import the new page
import Historyanotherpage from "./History-another-page"; // Import the new page
import Targetmarketsanotherpage from "./Targetmarkets-another-page"; // Import the new page
import Servicesanotherpage from "./Services-another-page";
import Contact from "./Contact"; // Import the new page
import { Cta } from "./components/Cta";

function App() {
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
                  {/* 
                  <Herotwo /> 
                  */}
                  <Sponsors />
                    
                  <About />
                     {/* 
                  <Mission />
                  <HowItWorks />
                  <Features />
                  <Services />*/}
                 
                  <Cta /> {/* 
                  <Testimonials />
                  <Team />
                  <Pricing /> 
                  
                  <Newsletter /> */}
                  {/* 
                  <FAQ /> 
                  */}
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

