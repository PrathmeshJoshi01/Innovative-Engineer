import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1609293241092-8c4e5cf64af8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MXx8fHwxNzY0NDA1MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-gray-900/85"></div>
        
        {/* Animated Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block mb-4">
              <span className="bg-blue-500/30 backdrop-blur-sm text-blue-100 px-4 py-2 rounded-full border border-blue-400/30">
                Professional Debris Management Solutions
              </span>
            </div>
            
            <h1 className="text-white mb-6">
              Innovative Engineering Solutions
            </h1>
            
            <p className="mb-8 text-blue-50 opacity-90">
              Leading provider of high-quality debris chute systems for construction and demolition projects. 
              Ensuring safety, efficiency, and compliance on every job site.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 group"
              >
                Get a Free Quote
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToServices}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border border-white/30 shadow-lg"
              >
                Our Services
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-white mb-1">120+</div>
                <p className="text-blue-200">Projects Completed</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-white mb-1">6+</div>
                <p className="text-blue-200">Years Experience</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-white mb-1">100%</div>
                <p className="text-blue-200">Safety Record</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/30 p-3 rounded-xl">
                  <Shield className="text-white" size={28} />
                </div>
                <div className="text-white">
                  <h3 className="text-white mb-2">Safety First</h3>
                  <p className="text-blue-100 opacity-90">
                    All our systems meet OSHA standards and industry safety requirements
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/30 p-3 rounded-xl">
                  <Clock className="text-white" size={28} />
                </div>
                <div className="text-white">
                  <h3 className="text-white mb-2">Fast Installation</h3>
                  <p className="text-blue-100 opacity-90">
                    Quick setup and removal with minimal disruption to your project timeline
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/30 p-3 rounded-xl">
                  <Award className="text-white" size={28} />
                </div>
                <div className="text-white">
                  <h3 className="text-white mb-2">Certified Quality</h3>
                  <p className="text-blue-100 opacity-90">
                    Premium materials and expert craftsmanship on every installation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
