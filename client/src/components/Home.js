import React from 'react'; 
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="text-section">
        <h2>Saanjh Sahayak</h2>
        <p>
          A home for the elderly. Embracing the digital era, with the integration of an LLM model, we empower
          caregivers to efficiently analyze health data, enabling proactive and personalized care. Welcome to a place where
          age is celebrated, and every moment is cherished.
        </p>
      </div>
      <div className="image-section">
        <img
          src="https://res-console.cloudinary.com/dj9kpvsvi/thumbnails/v1/image/upload/v1721504543/ZG9jM19lbTFrZzg=/drilldown"
          alt="Placeholder Image"
        />
      </div>
    </div>
  );
};

export default Home;
