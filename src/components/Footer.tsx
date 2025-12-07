import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Leaf } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
     <footer className="bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900 text-white relative overflow-hidden">
     {/* <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"> */}
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 20 L35 25 L30 30 L25 25 Z M30 35 L25 40 L20 35 L25 30 Z M35 35 L40 40 L35 45 L30 40 Z' fill='%2316a34a' fill-opacity='0.1'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* 
      // Map Section with leaf overlay
      <div className="relative z-10 w-full h-80 md:h-96 border-b-4 border-green-600">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841372113913!2d-73.98731368459375!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629795107876!5m2!1sen!2sus"
          width="100%"
          height="300%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Office Location Map"
          className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        ></iframe>
        // {/* Eco badge on map 
        <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse">
          <Leaf size={16} />
          <span>Visit Our Green Office</span>
        </div>
      </div>   */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br  p-2 rounded-lg">
                {/* <Wrench className="text-white" size={24} /> */}
                <img src="/assets/web_logo.png" className='h-14 w-auto' />
              </div>
              <div className="flex flex-col">
                <span className="text-white leading-tight">Innovative</span>
                <span className="text-blue-400 leading-tight">Engineering</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Leading provider of debris chute solutions for construction and demolition projects since 2008.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all"></span>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all"></span>
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all"></span>
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all"></span>
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('clients')}
                  className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all"></span>
                  Clients
                </button>
              </li>
            </ul>
          </div>

          {/* Our Services
          <div>
            <h4 className="text-white mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Debris Chute Systems
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                MS CHUTE
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                HDEP / PVC CHUTE
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Custom Solutions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                24/7 Emergency Support
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p>+91 86 98 028 683</p>
                  <p className="text-gray-500">Mon-Fri 8AM-6PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p>innovativeengineering.project01@gmail.com</p>
                  <p className="text-gray-500">We reply within 24h</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p>Survey No.37, Behind Nilambari Trader’s,</p>
                  <p>Walhekarwadi Main Road, Chinchwad Pune,</p>
                  <p>Maharashtra 411033</p>
                </div>
              </li>
            </ul>
          </div>
        
        <div className="container mx-auto flex flex-col items-center">
            <img 
              src="/assets/footer_logo.png"   // place your transparent logo here
              alt="Company Logo"
              className="w-28 h-auto mb-3"
            />
        </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {currentYear} Innovative Engineering. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full blur-3xl opacity-10"></div>
    </footer>
  );
}
