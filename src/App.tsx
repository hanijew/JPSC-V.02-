import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { About } from "./components/About";
{/*import { Cta } from "./components/Cta";*/}
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
{/*import { Pricing } from "./components/Pricing";*/}
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
{/*import { Team } from "./components/Team";*/}
{/*import { Testimonials } from "./components/Testimonials";*/}
{/*import {Vision} from "./components/Vision";*/}
import { Mission } from "./components/Missionandvision";
{/*import { Herotwo } from "./components/Herotwo";*/}


function App() {
  return (
    
    <Router>
      <Navbar />
      <Hero />
      {/* 
      <Herotwo />*/} 
      <Sponsors />
      <About />
      <Mission />
      <HowItWorks />
      <Features />
      <Services />
       {/*
      <Cta />
      <Testimonials />
      <Team />
      <Pricing /> */}
      <Newsletter />
      {/* 
      <FAQ />*/}
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
