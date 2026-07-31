import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-banner">
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" 
            alt="Emerald Green Chair" 
          />
        </div>
        <div className="hero-content">
          <h1>Stylish Furniture Bring Beautif</h1>
          <p>
            Unlock the Beauty of Your Home with Our Exclusive Furniture Collections. 
            Modern Designs for Modern Living.
          </p>
          <a href="#features" className="hero-btn">SHOP NOW</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;