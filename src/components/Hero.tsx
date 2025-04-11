import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import logoooo from "../assets/logo.png"; // Updated to import logo.jpg

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6"  >
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#FFD700] to-[#FFD700] text-transparent bg-clip-text">
              JPSC 
            </span>{" "}
           Group Holdings Inc.
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Welcome to JPSC.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button asChild className="w-full md:w-1/3">
            <a href="/services-another">Services</a>
          </Button>

          <a
            href="/Contact"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Contact US
          </a>
        </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow">
 
      </div>
      <img src ={logoooo} alt="Company Logo" className="jpsc-logo container2 " />

      

      {/* Responsive Carousel 
      <div className="lg:col-span-2 w-full">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={5000}
          showStatus={false}
        >
          <div>
            <img src="/images/slide1.jpg" alt="Slide 1" />
            <p className="legend">Slide 1 Description</p>
          </div>
          <div>
            <img src="/images/slide2.jpg" alt="Slide 2" />
            <p className="legend">Slide 2 Description</p>
          </div>
          <div>
            <img src="/images/slide3.jpg" alt="Slide 3" />
            <p className="legend">Slide 3 Description</p>
          </div>
        </Carousel>
      </div>*/}
    </section>
  );
};
