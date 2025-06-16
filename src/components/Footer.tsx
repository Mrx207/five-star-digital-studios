
export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold text-gradient mb-4">
              5 Star Digital Studio
            </h3>
            <p className="text-studio-light/70 mb-6 max-w-md">
              Capturing life's most precious moments with premium photography and 
              cinematography services across Maharashtra. Where every frame tells your unique story.
            </p>
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'YouTube', 'Twitter'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-studio-gold hover:text-studio-charcoal rounded-lg flex items-center justify-center transition-all duration-300 text-studio-light"
                >
                  {platform.charAt(0)}
                </a>
              ))}
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-studio-light mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Wedding Photography',
                'Wedding Cinematography',
                'Event Photography',
                'Corporate Photography',
                'Portrait Photography',
                'Pre-Wedding Shoots'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-studio-light/70 hover:text-studio-gold transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-studio-light mb-4">Contact</h4>
            <div className="space-y-3 text-studio-light/70">
              <p>Mumbai, Maharashtra, India</p>
              <p>+91 98765 43210</p>
              <p>info@5stardigitalstudio.com</p>
              <div className="pt-4">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-studio-light/60 text-sm">
            © 2024 5 Star Digital Studio. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-studio-light/60 hover:text-studio-gold text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-studio-light/60 hover:text-studio-gold text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
