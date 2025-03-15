import React from 'react';
import { MapPin } from 'lucide-react';

const MasterPlan = () => {
  const sectors = [
    { name: 'Sector A', features: ['Luxury Villas', 'Central Park', 'Mosque'] },
    { name: 'Sector B', features: ['Family Homes', 'School', 'Shopping Center'] },
    { name: 'Sector C', features: ['Apartments', 'Medical Complex', 'Sports Facility'] },
    { name: 'Sector D', features: ['Commercial Hub', 'Office Spaces', 'Restaurant District'] },
    { name: 'Sector E', features: ['Residential Plots', 'Community Center', 'Park'] },
    { name: 'Sector F', features: ['University Campus', 'Research Center', 'Library'] },
    { name: 'Sector G', features: ['Adventure Hills Park', 'Water Lake', 'Future Extension'] },
  ];

  return (
    <section id="master-plan" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gold-400 sm:text-4xl">
            Master Plan
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Strategically planned sectors for optimal living and investment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div
              key={sector.name}
              className="bg-dark-800 border border-gold-500/20 rounded-lg p-6 hover:border-gold-500/40 transition-colors"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-gold-400 mr-2" />
                <h3 className="text-xl font-semibold text-gold-300">
                  {sector.name}
                </h3>
              </div>
              <ul className="space-y-2">
                {sector.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">
            Total Area: 3420 Kanals | Location: Near Islamabad Sector I-17
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-gold-400 text-gold-400 rounded-lg hover:bg-gold-400 hover:text-dark-900 transition-colors"
          >
            Request Detailed Map
          </a>
        </div>
      </div>
    </section>
  );
};

export default MasterPlan;