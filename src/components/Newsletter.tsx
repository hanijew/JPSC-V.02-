{/*import { HeroCards } from "./HeroCards";
import { Button } from "./ui/button";
import { Input } from "./ui/input"; */}

export const Newsletter = () => {
 
 {/*} const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  }; */}

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          GET IN TOUCH{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            With Us
          </span>
        </h3>
       {/* <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Lorem ipsum dolor sit amet consectetur.
        </p> */}
{/*
        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="leomirandadev@gmail.com"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <Button>Subscribe</Button>
        </form> 
        */}

        {/* Contact Information Section */}
        <div className="text-center mt-12">
          <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Contact Us
          </h4>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            <span role="img" aria-label="phone">📞</span> +63 927-530-0844
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <span role="img" aria-label="email">📧</span> info@digitaloneph.com
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            <span role="img" aria-label="location">📍</span> Kalayaan Ave, Makati, 1210 Metro Manila
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574.0265970782522!2d121.02815318494143!3d14.566264730473002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90c1e3e3c2f%3A0xcbf6d51018a556a1!2sCentury%20Spire%20Office!5e0!3m2!1sen!2skr!4v1743144432858!5m2!1sen!2skr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
