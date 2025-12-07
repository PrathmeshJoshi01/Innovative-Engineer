import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { db } from "../firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
   try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        createdAt: serverTimestamp()
      });

      alert("Thank you! Your message has been stored in our database.");

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });

    } catch (error) {
      console.error("Error adding message: ", error);
      alert("❗ ERROR — message was not sent. Check console.");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     setFormData({ ...formData, [e.target.name]: e.target.value }); 
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-100 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full">Get In Touch</span>
          </div>
          <h2 className="text-gray-900 mb-6">Contact Us</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Have a question or ready to start your project? Reach out to our team and we'll get back to you promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-gray-900 mb-6">Let's Talk</h3>
              <p className="text-gray-600 mb-8">
                We're here to answer your questions and provide expert guidance for your debris management needs.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all hover:shadow-xl group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-2">Phone</h4>
                    <p className="text-blue-600 mb-1">+91 86 98 028 683</p>
                    <p className="text-gray-500">Mon-Fri 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all hover:shadow-xl group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-2">Email</h4>
                    <p className="text-blue-600 mb-1">innovativeengineering.project01@gmail.com</p>
                    <p className="text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all hover:shadow-xl group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600">
                     Survey No.37, Behind Nilambari Trader’s,<br />
                      Walhekarwadi Main Road, Chinchwad Pune,<br />
                     Maharashtra 411033
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 transition-all hover:shadow-xl group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-2">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 3:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl text-white shadow-xl">
              <h4 className="text-white mb-2">24/7 Emergency Support</h4>
              <p className="text-orange-100 mb-3">
                For urgent matters, our emergency team is available around the clock.
              </p>
              <p className="text-white">Emergency: +91 8793867942</p>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
              <h3 className="text-gray-900 mb-2">Send Us a Message</h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block mb-2 text-gray-700">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or ask any questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-gray-500">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Map or Additional CTA */}
        <div className="mt-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.2) 35px, rgba(255,255,255,.2) 70px)`
            }}></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-white mb-4">Prefer to Talk Directly?</h3>
            <p className="max-w-2xl mx-auto text-blue-100 mb-8">
              Our team is ready to discuss your project needs and provide expert recommendations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+91 86 98 028 683"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                <Phone size={20} />
                Call Us Now
              </a>
              <a
                href="mailto: innovativeengineering.project01@gmail.com"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all border-2 border-white/30 inline-flex items-center gap-2"
              >
                <Mail size={20} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
