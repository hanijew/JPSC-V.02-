import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";


interface ServiceProps {
  title: string;
  description: string;
  
  icon?: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Strategic Management Services",
    description:
      "Providing corporate governance, financial oversight, and strategic direction to ensure long-term business success.",
  },
  {
    title: "Operational Support Services",
    description:
      "Offering centralized procurement, supply chain management, human resources, and shared services for operational efficiency.",
  },
  {
    title: "Technology and Brand Management Services",
    description:
      "Providing IT infrastructure support, technology consulting, data management, corporate branding, and market research to drive innovation and brand visibility.",
  },
  {
    title: "Legal, Compliance, and Property Management",
    description:
      "Managing investments, optimizing portfolios, and ensuring effective profit distribution for maximum returns.",
  },
  {
    title: "Task Automation",
    description:
      "Ensuring regulatory compliance, managing legal affairs, protecting intellectual property, and overseeing real estate investments and facilities.",
  },
];

export const Services = () => {
  return (
    <section id="services">
      <section className="container py-24 sm:py-32">
        <div className="grid lg:grid-cols-[1fr,2fr] gap-8 place-items-start">
          {/* Left Section: Heading and Description */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Our Services
              </span>
            </h2>
            <p className="text-muted-foreground text-xl mt-4 mb-8">
              Explore the wide range of services we offer to help your business
              thrive.
            </p>
          </div>

          {/* Right Section: Two-column layout for service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceList.map(({ title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex flex-col justify-start items-start gap-4">
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
