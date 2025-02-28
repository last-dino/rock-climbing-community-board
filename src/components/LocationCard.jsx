import React from 'react';
import './LocationCard.css';

function LocationCard({ location }) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={location.imageUrl} alt={location.name} className="card-image" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{location.name}</h2>
        <p className="card-location"><strong>Location:</strong> {location.location}</p>
        <div className="card-details">
          <ul className="climb-types">
            {location.climbTypes.map((type) => (
              <li className="climb-type">{type}</li>
            ))}
          </ul>
          <p className="card-description">{location.description}</p>
        </div>
        <a href={location.websiteUrl} className="card-button" target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </div>
    </div>
  );
}

export default LocationCard;