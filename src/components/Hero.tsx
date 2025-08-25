import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/6e5f0fa4-56d3-497d-871e-f402c482bf5e.png" 
          alt="Dhauladhar mountain range view from Aurora Farmstay" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          Aurora Farmstay
        </h1>
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 text-balance">
          A Quiet Himalayan Retreat in Palampur
        </p>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto text-balance">
          Reconnect with nature. Reclaim your rhythm.
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