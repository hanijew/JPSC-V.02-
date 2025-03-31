import { useState, useEffect } from "react";
import { Button } from "./ui/button";

// Import images
import logoImage from "/src/assets/logo.jpg";
import image3 from "/src/assets/logo.jpg";
import image4 from "/src/assets/logo.jpg";

const Herotwos = [
  {
    title: "Financial Services",
    description:
      "Accelerating queries and transactions to transform data into actionable insights.",
    image: image3,
    buttonText: "Financial Services",
  },
  {
    title: "Product Design",
    description:
      "Empowering designers with tools to create innovative products faster.",
    image: logoImage,
    buttonText: "Product Design",
  },
  {
    title: "HCI and Virtualization",
    description:
      "Optimizing hyper-converged infrastructure for seamless virtualization.",
    image: image3,
    buttonText: "HCI and Virtualization",
  },
  {
    title: "Database and Analytics",
    description:
      "Accelerating queries and transactions to transform data into actionable insights.",
    image: image4,
    buttonText: "Database and Analytics",
  },
  {
    title: "Supercomputing and Research",
    description:
      "Driving breakthroughs in research with high-performance computing.",
    image: image4,
    buttonText: "Supercomputing and Research",
  },
];

export const Herotwo = () => {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  const handleNext = () => {
    setCurrentTopicIndex((prevIndex) =>
      prevIndex === Herotwos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentTopicIndex((prevIndex) =>
      prevIndex === 0 ? Herotwos.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = () => {
    setIsPreviewOpen(true); // Open the preview modal
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false); // Close the preview modal
  };

  const handleLearnMoreClick = () => {
    setIsLearnMoreOpen(true); // Open the Learn More modal
  };

  const handleCloseLearnMore = () => {
    setIsLearnMoreOpen(false); // Close the Learn More modal
  };

  const currentTopic = Herotwos[currentTopicIndex];

  // Auto-switch to the next topic every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [currentTopicIndex]);

  return (
    <section className="relative w-full h-[500px] bg-black text-white">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-500`}
        style={{
          backgroundImage: `url(${currentTopic.image})`,
        }}
      >
        {/* Clickable Layer */}
        <div
          className="absolute inset-0 z-20 cursor-pointer"
          onClick={handleImageClick}
        ></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-10"></div>

      {/* Content */}
      <div className="relative z-30 container mx-auto h-full flex flex-col justify-center items-start space-y-4 px-6">
        <h1 className="text-3xl md:text-4xl font-bold">{currentTopic.title}</h1>
        <p className="text-base md:text-lg text-gray-300">
          {currentTopic.description}
        </p>
        <Button
          className="bg-white text-black px-6 py-2 rounded-md"
          onClick={handleLearnMoreClick}
        >
          Learn More
        </Button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-30"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-30"
      >
        &#8594;
      </button>

      {/* Topic Selector */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-4 z-30">
        <div className="container mx-auto flex justify-center space-x-4">
          {Herotwos.map((topic, index) => (
            <button
              key={index}
              onClick={() => setCurrentTopicIndex(index)}
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                currentTopicIndex === index
                  ? "border-b-2 border-white text-white"
                  : "text-gray-400"
              }`}
            >
              {topic.buttonText}
            </button>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${currentTopic.image})`,
            }}
          ></div>
          <button
            onClick={handleClosePreview}
            className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-md z-60"
          >
            Close
          </button>
        </div>
      )}

      {/* Learn More Modal */}
      {isLearnMoreOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">{currentTopic.title}</h2>
            <p className="text-sm text-gray-700 mb-4">
              {currentTopic.description}
            </p>
            <Button
              className="bg-black text-white px-4 py-2 rounded-md"
              onClick={handleCloseLearnMore}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};