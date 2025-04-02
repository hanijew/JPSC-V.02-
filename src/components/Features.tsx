{/*
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; */}
import image1 from "../assets/one.jpg";
import image2 from "../assets/two.jpg";
import image3 from "../assets/three.jpg";
import image4 from "../assets/four.jpg";
import image5 from "../assets/five.jpg";
import image6 from "../assets/six.jpg";
import image7 from "../assets/seven.jpg";
import image8 from "../assets/eight.jpg";
import image9 from "../assets/nine.jpg";
import image10 from "../assets/ten.jpg";
import { useRef } from "react";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Large Corporations",
    description:
      "Established companies with extensive operations that handle user service requests through channels like email, ticketing systems, and phone",
    image: image6,
  },
  {
    title: "Intuitive user interface",
    description:
      "Smaller businesses managing customer requests via email, phone, or simple systems.",
    image: image7,
  },
  {
    title: "AI-Powered insights",
    description:
      "New businesses with agile operations, using modern tools for efficient customer support and rapid growth.",
    image: image8,
  },

  {
    title: "Gov. & Public Sector.",
    description:
      "Government agencies and public institutions providing services to citizens, often managing requests through official channels",
    image: image9,
  },

 

  {
    title: "Private Equity",
    description:
      "Investment firms that acquire and manage companies to increase their value before selling or taking them in public.",
    image: image10,
  },

  {
    title: "E-commerce Companies",
    description:
      "Businesses that sell products or services online, managing customer orders, inquiries, and support through digital platforms.",
    image: image1,
  },
  
  {
    title: "Telecom Companies",
    description:
      "Provide mobile,internet and TV services, handling customer support through multiple channels.",
    image: image2,
  },
  
  {
    title: "Financial Services",
    description:
      "Update the ticket status to reflect  the resolution or service completion",
    image: image3,
  },
  
  {
    title: "Educational Institutions",
    description:
      "Document the troubleshooting steps,solutions and any new knowledge gained during the process.",
    image: image4,
  },

  {
    title: "Real Estate and Property Management Firms",
    description:
      "Analyze trends and patterns in service requests and resolutions to identify recurring issues or areas for process improvement",
    image: image5,
  },


];

{/* const featureList: string[] = [
  "Large Corporations",
  "SMEs",
  "Startups",
  "Gov. & Public Sector",
  "Private Equity",
  "E-commerce Companies ",
  "Telecom Companies",
  "Financial Services",
  "Educational Institutions",
  "Real Estate and Property Management Firms",
]; */}

export const Features = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section id="target" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Target Markets
        </span>
      </h2>

      {/* Horizontal Scrollable Slideshow */}
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full"
        >
          &#8592;
        </button>
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto overflow-y-hidden scrollbar-hide"
        >
          <div className="flex gap-6">
            {features.map(({ title, description, image }: FeatureProps) => (
              <div
                key={title}
                className="min-w-[350px] max-w-[350px] bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
              >
                {/* Image Section */}
                <div className="w-full h-[200px]">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-primary">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};
