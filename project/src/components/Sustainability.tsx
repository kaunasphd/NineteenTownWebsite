import React from 'react';
import { Leaf, Sun, Recycle, Trees } from 'lucide-react';

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gold-400 sm:text-4xl">
            Sustainable Living
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Building a greener future for generations to come
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80"
              alt="Sustainable Community"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-8">
            {[
              {
                icon: <Sun className="w-6 h-6 text-gold-400" />,
                title: 'Solar Power Integration',
                description: 'Renewable energy solutions for homes and public spaces',
              },
              {
                icon: <Trees className="w-6 h-6 text-gold-400" />,
                title: 'Green Spaces',
                description: '30% area dedicated to parks and natural landscapes',
              },
              {
                icon: <Recycle className="w-6 h-6 text-gold-400" />,
                title: 'Waste Management',
                description: 'Advanced recycling and waste reduction programs',
              },
              {
                icon: <Leaf className="w-6 h-6 text-gold-400" />,
                title: 'Eco-friendly Construction',
                description: 'Sustainable materials and building practices',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gold-300 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;