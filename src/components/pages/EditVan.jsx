import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VanService from './mainModel/services/vanService';


function EditVan() {
  const { vanId } = useParams(); // Get the van ID from the URL
  const [van, setVan] = useState(null); // State to hold van data
  const [activeTab, setActiveTab] = useState('prices'); // State to manage which tab is active

  // Fetch van data on component mount
  useEffect(() => {
    VanService.getVanById(vanId).then((data) => {
      setVan(data);
    });
  }, [vanId]);

  // If van data is not loaded yet, show a loading message
  if (!van) return <div>Loading...</div>;

  return (
    <div className="edit-van">
      {/* Van Image at the Top */}
      <div className="van-image-container">
        <img src={van.images[0]} alt={van.name} className="van-image" />
      </div>

      {/* Navbar with options */}
      <nav className="edit-nav">
        <button onClick={() => setActiveTab('prices')}>Prices</button>
        <button onClick={() => setActiveTab('photos')}>Photos</button>
        <button onClick={() => setActiveTab('details')}>Details</button>
      </nav>

      {/* Dynamic Content based on the active tab */}
      <div className="edit-content">
        {activeTab === 'prices' && (
          <div className="prices-tab">
            <h3>Price</h3>
            <p>${van.price}</p>
            {/* Add form for editing price if needed */}
          </div>
        )}

        {activeTab === 'photos' && (
          <div className="photos-tab">
            <h3>Photos</h3>
            {van.images.map((image, index) => (
              <img key={index} src={image} alt={`Van ${index}`} className="van-thumbnail" />
            ))}
            {/* Add form for editing photos if needed */}
          </div>
        )}

        {activeTab === 'details' && (
          <div className="details-tab">
            <h3>Details</h3>
            <p>{van.description}</p>
            {/* Add form for editing description if needed */}
          </div>
        )}
      </div>
    </div>
  );
}

export default EditVan;
