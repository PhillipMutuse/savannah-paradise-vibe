import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Wifi, Tv, Coffee, Wind } from "lucide-react";
import standardRoom from "@/assets/Standard room.jpg";
import deluxeRoom from "@/assets/deluxe room.jpg";
import suiteRoom from "@/assets/Superior room.jpg";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      image: standardRoom,
      price: "On Request",
      description: "Comfortable and modern room perfect for solo travelers or couples",
      features: ["Queen Bed", "Smart TV", "Free WiFi", "Air Conditioning"],
    },
    {
      id: 2,
      name: "Deluxe Room",
      image: deluxeRoom,
      price: "On Request",
      description: "Spacious room with premium amenities and stunning views",
      features: ["King Bed", "Smart TV", "Free WiFi", "Air Conditioning"],
    },
    {
      id: 3,
      name: "Executive Suite",
      image: suiteRoom,
      price: "On Request",
      description: "Luxurious suite with separate living area and panoramic views",
      features: ["King Bed", "Smart TV", "Jacuzzi", "Living Room", "Free WiFi"],
    },
  ];

  const amenities = [
    { icon: Wifi, name: "Free WiFi" },
    { icon: Tv, name: "Smart TV" },
    { icon: Wind, name: "Air Conditioning" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Rooms & Suites</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover your perfect sanctuary. Each room is designed with your comfort in mind.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-foreground">{room.name}</h3>
                    <span className="text-2xl font-bold text-primary">{room.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">per night</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{room.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {room.features.map((feature, index) => (
                      <div
                        key={index}
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link to="/booking" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Book Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 bg-accent">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
            Room Amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <amenity.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <p className="text-foreground font-medium">{amenity.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            All rooms feature premium bedding, en-suite bathrooms, work desks, and
            complimentary toiletries. Housekeeping service is provided daily.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Rooms;
