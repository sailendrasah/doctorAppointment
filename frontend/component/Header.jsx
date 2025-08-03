import React from 'react';
import img from "../pages/download.png";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={img} alt="" />

        </div>

        <div className="linkContainer">
          <ul className="nav-link">
            <li>
              <Link to={"/"} className="link">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to={"/My_patient"} className="link">
                My Patients
              </Link>
            </li>
            <li>
              <Link to={"/alldoctor"} className="link">
                All doctors 
              </Link>
            </li>
            <li>
              <Link to={"/newbooking"} className="booking_btn">
                Book Your Slot
              </Link>
            </li>
            <li>
              <Link to={"/doctorRegister"} className="link_reg">
                Register as Doctor
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header