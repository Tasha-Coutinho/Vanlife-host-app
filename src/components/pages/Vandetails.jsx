import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Vandetails.css";

export default function Vandetails() {
  return (
    <div>
      <div className="van-nav ">
        <ul>
          <li className="photos btn">
            <NavLink to="photos " className={({ isActive }) => (isActive ? 'active' : '')}>
              photos 
            </NavLink>
          </li>
          <li className=" pricing btn"> 
            <NavLink to=" pricing" className={({ isActive }) => (isActive ? 'active' : '')}>
            pricing
            </NavLink>
          </li>
         
          <li className="Details"> 
            <NavLink to="Details">
           Details
            </NavLink>
          </li>

        </ul>
      </div>
      <Outlet />
    </div>
  );
}

