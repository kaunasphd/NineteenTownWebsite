import React from 'react';
import { TrendingUp, Clock, Shield, Banknote } from 'lucide-react';

const Investment = () => {
  const plans = [
    {
      title: 'Residential Plots',
      sizes: ['5 Marla', '10 Marla', '1 Kanal'],
      features: ['Prime Location', 'Flexible Payment Plans', 'High ROI Potential'],
      price: 'Starting from PKR 5M',
    },
    {
      title: 'Commercial Plots',
      sizes: ['4 Marla', '8 Marla'],
      features: ['Main Boulevard', 'Corner Plots Available', 'Immediate Possession'],
      price: 'Starting from PKR 12M',
    },
    {
      title: 'Luxury Villas',
      sizes: ['10 Marla', '1 Kanal'],
      features: ['Modern Design', 'Smart Home Features', 'Private Garden'],
      price: 'Starting from PKR 25M',
    },
  ];

  return (
    <section id="investment" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gold-400 sm:text-4xl">
            Investment Opportunities
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Secure your future with premium real estate investment options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-dark-800 rounded-lg shadow-lg border border-gold-500/20 hover:border-gold-500/40 transition-colors p-6"
            >
              <h3 className="text-xl font-semibold text-gold-300 mb-4">
                {plan.title}
              </h3>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-400 mb-2">Available Sizes</h4>
                <div className="flex flex-wrap gap-2">
                  {plan.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-3 py-1 bg-gold-400/10 text-gold-300 rounded-full text-sm border border-gold-400/20"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-lg font-semibold text-gold-400 mb-4">
                {plan.price}
              </div>
              <button className="w-full px-4 py-2 bg-gold-600 text-dark-900 rounded-lg hover:bg-gold-700 transition-colors font-semibold">
                Get Details
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <TrendingUp />, title: 'High Returns', text: 'Expected annual appreciation of 15-20%' },
            { icon: <Clock />, title: 'Easy Installments', text: '3-4 years payment plan available' },
            { icon: <Shield />, title: 'Secure Investment', text: 'Fully approved by relevant authorities' },
            { icon: <Banknote />, title: 'Transparent Pricing', text: 'No hidden charges or fees' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-3 bg-gold-400/10 rounded-full mb-4 border border-gold-400/20">
                <div className="text-gold-400">{item.icon}</div>
              </div>
              <h3 className="text-lg font-semibold text-gold-300 mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Investment;