import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gold-400 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Get in touch with our sales team for more information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-dark-800 rounded-lg shadow-lg border border-gold-500/20 p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-dark-900 border-gold-500/20 text-gray-200 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-dark-900 border-gold-500/20 text-gray-200 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md bg-dark-900 border-gold-500/20 text-gray-200 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-dark-900 border-gold-500/20 text-gray-200 shadow-sm focus:border-gold-500 focus:ring-gold-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gold-600 text-dark-900 py-3 px-6 rounded-lg hover:bg-gold-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-dark-800 rounded-lg shadow-lg border border-gold-500/20 p-8">
              <h3 className="text-xl font-semibold text-gold-300 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <Phone className="w-5 h-5 text-gold-400" />,
                    title: 'Phone',
                    content: '+92 XXX XXXXXXX',
                  },
                  {
                    icon: <Mail className="w-5 h-5 text-gold-400" />,
                    title: 'Email',
                    content: 'info@nineteen.com',
                  },
                  {
                    icon: <MapPin className="w-5 h-5 text-gold-400" />,
                    title: 'Address',
                    content: 'Nineteen Sales Office, Sector I-17, Islamabad',
                  },
                  {
                    icon: <Clock className="w-5 h-5 text-gold-400" />,
                    title: 'Office Hours',
                    content: 'Mon - Sat: 9:00 AM - 6:00 PM',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-medium text-gold-300">{item.title}</h4>
                      <p className="text-gray-300">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-800 rounded-lg shadow-lg border border-gold-500/20 p-8">
              <h3 className="text-xl font-semibold text-gold-300 mb-4">
                Visit Our Site Office
              </h3>
              <p className="text-gray-300">
                Experience the future of living firsthand. Visit our site office for a detailed presentation and tour of the development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;