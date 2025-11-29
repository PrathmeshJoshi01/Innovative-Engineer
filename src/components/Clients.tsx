import { Building2, Star, Quote } from 'lucide-react';

export function Clients() {
  const testimonials = [
    {
      company: 'ABC Construction Co.',
      message: 'Innovative Engineering provided excellent debris chute solutions for our high-rise project. Their professional service and quality products exceeded our expectations.',
      author: 'John Smith',
      position: 'Project Manager',
      rating: 5
    },
    {
      company: 'Metro Demolition Services',
      message: 'Their team was responsive and the installation was completed ahead of schedule. We have been working with them for 5 years now. Highly recommend their services.',
      author: 'Sarah Johnson',
      position: 'Operations Director',
      rating: 5
    },
    {
      company: 'BuildRight Contractors',
      message: 'We have been using their debris chute systems for multiple projects. Reliable, safe, and easy to work with. The best in the business!',
      author: 'Michael Brown',
      position: 'Site Supervisor',
      rating: 5
    }
  ];

  const clients = [
    'ABC Construction Co.',
    'Metro Demolition Services',
    'BuildRight Contractors',
    'Urban Development Corp.',
    'Skyline Builders',
    'Premier Construction Group',
    'CityScape Projects',
    'Elite Demolition Inc.',
    'Foundation Masters',
    'Tower Construction Ltd.',
    'Modern Build Solutions',
    'Heritage Restoration Co.'
  ];

  return (
    <section id="clients" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-50 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">Client Success</span>
          </div>
          <h2 className="text-gray-900 mb-6">Trusted by Industry Leaders</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            We're proud to partner with leading construction and demolition companies across the region
          </p>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-center text-gray-900 mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative hover:-translate-y-2"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full p-3 shadow-lg">
                  <Quote className="text-white" size={24} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>

                {/* Message */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.message}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <p className="text-blue-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos Section */}
        <div>
          <h3 className="text-center text-gray-900 mb-12">Our Trusted Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-8 bg-white rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100/50 transition-all duration-300 shadow-md hover:shadow-xl border border-gray-100 hover:border-blue-200"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-blue-500 group-hover:to-blue-600 rounded-2xl mb-3 transition-all duration-300 group-hover:scale-110">
                    <Building2 className="text-blue-600 group-hover:text-white transition-colors" size={32} />
                  </div>
                  <p className="text-gray-700 group-hover:text-blue-600 transition-colors">{client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.2) 35px, rgba(255,255,255,.2) 70px)`
            }}></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-white mb-6">Join Our Growing List of Satisfied Clients</h3>
            <p className="max-w-2xl mx-auto text-blue-100 mb-8">
              Experience the difference of working with a team that prioritizes safety, quality, and customer satisfaction
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-white mb-2">98%</div>
                <p className="text-blue-100">Client Retention Rate</p>
              </div>
              <div>
                <div className="text-white mb-2">4.9/5</div>
                <p className="text-blue-100">Average Rating</p>
              </div>
              <div>
                <div className="text-white mb-2">24/7</div>
                <p className="text-blue-100">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
