import chaiMountainView from "@/assets/chai-mountain-view.jpg";
import mountainStream from "@/assets/mountain-stream.jpg";
import libraryLounge from "@/assets/library-lounge.jpg";

const experiences = [
  {
    title: "Organic Farming",
    description: "Get your hands dirty with authentic farm experiences - plant, tend, and harvest fresh organic vegetables.",
    image: "/lovable-uploads/7395cdf3-ecc5-4a9d-bd73-7e13a7344b95.png",
    alt: "Farm activities and vegetable harvesting"
  },
  {
    title: "Swim in the mountain stream",
    description: "Refresh yourself in the crystal-clear mountain stream that flows naturally by our property.",
    image: "/lovable-uploads/bb36118c-7390-402f-bb7d-d1cfbb05ce7f.png",
    alt: "Swimming in pristine mountain stream"
  },
  {
    title: "Meditation and Yoga Sessions",
    description: "Join our in-house teachers for daily meditation and yoga sessions in our serene mountain setting, or participate in our regularly held retreats for deeper practice.",
    image: "/lovable-uploads/1a04114c-74b2-4069-ac3a-1d94b22c5b17.png",
    alt: "Group yoga and meditation session with mountain views"
  },
  {
    title: "Read and reflect in the library lounge",
    description: "Our lounge and adjoining covered terrace provide a cosy sit-in for quiet reading. Our collection ranges from fiction, biographies, self-help, history and philosophy, including Hindi books. We also have board games and indoor games for moments of laughter with family and friends.",
    image: libraryLounge,
    alt: "Cozy library lounge for reading and reflection"
  },
  {
    title: "Explore surrounding villages and fields",
    description: "Explore authentic village life and walk through emerald fields that surround our peaceful retreat.",
    image: "/lovable-uploads/8938ff71-1413-4040-a391-41122cbaf113.png",
    alt: "Walking through village fields with mountain views"
  },
  {
    title: "Paragliding in Bir",
    description: "Soar through the skies with world-class paragliding in Bir, renowned as one of the world's premier flying destinations. This is a must-do activity in life for everyone seeking an unforgettable adventure.",
    image: "/lovable-uploads/fac6eb17-31f5-435a-97f7-8b7f8fc8c015.png",
    alt: "Paragliding with moon over Himalayan mountains"
  },
  {
    title: "Tea Estate Visit & Factory Tour",
    description: "Explore the nearby tea estate and discover the fascinating process of tea production with guided tours through traditional processing facilities, plus authentic tea tasting sessions.",
    image: "/lovable-uploads/DSC02931.jpg",
    alt: "Tea estate visit and factory tour experience"
  },
  {
    title: "Visit Andretta Artists Village",
    description: "Immerse yourself in the creative spirit of Andretta, a charming artists' village known for its pottery and artistic heritage.",
    image: "/lovable-uploads/IMG_20250925_131408.jpg",
    alt: "Andretta artists village pottery and art"
  },
  {
    title: "Ancient Shiva Temple, Baijnath",
    description: "Visit the magnificent 13th-century Shiva temple at Baijnath, one of the most significant historical temples in the region with exquisite stone architecture.",
    image: "/lovable-uploads/DSC02979.jpg",
    alt: "Ancient Shiva Temple at Baijnath with stone architecture"
  }
];

const Experiences = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Himalayan Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in the rhythm of mountain life through curated experiences 
            that reconnect you with nature and yourself.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 text-balance">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground text-balance">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;