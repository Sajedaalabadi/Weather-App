import React from 'react';
import"../Css/welcomeStyle.css"
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="welcome-page text-center d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div>
        <h1>Welcome To Weather App</h1>
        <button>
        <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Get Started</Link>

        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
