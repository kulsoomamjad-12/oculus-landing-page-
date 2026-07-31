import React from 'react';

const Card = ({ title, description, imageUrl, badgeText }) => {
  return (
    <div className="card">
      <div className="card-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="show-more-btn">SHOW MORE</button>
      </div>
      <div className="card-img-wrapper">
        <img src={imageUrl} alt={title} />
        {badgeText && <span className="card-badge">{badgeText}</span>}
      </div>
    </div>
  );
};

export default Card;