
import { useState } from "react";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Weddings", "Events", "Portraits", "Corporate"];

  const portfolioItems = [
    {
      id: 1,
      category: "Weddings",
      image: "/lovable-uploads/68c54105-278c-4f9d-8501-589db1ce6705.png",
      title: "I have found the one my soul loves",
      description: "Beautiful traditional wedding moments captured with love and emotion"
    },
    {
      id: 2,
      category: "Weddings",
      image: "/lovable-uploads/9fe6c419-15d6-4c5c-82ed-d75fd29356d0.png",
      title: "Prathamesh & Harshada",
      description: "The Dream Stories - Intimate wedding moments between bride and groom"
    },
    {
      id: 3,
      category: "Weddings",
      image: "/lovable-uploads/03815fc8-7548-412b-9bcf-bd620b97bd46.png",
      title: "Forever My Always",
      description: "Traditional wedding ceremony captured with beautiful mandap backdrop"
    },
    {
      id: 4,
      category: "Portraits",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Professional Portrait Session",
      description: "Stunning individual portraits with professional lighting"
    },
    {
      id: 5,
      category: "Events",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Corporate Event Coverage",
      description: "Professional event photography for corporate gatherings"
    },
    {
      id: 6,
      category: "Corporate",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Product Photography",
      description: "High-quality product photography for brands"
    },
    {
      id: 7,
      category: "Portraits",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Family Portrait Session",
      description: "Beautiful family moments captured with care"
    },
    {
      id: 8,
      category: "Events",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Birthday Celebration",
      description: "Joyful birthday party moments captured"
    },
    {
      id: 9,
      category: "Portraits",
      image: "/lovable-uploads/9d495e3e-5ebd-496d-b597-ce089713b7ff.png",
      title: "Couple Portrait Session",
      description: "Beautiful couple photography at Gateway of India"
    },
    {
      id: 10,
      category: "Portraits",
      image: "/lovable-uploads/9d8e81ed-5c7c-4621-ba68-d9840eb7986a.png",
      title: "Mumbai Couple Session",
      description: "Stunning couple portraits with iconic Mumbai backdrop"
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
