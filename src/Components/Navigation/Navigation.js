import React from 'react';
import radiance_logo from '../../images/radiance_logo.png';
import './Navigation.css';

const Navigation = ({ handleClick }) => {
  return (
    <section className="Nav">
      <div className="logo-container">
        <img className="radiance-logo" src={radiance_logo} />
      </div>
      <div className="welcome-container">
        <h1 className="welcome">Hello, you lovely human.</h1>
        <button onClick={() => handleClick()} className="affirmation-button">
          Take a breath
        </button>
      </div>
    </section>
  );
};
export default Navigation;
