import React from 'react';
import { School, Building, Fuel as Mosque, Trees as Tree, Stethoscope as Hospital, Droplet } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <School className="w-8 h-8 text-gold-400" />,
      title: 'Educational Hub',
      description: 'Schools, College, and University facilities for all academic levels',
    },
    {
      icon: <Building className="w-8 h-8 text-gold-400" />,
      title: 'Commercial Areas',
      description: 'Prime commercial spaces for businesses and shopping centers',
    },
    {
      icon: <Mosque className="w-8 h-8 text-gold-400" />,
      title: 'Religious Facilities',
      description: 'Beautiful mosques in each sector for spiritual well-being',
    },
    {
      icon: <Tree className="w-8 h-8 text-gold-400" />,
      title: 'Parks & Recreation',
      description: 'Family parks and Adventure Hills Park for outdoor activities',
    },
    {
      icon: <Hospital className="w-8 h-8 text-gold-400" />,
      title: 'Medical Complex',
      description: 'State-of-the-art medical facilities for healthcare needs',
    },
    {
      icon: <Droplet className="w-8 h-8 text-gold-400" />,
      title: 'Adventure Water Lake',
      description: 'Recreational water facility for family entertainment',
    },
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gold-400 sm:text-4xl">
            World-Class Amenities
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Everything you need for modern, comfortable living
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-dark-800 p-6 rounded-lg shadow-lg border border-gold-500/20 hover:border-gold-500/40 transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gold-300 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;