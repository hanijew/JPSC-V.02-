import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import logoooo from "../assets/home-hero.png.webp"; // Updated to import logo.jpg

export const Hero = () => {
  return (
    <section
      className="w-full grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 
      "
      data-aos="fade-up"
    >
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              JPSC
            </span>{" "}
            Group Holdings Inc.
          </h1>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Building Success Through Expertise.
        </p>
        <p className="text-XL text-muted-foreground md:w-10/12 mx-auto lg:mx-1 ">
          Welcome to JPSC Group Holdings Inc.
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
      <img
        src={logoooo}
        alt="Company Logo"
        className="jpsc-logo  "
        data-aos="zoom-in"
      />
    </section>
  );
};
