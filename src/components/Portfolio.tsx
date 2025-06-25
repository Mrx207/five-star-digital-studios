
import { useState } from "react";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Weddings", "Events", "Portraits", "Corporate"];

  const portfolioItems = [
    {
      id: 1,
      category: "Weddings",
      image: "/lovable-uploads/774b92c3-c6e0-4b1f-a84e-7c4fc2c55f13.png",
      title: "Traditional Haldi Ceremony",
      description: "Beautiful bride showing her henna-decorated hands during haldi ceremony"
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
      image: "/lovable-uploads/dbf7774c-253e-42d4-977d-aa7b974ab101.png",
      title: "Bridal Portrait",
      description: "Elegant bridal portrait during wedding preparations"
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
      image: "/lovable-uploads/333cf64c-0846-4fc3-b2e9-0290c18ead6e.png",
      title: "Joyful Wedding Moment",
      description: "Capturing pure joy and happiness during wedding celebrations"
    },
    {
      id: 9,
      category: "Weddings",
      image: "/lovable-uploads/93ed40c6-06ee-4665-ac31-ae030c222240.png",
      title: "Bridal Henna Art",
      description: "Intricate henna designs captured in stunning detail"
    },
    {
      id: 10,
      category: "Weddings",
      image: "/lovable-uploads/d39a0372-2a71-4cba-8833-63902614dd0c.png",
      title: "Groom's Attire",
      description: "Elegant groom's suit hanging beautifully in natural setting"
    },
    {
      id: 11,
      category: "Weddings",
      image: "/lovable-uploads/6c548100-0a13-4edb-8f4b-088d6cf942aa.png",
      title: "Wedding Ceremony",
      description: "Beautiful couple during their wedding ceremony under decorative mandap"
    },
    {
      id: 12,
      category: "Weddings",
      image: "/lovable-uploads/0a7cd2bd-feb8-450f-9af7-3155bfc5229f.png",
      title: "Intimate Wedding Moment",
      description: "Tender moment between bride and groom during ceremony"
    },
    {
      id: 13,
      category: "Weddings",
      image: "/lovable-uploads/d69e8333-7a09-4f9a-ab4c-b9cd71b4f6f3.png",
      title: "Bridal Squad",
      description: "Beautiful group photo of bride with her bridesmaids"
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
