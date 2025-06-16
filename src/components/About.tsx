
import { Award, Camera, Users, MapPin } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Camera, number: "500+", label: "Events Captured" },
    { icon: Users, number: "1000+", label: "Happy Clients" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: MapPin, number: "5+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-studio-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              About <span className="text-gradient">5 Star Digital Studio</span>
            </h2>
            <p className="text-xl text-studio-light/80 mb-8 leading-relaxed">
              Based in the heart of Maharashtra, 5 Star Digital Studio has been crafting 
              visual stories that transcend time. We believe every moment deserves to be 
              captured with the highest level of artistry and technical excellence.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-studio-gold rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-studio-light mb-2">Our Mission</h3>
                  <p className="text-studio-light/70">
                    To preserve life's most precious moments through exceptional photography 
                    and cinematography, creating timeless memories that you'll treasure forever.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-studio-gold rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-studio-light mb-2">Our Vision</h3>
                  <p className="text-studio-light/70">
                    To be Maharashtra's premier photography studio, known for our artistic 
                    excellence, innovative techniques, and unmatched client experience.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-studio-gold rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold text-studio-light mb-2">Our Values</h3>
                  <p className="text-studio-light/70">
                    Quality, creativity, and client satisfaction are at the core of everything 
                    we do. We approach each project with passion and professionalism.
                  </p>
                </div>
              </div>
            </div>
            
            <a
              href="#contact"
              className="inline-block gold-gradient text-studio-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-studio-gold/30 transition-all duration-300 hover-scale"
            >
              Work With Us
            </a>
          </div>
          
          {/* Image and Stats */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional photographer at work"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-charcoal/60 to-transparent"></div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon size={24} className="text-studio-charcoal" />
                  </div>
                  <div className="text-2xl font-bold text-studio-gold mb-1">{stat.number}</div>
                  <div className="text-studio-light/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-playfair font-bold text-center mb-12">
            Meet Our <span className="text-gradient">Creative Team</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Sharma",
                role: "Lead Photographer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Priya Patel",
                role: "Cinematographer",
                image: "https://images.unsplash.com/photo-1494790108755-2616b332c07a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Rajesh Kumar",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-studio-gold/20 group-hover:border-studio-gold transition-all duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold text-studio-light mb-1">{member.name}</h4>
                <p className="text-studio-gold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
