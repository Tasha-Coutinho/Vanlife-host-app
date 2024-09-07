import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./font awesome/font-awesome-4.7.0/css/font-awesome.min.css";
import "./Navbar.css";
// import React, { useState } from 'react';

export const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <Link to="/" className="title">#Vanlife</Link>
      <ul>
        <li>
          <Link to="/dashboard" className="nv-link">Dashboard</Link>
        </li>

        <li>
          <Link to="/income" className="nv-link">Income</Link>
        </li>

        <li>
          <Link to="/vans" className="nv-link">Vans</Link>
        </li>

        <li>
          <Link to="/reviews" className="nv-link">Reviews</Link>
        </li>

        <li className="nv-menu" onClick={toggleDropdown}>
          <i className="fa fa-bars"></i>
          <ul className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
            <li>
              <Link to="/dashboard" className="nv-link2">Dashboard</Link>
            </li>
            <li>
              <Link to="/reviews" className="nv-link2">Reviews</Link>
            </li>
            <li>
              <Link to="/income" className="nv-link2">Income</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="https://car-rental-app-rho-kohl.vercel.app/">
            <i className="fa fa-user-o"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
