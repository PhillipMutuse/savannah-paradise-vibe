import { useState } from "react";
import heroImage from "@/assets/hero image.jpg";
import standardRoom from "@/assets/Standard room.jpg";
import deluxeRoom from "@/assets/deluxe room.jpg";
import suiteRoom from "@/assets/Superior room.jpg";
import restaurantImage from "@/assets/dining-restaurant.png";
import poolBarImage from "@/assets/verandot.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: heroImage, alt: "Hotel Exterior", category: "Exterior" },
    { src: deluxeRoom, alt: "Deluxe Room", category: "Rooms" },
    { src: suiteRoom, alt: "Executive Suite", category: "Rooms" },
    { src: standardRoom, alt: "Standard Room", category: "Rooms" },
    { src: restaurantImage, alt: "Restaurant", category: "Dining" },
    { src: poolBarImage, alt: "Pool Bar", category: "Amenities" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our beautiful property through stunning imagery
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer group aspect-[4/3]"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <p className="text-lg font-semibold">{image.alt}</p>
                  <p className="text-sm text-white/80">{image.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click on any image to view it in full size. For high-resolution images or
              additional photos, please contact our marketing department.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Full size"
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
