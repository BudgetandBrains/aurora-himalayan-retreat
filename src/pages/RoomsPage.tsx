import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Wifi, Tv, Coffee, BookOpen, Mountain, Bath } from "lucide-react";

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

        {/* Room Specifications */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Room Specifications
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-muted/20">
                  <CardContent className="p-8">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                      Space & Layout
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>300 sq ft of living space</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Spacious modern bathroom</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Private balcony/sit-out area</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Bay window reading nook</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-muted/20">
                  <CardContent className="p-8">
                    <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                      Modern Amenities
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>42" Smart TV</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>High-speed WiFi</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Tea/coffee making facilities</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
                        <span>Dedicated study table</span>
                      </li>
                    </ul>
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