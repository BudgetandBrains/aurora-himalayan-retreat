
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const heroImages = [
    {
      src: "/lovable-uploads/e8c0a26b-1fa5-49af-ae51-eafdd6488cfb.png",
      alt: "Aerial view of Aurora Farmstay property with gardens and buildings"
    },
    {
      src: "/lovable-uploads/877313b8-5f23-40e3-ae83-88d1665a4323.png",
      alt: "Paragliding over mountains during sunset near Aurora Farmstay"
    },
    {
      src: "/lovable-uploads/fac6eb17-31f5-435a-97f7-8b7f8fc8c015.png",
      alt: "Paragliding with moon over Himalayan mountains"
    },
    {
      src: "/lovable-uploads/3a627053-8035-48dd-a4e0-093923144ff3.png",
      alt: "Sunset view over fields and Dhauladhar mountains from Aurora Farmstay"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel 
          opts={{
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full h-full"
        >
          <CarouselContent className="w-full h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="w-full h-full">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
          <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-bodoni text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 text-balance">
          Aurora Farmstay
        </h1>
        <p className="font-bodoni text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 mb-8 text-balance tracking-[0.2em]">
          PALAMPUR
        </p>
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 text-balance">
          Your Home in the Himalayan Foothills
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 min-w-[200px]"
          >
            <Link to="/book">Book Your Stay</Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 min-w-[200px] border-white/50 text-white bg-white/10 hover:bg-white/20 hover:text-white"
          >
            Explore Experiences
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
