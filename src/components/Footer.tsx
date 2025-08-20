import { MapPin, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-full lg:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">
              Aurora Farmstay
            </h3>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              A quiet Himalayan retreat in Palampur where luxury meets nature. 
              Experience the tranquility of mountain life with modern comforts.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary-foreground/60" />
                <div>
                  <p>Village Bhuana, Palampur</p>
                  <p>Himachal Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary-foreground/60" />
                <p>hello@aurorafarmstay.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary-foreground/60" />
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block hover:text-accent transition-colors">About Us</a>
              <a href="#experiences" className="block hover:text-accent transition-colors">Experiences</a>
              <a href="#attractions" className="block hover:text-accent transition-colors">Nearby Attractions</a>
              <a href="#contact" className="block hover:text-accent transition-colors">Book Your Stay</a>
              <a href="#gallery" className="block hover:text-accent transition-colors">Gallery</a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/70">
          <p>&copy; 2024 Aurora Farmstay. All rights reserved.</p>
          <p className="font-medium">
            Note: Aurora Farmstay is a vegetarian, no-liquor property
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;