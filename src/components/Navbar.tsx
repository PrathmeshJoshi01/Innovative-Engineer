import { useState, useEffect } from 'react';
import { Menu, X, Wrench } from 'lucide-react';
// import logo from
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-gradient-to-br from-white-600  p-2 rounded-lg">
              {/* <Wrench className="text-white" size={24} /> */}
              <img src="./assets/web_logo.png" className="h-12 w-auto" alt='logo'/>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 leading-tight">Innovative</span>
              <span className="text-blue-600 leading-tight">Engineering</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              Products & Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className="text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
            >
              Contact Us
            </button>
            <a
               href="https://drive.google.com/uc?export=download&id=1oPszO7tzdedpj5T7vuPm_M-lcjVjQzCO"
              download="InnovativeEngineering_Brochure.pdf"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Download Our Brochure
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pt-4 pb-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-3 bg-white rounded-lg shadow-lg p-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-3 rounded-lg hover:bg-blue-50"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-3 rounded-lg hover:bg-blue-50"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-3 rounded-lg hover:bg-blue-50"
              >
                Products & Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-3 rounded-lg hover:bg-blue-50"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left px-4 py-3 rounded-lg hover:bg-blue-50"
              >
                Clients
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md text-left"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
