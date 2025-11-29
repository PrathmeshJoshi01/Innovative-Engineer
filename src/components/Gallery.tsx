import { ImageWithFallback } from './figma/ImageWithFallback';
import { ZoomIn } from 'lucide-react';
import { useState } from 'react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1666137270524-5131ac07314d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBkZWJyaXMlMjBjaHV0ZXxlbnwxfHx8fDE3NjQ0MTkxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Debris Chute Installation',
      category: 'Installation'
    },
    {
      url: 'https://images.unsplash.com/photo-1751054579530-1481ddd4b753?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzYWZldHklMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY0NDE5MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Safety Equipment',
      category: 'Safety'
    },
    {
      url: 'https://images.unsplash.com/photo-1622285827850-9acb222db07c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0MzQ4MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Industrial Project',
      category: 'Commercial'
    },
    {
      url: 'https://images.unsplash.com/photo-1609293241092-8c4e5cf64af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzY0NDA1MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Construction Site',
      category: 'Projects'
    },
    {
      url: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjQzNzUwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Modern Building Project',
      category: 'Residential'
    },
    {
      url: 'https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbXxlbnwxfHx8fDE3NjQzNjg2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Our Team at Work',
      category: 'Team'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">Our Work</span>
          </div>
          <h2 className="text-gray-900 mb-6">Project Gallery</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Explore our portfolio of successful projects and installations across various industries and project types.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <ZoomIn className="mb-4 transform group-hover:scale-110 transition-transform" size={40} />
                  <h4 className="text-white mb-2 text-center">{image.title}</h4>
                  <span className="bg-blue-500 px-3 py-1 rounded-full">{image.category}</span>
                </div>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/95 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-white mb-1">{image.title}</h4>
                <span className="text-blue-400">{image.category}</span>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full shadow-lg">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-blue-600 mb-2">15+</div>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-blue-600 mb-2">200+</div>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-blue-600 mb-2">50+</div>
            <p className="text-gray-600">Team Members</p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="max-w-5xl w-full">
            <ImageWithFallback
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-white mb-2">{images[selectedImage].title}</h3>
              <span className="text-blue-400">{images[selectedImage].category}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
