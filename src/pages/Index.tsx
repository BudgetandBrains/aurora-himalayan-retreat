import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Highlights from "@/components/Highlights";
import NearbyAttractions from "@/components/NearbyAttractions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-earth-warm/30">
      <Navigation />
      <Hero />
      <About />
      <Experiences />
      <Highlights />
      <NearbyAttractions />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
