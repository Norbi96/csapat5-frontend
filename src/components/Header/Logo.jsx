import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div className="header-left">
      <img
        src="https://www.freepnglogos.com/uploads/logo-3d-png/3d-custom-logo-design-calgary-logo-designer-calgary-5.png"
        alt="logo"
      />
      <div className="logo">
        <Link to="/" id="secondary-btn">
          <h3>TEAM FIVE</h3>
          <h5>1 órán belül nálad a rendelésed!</h5>
        </Link>
      </div>
    </div>
  );
}
