import React from 'react';
import './Footer.css';
import radiance_logo from '../../images/radiance_logo.png';

const Footer = ({ handleReset }) => {
  return (
    <div className="footer">
      <p className="home-link" onClick={() => handleReset()}>
        HOME
      </p>
      <img className="radiance-logo-footer" src={radiance_logo} />
      <p className="favorite-link">FAVORITES</p>
    </div>
  );
};
export default Footer;
