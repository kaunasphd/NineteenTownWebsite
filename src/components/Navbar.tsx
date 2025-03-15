import React from 'react';
import { Menu, X, Home, Map, Building2, Coins, Phone, Leaf } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <Home size={20} />, href: '#home' },
    { name: 'Master Plan', icon: <Map size={20} />, href: '#master-plan' },
    { name: 'Sectors', icon: <Building2 size={20} />, href: '#sectors' },
    { name: 'Investment', icon: <Coins size={20} />, href: '#investment' },
    { name: 'Sustainability', icon: <Leaf size={20} />, href: '#sustainability' },
    { name: 'Contact', icon: <Phone size={20} />, href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-dark-950/95 backdrop-blur-sm z-50 shadow-md border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-2xl text-gold-400">
            Nineteen
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-gold-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-dark-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-300 hover:text-gold-400 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;