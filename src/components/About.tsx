import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Wrench, Target, TrendingUp, CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">About Our Company</span>
          </div>
          <h2 className="text-gray-900 mb-6">Building Excellence Since 2008</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            With over 15 years of experience, Innovative Engineering has established itself as a trusted leader in providing 
            safe, efficient, and reliable debris chute solutions for the construction industry.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Side with Decorative Elements */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl transform rotate-3"></div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbXxlbnwxfHx8fDE3NjQzNjg2NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our team"
                className="rounded-2xl shadow-2xl w-full"
              />
              {/* Stats Overlay */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 border-4 border-blue-500">
                <div className="text-blue-600 mb-1">500+</div>
                <p className="text-gray-600">Successful Projects</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                We are committed to providing safe, efficient, and reliable debris chute solutions that help construction 
                and demolition projects maintain clean and organized job sites. Our innovative approach combines quality 
                materials with expert installation to ensure maximum safety and efficiency.
              </p>
              <p className="text-gray-600">
                At Innovative Engineering, we understand the importance of workplace safety and productivity. Our debris 
                chute systems are designed to meet the highest industry standards while being easy to install and maintain.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="text-blue-600" size={24} />
                  <span className="text-blue-600">15+ Years</span>
                </div>
                <p className="text-gray-600">Industry Experience</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-4 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="text-blue-600" size={24} />
                  <span className="text-blue-600">100%</span>
                </div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
                <p className="text-gray-700">OSHA Compliant & Industry Certified</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
                <p className="text-gray-700">24/7 Emergency Support Available</p>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
                <p className="text-gray-700">Custom Solutions for Every Project</p>
              </div>
            </div>
          </div>
        </div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <Award className="text-white" size={32} />
            </div>
            <h4 className="text-gray-900 mb-3">Quality Assurance</h4>
            <p className="text-gray-600 mb-4">
              All our products meet stringent safety standards and quality certifications
            </p>
            <div className="flex items-center gap-2 text-blue-600">
              <span>Learn more</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <Users className="text-white" size={32} />
            </div>
            <h4 className="text-gray-900 mb-3">Expert Team</h4>
            <p className="text-gray-600 mb-4">
              Experienced professionals dedicated to delivering exceptional service
            </p>
            <div className="flex items-center gap-2 text-blue-600">
              <span>Learn more</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <Wrench className="text-white" size={32} />
            </div>
            <h4 className="text-gray-900 mb-3">Installation Support</h4>
            <p className="text-gray-600 mb-4">
              Complete installation assistance and ongoing maintenance support
            </p>
            <div className="flex items-center gap-2 text-blue-600">
              <span>Learn more</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
