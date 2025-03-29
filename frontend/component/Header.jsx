import React from 'react';
import img from "../pages/download.png";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


function Header() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={img} alt="" />
          <h1>logo</h1>
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
                MyPatient
              </Link>
            </li>
            <li>
              <Link to={"/newbooking"} className="link">
                new booking
              </Link>
            </li>
            <li>
            
            </li>
            <li>
              <Link to={"/alldoctor"} className="link">
                All doctor 
              </Link>
              <Link to={"/doctorRegister"} className="link">
                DoctorRegister
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header