export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "2.7K+",
      description: "Users",
    },
    {
      quantity: "1.8K+",
      description: "Subscribers",
    },
    {
      quantity: "112",
      description: "Downloads",
    },
    {
      quantity: "5",
      description: "Products",
    },
  ];

  return (
    <section id="statistics" 
    data-aos="fade-up">
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-4">
        {stats.map(({ quantity, description }: statsProps) => (
          <div
            key={description}
            className="space-y-3 text-center"
          >
            <h2 className="text-l sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
