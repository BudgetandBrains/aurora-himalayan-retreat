import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Wifi, Tv, Coffee, BookOpen, Mountain, Bath, IndianRupee, Percent } from "lucide-react";

const RoomsPage = () => {
  const roomFeatures = [
    {
      icon: <Mountain className="w-6 h-6" />,
      title: "Spacious Rooms",
      description: "300 sq ft of comfortable living space"
    },
    {
      icon: <Bath className="w-6 h-6" />,
      title: "Modern Bathrooms",
      description: "Spacious bathrooms with all modern fittings"
    },
    {
      icon: <Mountain className="w-6 h-6" />,
      title: "Dhauladhar Views",
      description: "Large windows for extensive views of Dhauladhar range"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Private Balcony",
      description: "Sit-out area/balcony for enjoying the outside weather"
    },
    {
      icon: <Tv className="w-6 h-6" />,
      title: "Smart TV",
      description: "42\" Smart TV for your entertainment"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Tea & Coffee",
      description: "Complimentary tea/coffee kettle in every room"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Study Area",
      description: "Dedicated study table for work or planning"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Free WiFi",
      description: "High-speed internet connectivity"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Bay Window Nook",
      description: "Bay window sit-out perfect for leisurely reading"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Our Rooms
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience comfort and tranquility in our thoughtfully designed rooms, 
                each offering stunning mountain views and modern amenities.
              </p>
            </div>
          </div>
        </section>

        {/* Room Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="/lovable-uploads/b3efab16-676b-460e-9ded-33dd6089d412.png"
                  alt="Spacious room with mountain views at Aurora Farmstay"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                  Comfort Meets Nature
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our rooms are designed to provide the perfect blend of modern comfort 
                  and natural beauty. Each space is carefully crafted to offer you a 
                  peaceful retreat with stunning views of the Dhauladhar mountain range.
                </p>
                <p className="text-lg text-muted-foreground">
                  Whether you're here for rest, work, or adventure, our rooms provide 
                  all the amenities you need for a memorable stay in the Himalayas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Room Features */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Room Features & Amenities
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every detail has been considered to ensure your comfort and enjoyment
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roomFeatures.map((feature, index) => (
                <Card key={index} className="border-muted/20 hover:border-primary/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* Tariff Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Room Tariff
                </h2>
                <p className="text-lg text-muted-foreground">
                  Competitive rates for your comfortable stay
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-muted/20 relative overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <IndianRupee className="w-6 h-6 text-primary" />
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        Premium Room - Double Occupancy
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold text-foreground">₹5,500</span>
                        <span className="text-muted-foreground">per night</span>
                      </div>
                      <p className="text-muted-foreground">
                        Perfect for couples seeking luxury and comfort
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-muted/20 relative overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <IndianRupee className="w-6 h-6 text-primary" />
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        Premium Room - Single Occupancy
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-3xl font-bold text-foreground">₹5,000</span>
                        <span className="text-muted-foreground">per night</span>
                      </div>
                      <p className="text-muted-foreground">
                        Ideal for solo travelers and business guests
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center space-y-6">
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <Percent className="w-6 h-6 text-primary" />
                      <h3 className="font-display text-2xl font-bold text-primary">
                        Inaugural Discount - 15% Off
                      </h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      Celebrate our opening with exclusive savings on your stay
                    </p>
                    <div className="flex items-center justify-center space-x-6">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-muted-foreground line-through">₹5,500</div>
                        <div className="text-2xl font-bold text-primary">₹4,675</div>
                        <div className="text-sm text-muted-foreground">Double Occupancy</div>
                      </div>
                      <div className="w-px h-12 bg-border"></div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-muted-foreground line-through">₹5,000</div>
                        <div className="text-2xl font-bold text-primary">₹4,250</div>
                        <div className="text-sm text-muted-foreground">Single Occupancy</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-muted/20">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center space-x-3">
                      <Coffee className="w-5 h-5 text-primary" />
                      <p className="text-lg font-semibold text-foreground">
                        Tariff is inclusive of breakfast
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RoomsPage;