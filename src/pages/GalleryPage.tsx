import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  const galleryImages = [
    "/lovable-uploads/266ff27b-5bd6-4b06-bf7f-5412f503d37f.png",
    "/lovable-uploads/3282edb4-8816-454d-a978-7a85d83ef011.png", 
    "/lovable-uploads/3a627053-8035-48dd-a4e0-093923144ff3.png",
    "/lovable-uploads/6e5f0fa4-56d3-497d-871e-f402c482bf5e.png",
    "/lovable-uploads/7395cdf3-ecc5-4a9d-bd73-7e13a7344b95.png",
    "/lovable-uploads/877313b8-5f23-40e3-ae83-88d1665a4323.png",
    "/lovable-uploads/8938ff71-1413-4040-a391-41122cbaf113.png",
    "/lovable-uploads/9fe33e62-beff-4bdc-b8c7-8910c1fe136d.png",
    "/lovable-uploads/b3efab16-676b-460e-9ded-33dd6089d412.png",
    "/lovable-uploads/bb36118c-7390-402f-bb7d-d1cfbb05ce7f.png",
    "/lovable-uploads/e8c0a26b-1fa5-49af-ae51-eafdd6488cfb.png",
    "/lovable-uploads/fac6eb17-31f5-435a-97f7-8b7f8fc8c015.png",
    "/lovable-uploads/DSC00310_i.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-earth-warm/20 to-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Gallery
            </h1>
            <p className="text-xl text-cream/90 max-w-2xl mx-auto">
              Discover the beauty of Aurora Farmstay through our collection of moments
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-lg shadow-soft hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={image}
                    alt={`Aurora Farmstay Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-earth">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Experience Aurora Farmstay
            </h2>
            <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
              Create your own memories in this beautiful mountain retreat
            </p>
            <a
              href="/book"
              className="inline-flex items-center px-8 py-4 bg-white text-brown font-semibold rounded-full hover:bg-cream transition-colors duration-200 shadow-soft hover:shadow-lg"
            >
              Book Your Stay
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GalleryPage;