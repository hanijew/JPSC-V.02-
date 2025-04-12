import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon  } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "2023",
    description:
      "Established on September 16, the company focuses on building a strong technological foundation with advanced ICT systems for secure and efficient operations.",
  },
  {
    icon: <MapIcon />,
    title: "2024",
    description:
      "Expanded operational capabilities, enhanced asset management systems, and collaborated with other companies to offer improved solutions",
  },
  {
    icon: <PlaneIcon />,
    title: "2025",
    description:
      "Entered the property management sector, offering commercial and office spaces for lease with flexible and comprehensive management services.",
  },
 
];

export const HowItWorks = () => {
  return (
    <section
      id="history"
      className="container text-center py-24 sm:py-32"
        data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          History{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50 transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center ">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>


      
    </section>
  );
};
