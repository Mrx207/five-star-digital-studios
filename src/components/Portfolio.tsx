
import { useState } from "react";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Weddings", "Events", "Portraits", "Corporate"];

  const portfolioItems = [
    {
      id: 1,
      category: "Weddings",
      image: "/lovable-uploads/766d6bf6-10c1-41cc-a3ff-4c70a1fab0b4.png",
      title: "Romantic Wedding Moment",
      description: "Intimate moment between bride and groom during ceremony"
    },
    {
      id: 2,
      category: "Portraits",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Professional Portrait Session",
      description: "Stunning individual portraits with professional lighting"
    },
    {
      id: 3,
      category: "Events",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Corporate Event Coverage",
      description: "Professional event photography for corporate gatherings"
    },
    {
      id: 4,
      category: "Weddings",
      image: "/lovable-uploads/f828d3a4-c02c-4d9c-8c32-ad70d8151988.png",
      title: "Wedding Party Celebration",
      description: "Fun group shot with wedding party and groomsmen"
    },
    {
      id: 5,
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Product Photography",
      description: "High-quality product photography for brands"
    },
    {
      id: 6,
      category: "Portraits",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Family Portrait Session",
      description: "Beautiful family moments captured with care"
    },
    {
      id: 7,
      category: "Events",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Birthday Celebration",
      description: "Joyful birthday party moments captured"
    },
    {
      id: 8,
      category: "Weddings",
      image: "/lovable-uploads/1752ad7e-369c-410c-b1f2-a6c4e156779c.png",
      title: "Wedding Reception Joy",
      description: "Capturing pure happiness during wedding reception celebration"
    },
    {
      id: 9,
      category: "Weddings",
      image: "/lovable-uploads/3c5b37b1-d781-48e9-8af3-7f1f66218d6b.png",
      title: "Proposal in Paris",
      description: "Romantic proposal moment captured at the Eiffel Tower"
    },
    {
      id: 10,
      category: "Portraits",
      image: "/lovable-uploads/9d495e3e-5ebd-496d-b597-ce089713b7ff.png",
      title: "Couple Portrait Session",
      description: "Beautiful couple photography at Gateway of India"
    },
    {
      id: 11,
      category: "Portraits",
      image: "/lovable-uploads/9d8e81ed-5c7c-4621-ba68-d9840eb7986a.png",
      title: "Mumbai Couple Session",
      description: "Stunning couple portraits with iconic Mumbai backdrop"
    },
    {
      id: 12,
      category: "Weddings",
      image: "/lovable-uploads/0b974e65-d453-4fe5-80a0-348f2626e967.png",
      title: "Pre-Wedding Forest Shoot",
      description: "Romantic pre-wedding photography in natural forest setting"
    },
    {
      id: 13,
      category: "Weddings",
      image: "/lovable-uploads/f51ffe83-36fd-4247-997f-89ccc8ac94db.png",
      title: "Beach Picnic Romance",
      description: "Intimate couple moments during beach picnic photography"
    },
    {
      id: 14,
      category: "Weddings",
      image: "/lovable-uploads/eb974213-d933-43d5-b0b6-755cf0eb50ac.png",
      title: "Love Story Documentary",
      description: "Beautiful pre-wedding story captured in multiple frames"
    }
  ];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-studio-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-studio-light/70 max-w-3xl mx-auto mb-12">
            Explore our collection of stunning photography and cinematography work, 
            showcasing moments that matter most.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "gold-gradient text-studio-charcoal"
                    : "bg-gray-800 text-studio-light hover:bg-gray-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl hover-scale cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                  <div className="mt-2">
                    <span className="inline-block px-3 py-1 bg-studio-gold/90 text-studio-charcoal text-xs rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block gold-gradient text-studio-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-studio-gold/30 transition-all duration-300 hover-scale"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};
