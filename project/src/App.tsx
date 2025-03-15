import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MasterPlan from './components/MasterPlan';
import Investment from './components/Investment';
import Sustainability from './components/Sustainability';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />
      <Hero />
      <Features />
      <MasterPlan />
      <Investment />
      <Sustainability />
      <Contact />
    </div>
  );
}

export default App;