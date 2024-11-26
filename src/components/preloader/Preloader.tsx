import React from 'react';
import './preloader.css';

const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <div className="moon-container">
        <div className="moon1">
          <img 
            src="https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/space-rocket-512.png"
            alt="Loading"
            style={{ width: '30px', height: '20px' }}
            className="loader"
          />
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="moon-text">Moonex</div>
      </div>
    </div>
  );
};

export default Preloader;
