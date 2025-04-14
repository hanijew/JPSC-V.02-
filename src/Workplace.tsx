import modernoffice from "./assets/sample office/modernoffice.jpg"
import threedoffice from "./assets/sample office/3doffice.jpg"
import fd from "./assets/sample office/front desk.jpg"
import threedrender from "./assets/sample office/3drender.jpg"
import peopleworking from "./assets/sample office/peopleworking.jpg"
import check from "./assets/sample office/checkinglaptop.jpg"
import "lightbox2/dist/css/lightbox.min.css";

import 'lightbox2/dist/js/lightbox-plus-jquery.min.js';

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: 0,
    price: 0,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Get Started",
    benefitList: [
      "1 Team member",
      "2 GB Storage",
      "Upto 4 pages",
      "Community support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Premium",
    popular: 1,
    price: 5,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Start Free Trial",
    benefitList: [
      "4 Team member",
      "4 GB Storage",
      "Upto 6 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 40,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Contact US",
    benefitList: [
      "10 Team member",
      "8 GB Storage",
      "Upto 10 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
];

export const Workplace = () => {
  return (
    <section id="workplace" className="container py-24 sm:py-32"  data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center"   data-aos="fade-up">
        Our
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Workplace{" "}
        </span>
      </h2>


      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8 ">
        Explore our workplace through these images.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        <a href={modernoffice} data-lightbox="workplace" data-title="Workplace 1">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={modernoffice}
              alt="Workplace 1"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={threedoffice} data-lightbox="workplace" data-title="Workplace 2">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={threedoffice}
              alt="Workplace 2"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={fd} data-lightbox="workplace" data-title="Workplace 3">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={fd}
              alt="Workplace 3"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={threedrender} data-lightbox="workplace" data-title="Workplace 4">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={threedrender}
              alt="Workplace 4"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={peopleworking} data-lightbox="workplace" data-title="Workplace 5">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={peopleworking}
              alt="Workplace 5"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={check} data-lightbox="workplace" data-title="Workplace 6">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={check}
              alt="Workplace 6"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center"   data-aos="fade-up">
        Our
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Events{" "}
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Explore our workplace through these images.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"   data-aos="fade-up">
        <a href={modernoffice} data-lightbox="events" data-title="Event 1">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={modernoffice}
              alt="Workplace 1"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={threedoffice} data-lightbox="events" data-title="Event 2">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={threedoffice}
              alt="Workplace 2"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={fd} data-lightbox="events" data-title="Event 3">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={fd}
              alt="Workplace 3"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={threedrender} data-lightbox="events" data-title="Event 4">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={threedrender}
              alt="Workplace 4"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={peopleworking} data-lightbox="events" data-title="Event 5">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={peopleworking}
              alt="Workplace 5"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
        <a href={check} data-lightbox="events" data-title="Event 6">
          <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={check}
              alt="Workplace 6"
              className="object-cover w-full h-full"
            />
          </div>
        </a>
      </div>

    </section>
  );
};
