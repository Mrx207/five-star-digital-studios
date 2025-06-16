
import { Camera, Video, Heart, Users, Building, User } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography",
      description: "Capture your special day with cinematic elegance and timeless beauty.",
      features: ["Pre-wedding shoots", "Ceremony coverage", "Reception photography", "Edited gallery delivery"]
    },
    {
      icon: Video,
      title: "Wedding Cinematography",
      description: "Transform your wedding into a Hollywood-style love story film.",
      features: ["4K video recording", "Drone footage", "Same-day highlight reel", "Full documentary edit"]
    },
    {
      icon: Users,
      title: "Event Photography",
      description: "Professional coverage for corporate events, parties, and celebrations.",
      features: ["Corporate events", "Birthday parties", "Anniversary celebrations", "Social gatherings"]
    },
    {
      icon: Building,
      title: "Corporate Photography",
      description: "Elevate your brand with professional corporate photography services.",
      features: ["Product photography", "Team portraits", "Corporate events", "Brand photography"]
    },
    {
      icon: User,
      title: "Portrait Photography",
      description: "Individual and family portraits that capture personality and emotion.",
      features: ["Family portraits", "Individual sessions", "Maternity photography", "Baby photography"]
    },
    {
      icon: Camera,
      title: "Special Occasions",
      description: "Every milestone deserves to be captured with professional precision.",
      features: ["Graduation ceremonies", "Religious ceremonies", "Cultural events", "Custom packages"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-studio-charcoal to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Our <span className="text-gradient">Premium Services</span>
          </h2>
          <p className="text-xl text-studio-light/70 max-w-3xl mx-auto">
            From intimate moments to grand celebrations, we provide comprehensive photography 
            and cinematography services tailored to your unique vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover-glow group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 gold-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} className="text-studio-charcoal" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold mb-3 text-studio-light">
                  {service.title}
                </h3>
                <p className="text-studio-light/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-studio-light/60">
                    <div className="w-2 h-2 bg-studio-gold rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <a
                  href="#contact"
                  className="text-studio-gold hover:text-studio-gold-dark transition-colors duration-300 font-semibold"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
