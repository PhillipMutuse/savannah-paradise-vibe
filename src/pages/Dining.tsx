import { Card, CardContent } from "@/components/ui/card";
import { UtensilsCrossed, Coffee, Wine, Presentation } from "lucide-react";
import restaurantImage from "@/assets/dining-restaurant.jpg";
import barImage from "@/assets/savanna-bar.jpg";
import conferenceImage from "@/assets/conference-hall.jpg";

const Dining = () => {
  const dining = [
    {
      name: "The Savannah Grill",
      image: restaurantImage,
      description: "Fine dining restaurant featuring contemporary cuisine with local ingredients",
      hours: "6:00 PM - 11:00 PM",
      cuisine: "International",
    },
    {
      name: "The Savanna Lounge",
      image: barImage,
      description: "Sophisticated bar featuring premium spirits, signature cocktails, and light appetizers",
      hours: "5:00 PM - 1:00 AM",
      cuisine: "Bar & Lounge",
    },
  ];

  const amenities = [
    {
      icon: Presentation,
      title: "Conference Hall",
      image: conferenceImage,
      description: "State-of-the-art conference facilities with modern audiovisual equipment and flexible seating arrangements for corporate events and meetings",
    },
    {
      icon: UtensilsCrossed,
      title: "Event Spaces",
      description: "Versatile venues for weddings, celebrations, and special gatherings with customizable catering options",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Dining & Amenities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Indulge in culinary excellence and world-class facilities
          </p>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Our Restaurants & Bars
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dining.map((venue, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{venue.name}</h3>
                  <p className="text-muted-foreground mb-4">{venue.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Cuisine:</span> {venue.cuisine}
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Hours:</span> {venue.hours}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-accent rounded-lg">
            <div className="flex items-start space-x-4">
              <Coffee className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">Breakfast Buffet</h3>
                <p className="text-muted-foreground mb-2">
                  Start your day with our complimentary breakfast buffet featuring international
                  and local favorites.
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Hours:</span> 6:30 AM - 10:30 AM daily
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-8 bg-secondary text-secondary-foreground rounded-lg">
            <div className="flex items-start space-x-4">
              <Wine className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Room Service</h3>
                <p className="mb-2">
                  Enjoy dining in the comfort of your room with our 24-hour room service menu.
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Available:</span> 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 bg-accent">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Premium Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amenities.map((amenity, index) => (
              <Card key={index} className="border-border overflow-hidden">
                {amenity.image && (
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={amenity.image}
                      alt={amenity.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <amenity.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{amenity.title}</h3>
                    <p className="text-muted-foreground">{amenity.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Conference facilities and event spaces are available for hotel guests and external bookings.
              Contact our concierge for reservations, catering options, and event planning assistance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dining;
