import React from "react";
import {About} from "./components/About";

import { Cta } from "./components/Cta";

const Aboutanotherpage: React.FC = () => {
  return (
    <>
      {/* Include the Navbar */}
     
      <About />
      {/* Page Content */}
      <Cta  />
    
    </>
  );
};

export default Aboutanotherpage;