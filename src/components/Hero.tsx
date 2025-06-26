
export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.6), rgba(26, 26, 26, 0.6)), url('/lovable-uploads/d80ab50c-07f9-4ecb-9a62-e414116a9817.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in">
          Capturing Life's Most{" "}
          <span className="text-gradient">Precious Moments</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-studio-light/80 mb-8 animate-slide-up font-light leading-relaxed">
          Premium photography and cinematography services.<br />
          Where every frame tells your unique story with luxury and elegance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <a
            href="#portfolio"
            className="gold-gradient text-studio-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-studio-gold/30 transition-all duration-300 hover-scale"
          >
            View Our Work
          </a>
          <a
            href="#contact"
            className="border-2 border-studio-gold text-studio-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-studio-gold hover:text-studio-charcoal transition-all duration-300 hover-scale"
          >
            Book Consultation
          </a>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-studio-gold rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-studio-gold rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-studio-gold rounded-full animate-pulse opacity-80 animation-delay-2000"></div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-studio-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-studio-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
