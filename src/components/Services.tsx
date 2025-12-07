import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Package, Settings, Headphones, Sparkles, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Package,
      title: 'Debris Chute Systems',
      description: 'Heavy-duty debris chutes designed for construction and demolition projects of all sizes.',
      features: [
        'Durable construction materials',
        'Easy assembly and disassembly',
        'Various sizes available',
        'Weather-resistant design'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Settings,
      title: 'FRP Chute',
      description: 'Durable and corrosion-resistant FRP chutes built for efficient material handling and long-term performance.',
      features: [
        'High-strength, lightweight FRP material',
        'Corrosion and chemical resistant',
        'Customizable dimensions and design',
        'Low maintenance and long service life'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    
    {
      icon: Settings,
      title: 'HDPE / PVC Chute',
      description: 'Robust and weather-resistant HDPE/PVC chutes designed for smooth material flow and long-lasting performance in industrial environments.',
      features: [
        'High durability with impact resistance',
        'Smooth inner surface for efficient material flow',
        'UV, moisture, and corrosion resistant',
        'Lightweight and easy to install'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Headphones,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support services to keep your systems running smoothly.',
      features: [
        'Regular inspections',
        'Repair and replacement services',
        '24/7 emergency support',
        'Parts and accessories'
      ],
      color: 'from-green-500 to-green-600'
    },

  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, #3b82f6 35px, #3b82f6 70px)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">What We Offer</span>
          </div>
          <h2 className="text-gray-900 mb-6">Products and Services</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Comprehensive debris chute solutions tailored to your construction and demolition needs. 
            From installation to maintenance, we've got you covered.
          </p>
        </div>

        {/* Featured Image */}
        <div className="mb-20 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 rounded-3xl blur-2xl opacity-30"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1666137270524-5131ac07314d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBkZWJyaXMlMjBjaHV0ZXxlbnwxfHx8fDE3NjQ0MTkxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Debris chute system"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-white mb-2">Premium Debris Chute Systems</h3>
              <p className="text-white/90">
                Engineered for durability, safety, and efficiency on every construction site
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.2) 35px, rgba(255,255,255,.2) 70px)`
            }}></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-white mb-4">Ready to Get Started?</h3>
            <p className="max-w-2xl mx-auto text-blue-100 mb-8">
              Contact us today for a free consultation and quote. Our team is ready to help you find the perfect 
              debris management solution for your project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 group"
              >
                Request a Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border-2 border-white/30">
                Call Us: +91 8793867942
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
