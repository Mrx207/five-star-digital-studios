
export const AboutFounder = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-studio-charcoal to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Founder Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/lovable-uploads/65d90729-2669-41a3-a30d-de05e2093edb.png"
                alt="Juliet Andrew - Studio Founder"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-charcoal/40 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 gold-gradient rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-2 border-studio-gold rounded-full"></div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Meet Our <span className="text-gradient">Founder</span>
            </h2>
            
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-studio-gold mb-2">Juliet Andrew</h3>
              <p className="text-lg text-studio-light/80">Creative Director & Founder</p>
            </div>
            
            <div className="space-y-4 text-studio-light/80 leading-relaxed">
              <p>
                With over 8 years of experience in photography and cinematography, 
                Juliet founded 5 Star Digital Studio with a vision to capture life's 
                most precious moments with unparalleled artistry and technical excellence.
              </p>
              
              <p>
                Her journey began with a passion for storytelling through visuals and 
                an eye for capturing authentic emotions. Today, she leads a team of 
                creative professionals who share her commitment to delivering 
                extraordinary experiences for every client.
              </p>
              
              <p>
                Juliet believes that every wedding, every celebration, and every moment 
                has its own unique story waiting to be told through the lens of creativity, 
                emotion, and genuine human connection.
              </p>
              
              <p>
                Her approach combines technical expertise with artistic vision, ensuring 
                that each photograph and video not only captures the moment but also 
                evokes the feelings and memories that make it special.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-studio-gold font-semibold mr-2">8+</span>
                <span className="text-studio-light/70">Years Experience</span>
              </div>
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-studio-gold font-semibold mr-2">300+</span>
                <span className="text-studio-light/70">Weddings Captured</span>
              </div>
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-studio-gold font-semibold mr-2">25+</span>
                <span className="text-studio-light/70">Awards Won</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
