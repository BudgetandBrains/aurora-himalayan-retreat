import { MapPin, Clock } from "lucide-react";

const attractions = [
  {
    name: "Andretta Artists Village",
    time: "15 mins",
    description: "Historic artist colony with galleries, pottery workshops, and cultural heritage"
  },
  {
    name: "Sobha Singh Art Gallery",
    time: "15 mins", 
    description: "Famous for paintings of Sikh Gurus and Punjabi culture by renowned artist Sobha Singh"
  },
  {
    name: "Wah Tea Estate",
    time: "15 mins",
    description: "Scenic tea gardens offering tours and fresh mountain tea experiences"
  },
  {
    name: "Ancient Shiva Temple, Baijnath",
    time: "30 mins",
    description: "13th-century stone temple complex dedicated to Lord Shiva, rich in history"
  },
  {
    name: "Bir-Billing",
    time: "45 mins",
    description: "World-famous paragliding destination with stunning aerial views"
  },
  {
    name: "Buddhist Monasteries",
    time: "Various",
    description: "Multiple peaceful monasteries offering spiritual experiences and meditation"
  }
];

const NearbyAttractions = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nearby Attractions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the rich cultural heritage and natural beauty surrounding Aurora Farmstay.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-warm transition-all duration-300 border border-accent/10"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {attraction.name}
                  </h3>
                  <div className="flex items-center gap-1 text-accent">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{attraction.time}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm text-balance">
                {attraction.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyAttractions;