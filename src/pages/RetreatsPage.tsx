import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import libraryLounge from "@/assets/library-lounge.jpg";

const RetreatsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Meditation & Art Retreats
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Immerse yourself in transformative experiences that nurture creativity and inner peace 
                in the serene Himalayan setting of Aurora Farmstay
              </p>
            </div>
          </div>
        </section>

        {/* Retreat Options */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Attend Next Retreat */}
              <Card className="border-2 border-primary/20 shadow-warm">
                <CardHeader className="text-center">
                  <CardTitle className="font-display text-2xl font-bold text-foreground mb-2">
                    Attend the Next Retreat
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Join our upcoming guided retreats led by experienced facilitators
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src={libraryLounge}
                      alt="Peaceful meditation space at Aurora Farmstay"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      What to Expect
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Daily meditation sessions with mountain views
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Art workshops using natural materials
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Mindful nature walks through village fields
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Vegetarian meals with locally sourced ingredients
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Evening reflection and journaling sessions
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Next Retreat Dates</h4>
                    <p className="text-muted-foreground mb-2">March 15-22, 2024 (7 days)</p>
                    <p className="text-muted-foreground mb-4">Limited to 12 participants</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1">
                        Book Your Spot
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Download Brochure
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Host a Retreat */}
              <Card className="border-2 border-secondary/20 shadow-warm">
                <CardHeader className="text-center">
                  <CardTitle className="font-display text-2xl font-bold text-foreground mb-2">
                    Host a Retreat
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Bring your group to our peaceful sanctuary for a custom retreat experience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src="/lovable-uploads/9fe33e62-beff-4bdc-b8c7-8910c1fe136d.png"
                      alt="Aurora Farmstay facilities for hosting retreats"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Our Facilities
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Multiple meditation and workshop spaces
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Accommodation for up to 20 guests
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Fully equipped kitchen and dining areas
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Library lounge for quiet reflection
                      </li>
                      <li className="flex items-start">
                        <span className="text-secondary mr-2">•</span>
                        Outdoor spaces with mountain views
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Custom Retreat Options</h4>
                    <p className="text-muted-foreground mb-4">
                      We work with you to create the perfect retreat experience for your group, 
                      whether it's meditation, art, yoga, or wellness focused.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="secondary" className="flex-1">
                        Get a Quote
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Schedule Visit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Aurora */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose Aurora for Your Retreat?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The perfect setting for transformation and growth
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏔️</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Himalayan Setting
                </h3>
                <p className="text-muted-foreground text-sm">
                  Surrounded by the majestic Dhauladhar mountains
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌊</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Natural Streams
                </h3>
                <p className="text-muted-foreground text-sm">
                  Peaceful mountain stream flows through the property
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌾</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Village Life
                </h3>
                <p className="text-muted-foreground text-sm">
                  Authentic connection with local community and culture
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏡</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  Modern Comfort
                </h3>
                <p className="text-muted-foreground text-sm">
                  All amenities while maintaining rustic charm
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

export default RetreatsPage;