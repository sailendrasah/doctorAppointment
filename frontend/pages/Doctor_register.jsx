import React, { useState } from "react";
import Header from "../component/Header";
import { toast } from "react-toastify";

function doctors() {
  
  
  
  
  return (
    <>
      <Header />

      <div className="container">
        
        <div className="login_form">
          <input
            type="text"
        
            className="inputField"
            placeholder="enter name of doctor"
      
            
          />
          <input
            type="text"
            className="inputField"
            placeholder="enter qulification of patient"
            
          />
          <input
            type="text"
            className="inputField"
            placeholder="enter spacialty of patient"
        
            
          />
          <input
            type="text"
            className="inputField"
            placeholder="enter contact of doctor"
          
  
          />
          <br />
          <button className="btn" >
            submit
          </button>
        </div>
      </div>
    </>
  );
}

export default doctors;
