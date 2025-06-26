
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    services: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    
    // Send to WhatsApp
    const whatsappMessage = `Hi! I'm ${formData.name}. I'm interested in your photography services.
    
Contact Details:
Phone: ${formData.phone}
Email: ${formData.email}
Event Date: ${formData.eventDate || 'Not specified'}
Services Needed: ${formData.services || 'Not specified'}

Message: ${formData.message || 'No additional message'}`;
    
    const whatsappUrl = `https://wa.me/919987388744?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. You'll be redirected to WhatsApp to complete your message.",
    });
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      eventDate: "",
      services: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in your photography services. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/919987388744?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <section id="contact" className="py-20 bg-studio-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Let's Create <span className="text-gradient">Magic Together</span>
          </h2>
          <p className="text-xl text-studio-light/70 max-w-3xl mx-auto">
            Ready to capture your special moments? Get in touch with us to discuss 
            your photography needs and let's create something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-studio-light mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center mr-4">
                  <MapPin size={20} className="text-studio-charcoal" />
                </div>
                <div>
                  <h4 className="text-studio-light font-semibold">Studio Location</h4>
                  <p className="text-studio-light/70">Shop no 13, Manshi Classic, Kashigaon, Mira road east, Thane, Maharashtra</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center mr-4">
                  <Phone size={20} className="text-studio-charcoal" />
                </div>
                <div>
                  <h4 className="text-studio-light font-semibold">Phone</h4>
                  <p className="text-studio-light/70">+91 9987388744</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 gold-gradient rounded-lg flex items-center justify-center mr-4">
                  <Mail size={20} className="text-studio-charcoal" />
                </div>
                <div>
                  <h4 className="text-studio-light font-semibold">Email</h4>
                  <p className="text-studio-light/70">julietandrew9999@gmail.com</p>
                </div>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover-scale mb-8"
            >
              <MessageCircle size={20} className="mr-3" />
              Chat on WhatsApp
            </button>
            
            {/* Social Media */}
            <div>
              <h4 className="text-studio-light font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-gray-800 hover:bg-studio-gold hover:text-studio-charcoal rounded-lg flex items-center justify-center transition-all duration-300 text-studio-light"
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-studio-light font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-studio-gold focus:border-transparent text-studio-light placeholder-gray-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-studio-light font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-studio-gold focus:border-transparent text-studio-light placeholder-gray-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-studio-light font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-studio-gold focus:border-transparent text-studio-light placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventDate" className="block text-studio-light font-medium mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-studio-gold focus:border-transparent text-studio-light"
                  />
                </div>
                
                <div>
                  <label htmlFor="services" className="block text-studio-light font-medium mb-2">
                    Services Needed
                  </label>
                  <select
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-studio-gold focus:border-transparent text-studio-light"
                  >
                    <option value="">Select a service</option>
                    <option value="wedding-photography">Wedding Photography</option>
                    <option value="wedding-cinematography">Wedding Cinematography</option>
                    <option value="event-photography">Event Photography</option>
                    <option value="corporate-photography">Corporate Photography</option>
                    <option value="portrait-photography">Portrait Photography</option>
                    <option value="multiple-services">Multiple Services</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-studio-light font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-studio-gold focus:border-transparent text-studio-light placeholder-gray-500 resize-none"
                  placeholder="Tell us about your event and any specific requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full gold-gradient text-studio-charcoal px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-studio-gold/30 transition-all duration-300 hover-scale"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
