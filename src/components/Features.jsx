import React from 'react';
import Card from './Card';
import { servicesData } from '../data/servicesData';

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="cards-grid">
        {servicesData.map((item) => (
          <Card 
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            badgeText={item.badgeText}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;