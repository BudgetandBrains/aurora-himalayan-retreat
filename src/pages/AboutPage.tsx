import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import familyPhoto from "@/assets/family-photo.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                About Aurora Farmstay
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our journey from city life to a quiet Himalayan retreat
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Welcome to Aurora Farmstay, nestled in the village of Bhuana, 25 minutes from Palampur town. 
                    Overlooking the majestic Dhauladhar mountain range and bordered by pine forests, a mountain 
                    stream and village fields, our home is a space for slow, intentional living—designed for those 
                    who seek calm, creativity, and connection.
                  </p>
                  <p>
                    We moved here from the city in pursuit of a quieter, more meaningful life, closer to nature. 
                    What began as a personal journey soon became an invitation to others—to come and experience 
                    the luxuries of rural Himalayan life, along with the comforts of a modern home.
                  </p>
                  <p>
                    Our farmstay is more than just accommodation; it's a sanctuary where time slows down, 
                    creativity flourishes, and genuine connections are made with nature, community, and oneself.
                  </p>
                </div>
              </div>
              <div className="lg:order-first">
                <img
                  src={familyPhoto}
                  alt="Aurora Farmstay hosts welcoming guests with mountain backdrop"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-warm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What drives us and shapes the Aurora Farmstay experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Sustainability
                </h3>
                <p className="text-muted-foreground">
                  Living in harmony with nature, supporting local communities, and practicing mindful consumption.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🧘</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Mindfulness
                </h3>
                <p className="text-muted-foreground">
                  Creating spaces for reflection, meditation, and deep connection with the present moment.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Connection
                </h3>
                <p className="text-muted-foreground">
                  Fostering connection within ourselves, with each other, and with mother nature.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;