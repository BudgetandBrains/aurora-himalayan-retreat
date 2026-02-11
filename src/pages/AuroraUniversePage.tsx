import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Instagram } from "lucide-react";

const links = [
  {
    name: "Aurora Farmstay Instagram",
    url: "https://www.instagram.com/aurora.farmstay",
    icon: Instagram,
    description: "Follow our journey in the Himalayas",
  },
];

const AuroraUniversePage = () => {
  return (
    <div className="min-h-screen bg-earth-warm/30">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Aurora Universe
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore everything Aurora — all our links in one place.
            </p>
          </div>

          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-border/60 bg-background hover:bg-accent/30 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuroraUniversePage;
