import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background/95 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Guest Testimonials
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hear what our guests have to say about their unforgettable experiences at Aurora Farmstay
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Real Stories from Our Guests
            </h2>
            
            <div className="grid gap-8">
              {/* Facebook Post Embed */}
              <Card className="border-muted/20 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex justify-center">
                    <iframe 
                      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fanil.chopra.961%2Fposts%2Fpfbid0DDD9N1FgQ3HiNo5VGwuwrtRbwJsRAbk4D6bhPWAQrmLanJEzAVW1YEndzCbJmE3Vl&show_text=true&width=500" 
                      width="500" 
                      height="684" 
                      style={{border: 'none', overflow: 'hidden'}} 
                      scrolling="no" 
                      frameBorder="0" 
                      allowFullScreen={true} 
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      className="max-w-full"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Google Reviews */}
              <div className="grid gap-6">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-center">
                  Google Reviews
                </h3>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <Card className="border-muted/20">
                    <CardContent className="p-6">
                      <img 
                        src="/lovable-uploads/review-shivani.png" 
                        alt="Review by Shivani Sharma - 5 star review about blissful experience"
                        className="w-full h-auto rounded-lg"
                      />
                    </CardContent>
                  </Card>
                  
                  <Card className="border-muted/20">
                    <CardContent className="p-6">
                      <img 
                        src="/lovable-uploads/review-varun.png" 
                        alt="Review by Varun Sharma - 5 star review in Hindi about Aurora Farmstay"
                        className="w-full h-auto rounded-lg"
                      />
                    </CardContent>
                  </Card>
                  
                  <Card className="border-muted/20">
                    <CardContent className="p-6">
                      <img 
                        src="/lovable-uploads/review-raghvi.png" 
                        alt="Review by Raghvi Rumpal - 5 star review about beautiful experience"
                        className="w-full h-auto rounded-lg"
                      />
                    </CardContent>
                  </Card>
                  
                  <Card className="border-muted/20">
                    <CardContent className="p-6">
                      <img 
                        src="/lovable-uploads/review-kirti.png" 
                        alt="Review by kirti thakur - 5 star review about feeling like home"
                        className="w-full h-auto rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="border-muted/20 max-w-2xl mx-auto">
                  <CardContent className="p-6">
                    <img 
                      src="/lovable-uploads/review-bhawna.png" 
                      alt="Review by Bhawna Raheja - 5 star review about the place feeling like ideal home"
                      className="w-full h-auto rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;