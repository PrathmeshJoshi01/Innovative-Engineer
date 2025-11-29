import { Wrench, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                <Wrench className="text-white" size={24} />
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

          {/* Our Services */}
          <div>
            <h4 className="text-white mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Debris Chute Systems
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Installation Services
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">•</span>
                Maintenance & Support
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
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p>+1 (555) 123-4567</p>
                  <p className="text-gray-500">Mon-Fri 8AM-6PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p>info@innovativeeng.com</p>
                  <p className="text-gray-500">We reply within 24h</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p>123 Engineering Way</p>
                  <p>Business District</p>
                  <p>City, State 12345</p>
                </div>
              </li>
            </ul>
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
