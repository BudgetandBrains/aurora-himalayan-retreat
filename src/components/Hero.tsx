import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroLandscape from "@/assets/hero-landscape.jpg";

const Hero = () => {
  const heroImages = [
    {
      src: "/lovable-uploads/e8c0a26b-1fa5-49af-ae51-eafdd6488cfb.png",
      alt: "Aerial view of Aurora Farmstay property with gardens and buildings",
    },
    {
      src: heroLandscape,
      alt: "Snow-capped Dhauladhar mountains overlooking green fields with villagers",
    },
    {
      src: "/lovable-uploads/877313b8-5f23-40e3-ae83-88d1665a4323.png",
      alt: "Paragliding over mountains during sunset near Aurora Farmstay",
    },
    {
      src: "/lovable-uploads/fac6eb17-31f5-435a-97f7-8b7f8fc8c015.png",
      alt: "Paragliding with moon over Himalayan mountains",
    },
    {
      src: "/lovable-uploads/3a627053-8035-48dd-a4e0-093923144ff3.png",
      alt: "Sunset view over fields and Dhauladhar mountains from Aurora Farmstay",
    },
    {
      src: "/lovable-uploads/IMG20250701192223.jpg",
      alt: "Serene mountain stream flowing through lush forest with Himalayan peaks",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full h-full"
        >
          {/* keep -ml-4 (shadcn default) so spacing is consistent */}
          <CarouselContent className="-ml-4 h-full">
            {heroImages.map((image, index) => (
              // Each slide: pl-4 (default), basis-full to fill viewport
              <CarouselItem key={index} className="pl-4 basis-full h-screen">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Make sure arrows sit above overlay and can receive pointer events */}
          <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30 z-20 pointer-events-auto" />
          <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30 z-20 pointer-events-auto" />
        </Carousel>

        {/* Overlay: keep visual effect but don't intercept clicks */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 pointer-events-none" />
      </div>

      {/* Foreground Content (still above carousel) */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-bodoni-regular text-4xl md:text-6xl lg:text-7xl font-normal text-white mb-6">
          Aurora Farmstay<br />
          Yoga Retreat
        </h1>
        <p className="font-bodoni text-2xl md:text-3xl lg:text-4xl text-white/90 mb-8 tracking-[0.2em]">
          PALAMPUR
        </p>
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-white/90 mb-8">
          Your Happy Home in the Himalayan Foothills
        </p>

        <div className="flex justify-center">
          <Button asChild variant="hero" size="lg" className="text-lg px-8 py-6 min-w-[200px]">
            <Link to="/book">Book Your Stay</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
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
