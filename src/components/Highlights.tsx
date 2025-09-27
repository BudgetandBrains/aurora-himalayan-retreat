import { Wifi, TreePine, MapPin, BookOpen, Clock, Utensils } from "lucide-react";

const highlights = [
  {
    icon: Utensils,
    title: "Saatvik Experience",
    description: "Vegetarian cuisine and no liquor policy for pure living"
  },
  {
    icon: TreePine,
    title: "Natural Surroundings",
    description: "Surrounded by farms, forest, and mountain stream"
  },
  {
    icon: Wifi,
    title: "Luxurious Rooms",
    description: "42\" Smart TV and high-speed WiFi for modern comfort"
  },
  {
    icon: MapPin,
    title: "Perfect Location",
    description: "25 minutes from Palampur town centre"
  },
  {
    icon: BookOpen,
    title: "Library Lounge",
    description: "Vast collection of books for reading and reflection"
  },
  {
    icon: Clock,
    title: "Extended Stays Welcome",
    description: "Perfect for long stays, creative work, or peaceful getaways"
  }
];

const Highlights = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-mountain">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Aurora Farmstay
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of rustic charm and modern luxury in the heart of the Himalayas.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1 border border-accent/10"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-balance">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;