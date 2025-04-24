import { Button } from "./ui/button";
import { useState } from "react";

import vid from "../assets/landscape.mp4"; // First video
import vid2 from "../assets/landscape2.mp4"; // Second video
import vid3 from "../assets/landscape3.mp4"; // Third video
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logoooo from "../assets/people.png"; // Updated to import logo.jpg

export const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(vid); // State to manage the current video

  const handleVideoEnd = () => {
    // Cycle through the three videos
    setCurrentVideo((prevVideo) => {
      if (prevVideo === vid) return vid2; // Switch to the second video
      if (prevVideo === vid2) return vid3; // Switch to the third video
      return vid; // Loop back to the first video
    });
  };

  return (
    <section
      className="relative w-full h-screen flex flex-col justify-center items-center text-center space-y-10 py-20 md:py-32"
      data-aos="fade-up"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10" // Lowered z-index to ensure video is behind content
        src={currentVideo} // Dynamically set the video source
        autoPlay
        loop={false} // Disable looping for sequential playback
        muted
        onEnded={handleVideoEnd} // Handle video end to toggle videos
        data-aos="fade-in"
      ></video>

      <div
        className="relative z-10 space-y-6" // Ensures content is above the video
        data-aos="zoom-in"
      >
        <main className="text-4xl md:text-5xl font-bold text-yellow-500 bg-black/50 p-4 rounded-lg">
          <h1>
            <span className="block">JPSC</span>
            <span className="block">Group Holdings Inc.</span>
          </h1>
        </main>
        <p className="text-lg md:text-xl text-gray-200 bg-black/50 p-4 rounded-lg">
          Welcome to JPSC Group Holdings Inc. <br />
          Building Success Through Expertise.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Button asChild className="w-full md:w-auto">
            <a
              href="/services-another"
              className="px-6 py-3 bg-primary text-white rounded-lg w-full md:w-auto text-center"
            >
              Services
            </a>
          </Button>
          <Button asChild className="w-full md:w-auto">
            <a
              href="/Contact"
              className="px-6 py-3 border border-white text-white rounded-lg w-full md:w-auto text-center"
            >
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
