import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import vid from "../assets/backgroundvi2.mp4"; // Updated to import video.mp4

import "react-responsive-carousel/lib/styles/carousel.min.css";
import logoooo from "../assets/people.png"; // Updated to import logo.jpg

export const Hero = () => {
  return (
    <section
      className="relative w-full grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10"
      data-aos="fade-up" // Animation for scrolling up and down
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-1"
        src={vid}// Replace with the actual path to your video
        autoPlay
        loop
        muted
        data-aos="fade-in" // Animation for video
      ></video>

      <div
        className="text-center lg:text-start space-y-6 relative z-10"
        data-aos="zoom-in" // Animation for text content
      >
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              JPSC
            </span>{" "} 
            <span className="inline bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Group Holdings Inc. 
            </span>{" "}
          </h1>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 bg-black/10 p-2 rounded-lg">
        Building Success Through Expertise.
        </p>
        <p className="text-XL text-muted-foreground md:w-10/12 mx-auto lg:mx-1 bg-black/10 p-2 rounded-lg">
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
        className=" w-full h-auto"
        data-aos="zoom-in" // Animation for logo
      />
    </section>
  );
};
