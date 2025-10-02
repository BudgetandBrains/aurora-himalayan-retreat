import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const BookPage = () => {
  return (
    <div className="min-h-screen bg-earth-warm/30">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Book Your Stay
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Plan your peaceful retreat at Aurora Farmstay. We'll help you create 
                the perfect Himalayan getaway experience.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default BookPage;