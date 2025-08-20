import farmstayExterior from "@/assets/farmstay-exterior.jpg";

const About = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Welcome to Aurora Farmstay
            </h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Nestled in the village of Bhuana, 25 minutes from Palampur town. 
                Overlooking the majestic Dhauladhar mountain range and bordered by 
                pine forests, a mountain stream and village fields, our home is a 
                space for slow, intentional living—designed for those who seek calm, 
                creativity, and connection.
              </p>
              <p>
                We moved here from the city in pursuit of a quieter, more meaningful 
                life, closer to nature. What began as a personal journey soon became 
                an invitation to others—to come and experience the luxuries of rural 
                Himalayan life, along with the comforts of a modern home.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-warm">
              <img 
                src="/lovable-uploads/266ff27b-5bd6-4b06-bf7f-5412f503d37f.png" 
                alt="Aurora Farmstay with mountain stream and natural surroundings" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;