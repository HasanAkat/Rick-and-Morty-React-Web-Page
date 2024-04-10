import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent border-0 shadow-none mb-5 justify-content-end" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" className="logo"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <Link to='/episodes' className="nav-link" style={{ color: 'white' }}>Episodes</Link>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <Link to='/locations' className="nav-link" style={{ color: 'white' }}>Locations</Link>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <Link to='/characters' className="nav-link active" aria-current="page" style={{ color: 'white' }}>Characters</Link>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <Link to='/favorites' className="nav-link" style={{ color: 'white' }}>Favorites</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;