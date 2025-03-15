import React from 'react';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-dark-950/60"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-gold-400">Nineteen</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            A premium residential and commercial development spanning 3420 Kanals near Islamabad sector I-17
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#master-plan"
              className="px-8 py-3 bg-gold-600 text-white rounded-lg hover:bg-gold-700 transition-colors font-semibold"
            >
              View Master Plan
            </a>
            <a
              href="#investment"
              className="px-8 py-3 bg-dark-800 text-gold-400 rounded-lg hover:bg-dark-700 transition-colors font-semibold border border-gold-400"
            >
              Investment Options
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;