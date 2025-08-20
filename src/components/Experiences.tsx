import chaiMountainView from "@/assets/chai-mountain-view.jpg";
import mountainStream from "@/assets/mountain-stream.jpg";
import libraryLounge from "@/assets/library-lounge.jpg";

const experiences = [
  {
    title: "Sip chai by the window with mountain views",
    description: "Start your mornings with traditional chai while gazing at the majestic Dhauladhar peaks through panoramic windows.",
    image: chaiMountainView,
    alt: "Enjoying chai with stunning mountain views"
  },
  {
    title: "Walk through nearby villages & fields",
    description: "Explore authentic village life and walk through emerald fields that surround our peaceful retreat.",
    image: "/lovable-uploads/6e5f0fa4-56d3-497d-871e-f402c482bf5e.png",
    alt: "Walking through village fields with mountain views"
  },
  {
    title: "Swim in the mountain stream",
    description: "Refresh yourself in the crystal-clear mountain stream that flows naturally through our property.",
    image: mountainStream,
    alt: "Swimming in pristine mountain stream"
  },
  {
    title: "Read and reflect in the library lounge",
    description: "Find your perfect reading spot in our extensive library, designed for contemplation and creativity.",
    image: libraryLounge,
    alt: "Cozy library lounge for reading and reflection"
  },
  {
    title: "Stargaze from the rooftop",
    description: "Experience the wonder of unpolluted night skies from our rooftop terrace, perfect for stargazing.",
    image: "/lovable-uploads/9fe33e62-beff-4bdc-b8c7-8910c1fe136d.png",
    alt: "Aurora Farmstay rooftop and aerial view"
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