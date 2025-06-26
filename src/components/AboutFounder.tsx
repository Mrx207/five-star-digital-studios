
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
                className="w-full h-[500px] object-cover object-top"
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
              <p className="text-xl font-medium text-studio-gold">Hey!</p>
              <p>I'm Juliet Andrew, the founder of 5 Star Digital Studio.</p>
              
              <p>
                Growing up in a South Indian household, I was surrounded by women who dedicated their time to the kitchen and household responsibilities. While I deeply respect that tradition, I always felt a creative spark within me—an urge to build something of my own, to tell stories differently.
              </p>
              
              <p>
                That curiosity and drive led me to pick up a camera one day… and I haven't looked back since.
              </p>
              
              <p>
                What started as a few casual clicks turned into a passion, and eventually, a profession. Through 5 Star Digital Studio, I aim to capture moments that matter—with heart, creativity, and authenticity.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-studio-gold font-semibold mr-2">15+</span>
                <span className="text-studio-light/70">Years Experience</span>
              </div>
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-studio-gold font-semibold mr-2">500+</span>
                <span className="text-studio-light/70">Weddings Captured</span>
              </div>
              <div className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-studio-gold font-semibold mr-2">40+</span>
                <span className="text-studio-light/70">Awards Won</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
