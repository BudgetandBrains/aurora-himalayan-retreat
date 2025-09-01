import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Plan Your Stay at Aurora Farmstay
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience the tranquility of Himalayan luxury? Get in touch to book your retreat.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-warm">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Send us a message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="checkin">Check-in Date</Label>
                  <Input id="checkin" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkout">Check-out Date</Label>
                  <Input id="checkout" type="date" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your stay preferences, group size, or any special requirements..."
                  rows={4}
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground">Quick responses for booking inquiries</p>
                    <Button variant="earth" size="sm" className="mt-2" asChild>
                      <a href="https://wa.me/917011325322" target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+91 70113 25322 | +91 9805969923</p>
                    <Button variant="earth" size="sm" className="mt-2" asChild>
                      <a href="tel:+917011325322">
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">aurorafarmstay.hp@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Village Bhuana, Palampur<br />
                      Himachal Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Important Note */}
            <div className="bg-accent-light/20 border border-accent/20 rounded-xl p-6">
              <h4 className="font-display font-semibold text-foreground mb-2">
                Please Note
              </h4>
              <p className="text-sm text-muted-foreground">
                Aurora Farmstay is a vegetarian, no-liquor property committed to maintaining 
                a peaceful and pure environment for all our guests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;