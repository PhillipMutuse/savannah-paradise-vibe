import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Savannah Paradise Hotels</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A legacy of hospitality excellence, where luxury meets tranquility
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-foreground">Our Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">
              Since 1995, Savannah Paradise Hotels has been synonymous with luxury hospitality
              and exceptional guest experiences. What began as a single boutique property has
              evolved into a distinguished hotel offering world-class accommodations and services.
            </p>
            <p className="mb-6">
              Nestled in the heart of Savannah, our hotel combines modern elegance with warm,
              personalized service. Every detail has been carefully curated to ensure your stay
              is nothing short of extraordinary.
            </p>
            <p>
              Our commitment to excellence extends beyond our rooms and amenities. We pride
              ourselves on creating memorable experiences, whether you're here for business,
              leisure, or celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 bg-accent">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Heart className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide unparalleled hospitality experiences that exceed expectations,
                  creating lasting memories for every guest who walks through our doors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Eye className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the premier destination for travelers seeking luxury, comfort, and
                  authentic hospitality, setting the standard for excellence in the industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Trophy className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Values</h3>
                <p className="text-muted-foreground">
                  Excellence, integrity, and genuine care for our guests. We believe in
                  sustainable practices and giving back to our community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            What Makes Us Unique
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Prime Location</h3>
              <p>
                Situated in the heart of Savannah, offering easy access to cultural attractions,
                pristine beaches, and vibrant entertainment districts.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Personalized Service</h3>
              <p>
                Our dedicated team ensures every guest receives individual attention and
                customized experiences tailored to their preferences.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Sustainable Luxury</h3>
              <p>
                We combine luxury with responsibility, implementing eco-friendly practices
                without compromising on comfort or quality.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">Award-Winning Excellence</h3>
              <p>
                Recognized internationally for our commitment to exceptional service,
                innovative design, and guest satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
