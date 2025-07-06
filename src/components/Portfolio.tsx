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
      category: "Weddings",
      image: "/lovable-uploads/fe74fbe9-2c3d-4ea6-ae99-6d611689a401.png",
      title: "Eternal Bond",
      description: "Beautiful couple sharing intimate moments in golden hour lighting"
    },
    {
      id: 5,
      category: "Weddings",
      image: "/lovable-uploads/cd29fca9-ebb7-4505-aff4-0c92d360d458.png",
      title: "Sacred Vows",
      description: "Tender moment as groom kisses bride's hand during ceremony"
    },
    {
      id: 6,
      category: "Weddings",
      image: "/lovable-uploads/f1bbb4dc-359f-4c6c-9a66-78534ee8d259.png",
      title: "Wedding Party Joy",
      description: "Bridal party and groomsmen sharing joyful moments together"
    },
    {
      id: 7,
      category: "Weddings",
      image: "/lovable-uploads/e7c66dc3-06ac-484d-93d3-23c1c124127d.png",
      title: "Under the Stars",
      description: "Couple embracing under beautifully lit mandap with fairy lights"
    },
    {
      id: 8,
      category: "Weddings",
      image: "/lovable-uploads/cf54639e-5da5-4deb-8b4a-18efaf68fe5d.png",
      title: "Sacred Moments",
      description: "Intimate couple portrait during traditional wedding ceremony"
    },
    {
      id: 9,
      category: "Weddings",
      image: "/lovable-uploads/930fbdea-3f93-43b1-a0d0-e470561f0709.png",
      title: "Bridal Squad Goals",
      description: "Bride surrounded by her beautiful bridesmaids in elegant red attire"
    },
    {
      id: 10,
      category: "Weddings",
      image: "/lovable-uploads/9ac09475-6b48-4988-9160-0d131ff639c5.png",
      title: "Wedding Party Celebration",
      description: "Fun group photo with bride, groom and their wedding party"
    },
    {
      id: 11,
      category: "Portraits",
      image: "/lovable-uploads/64ce85a4-7b1b-4b74-8804-dda9764dd2a9.png",
      title: "Save the Date - Paris",
      description: "Romantic engagement shoot at the iconic Eiffel Tower in Paris"
    },
    {
      id: 12,
      category: "Portraits",
      image: "/lovable-uploads/bcf5f97e-a075-4bed-844a-2d4652fcac87.png",
      title: "Gateway of India Romance",
      description: "Beautiful couple portrait at the iconic Gateway of India, Mumbai"
    },
    {
      id: 13,
      category: "Portraits",
      image: "/lovable-uploads/7b5e5a53-bacf-49cd-a1fa-68aee6203556.png",
      title: "3 Day Countdown",
      description: "Intimate pre-wedding shoot with romantic fairy light backdrop"
    },
    {
      id: 14,
      category: "Portraits",
      image: "/lovable-uploads/e6436592-ed61-455b-ba6d-7bde3c045399.png",
      title: "Forest Romance",
      description: "Romantic couple embrace in a dreamy forest setting with golden hour lighting"
    },
    {
      id: 15,
      category: "Portraits",
      image: "/lovable-uploads/325af7de-f332-4ce0-bcc2-bb60c3fa9dfa.png",
      title: "Beach Picnic Love",
      description: "Intimate beach picnic session with tropical palm trees backdrop"
    },
    {
      id: 16,
      category: "Portraits",
      image: "/lovable-uploads/25af96a3-5e2d-4842-ae8e-3eb229eea9e6.png",
      title: "Love Story Countdown",
      description: "Beautiful pre-wedding story about love with scenic bridge and lake views"
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
