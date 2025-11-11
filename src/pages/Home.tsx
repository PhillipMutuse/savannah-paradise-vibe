import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Utensils, Waves, Award } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";

const Home = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Luxury Accommodations",
      description: "Experience comfort in our elegantly designed rooms and suites",
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Savor exquisite cuisine at our world-class restaurants",
    },
    {
      icon: Waves,
      title: "Premium Amenities",
      description: "Enjoy our pool, spa, gym, and exclusive facilities",
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Recognized for excellence in hospitality and guest care",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Welcome to Savannah Paradise Hotels
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
            Your Gateway to Luxury and Tranquility
          </p>
          <Link to="/booking">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 animate-scale-in"
            >
              Book Your Stay
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Savannah Paradise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the perfect blend of luxury, comfort, and exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Paradise?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book your stay today and immerse yourself in luxury, comfort, and unforgettable memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Now
              </Button>
            </Link>
            <Link to="/rooms">
              <Button size="lg" variant="outline" className="border-primary text-secondary-foreground hover:bg-primary/10">
                Explore Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
