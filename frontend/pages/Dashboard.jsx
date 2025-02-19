import React from "react";
import Header from "../component/Header";
import { Navigate, useNavigate } from "react-router-dom";
import img from "../pages/setho.jpeg";
function inputHandler() {}
function Dashboard() {
  const navigate = useNavigate()
  const viewAppointment=()=>{
    navigate("/view_appointment");
  }
  const Newbooking = ()=>{
    navigate("/newbooking");
  }
  const allpatient =()=>{
    navigate("/My_patient");
  }
  const doctor = ()=>{
    navigate("/alldoctor");
  }
  return (
    <>
      <div className="minicontainer">
        <Header />
      </div>
      <div className="para">
        <p className="paraText">
          Thanks for joining us.We are always trying to get your service you can
          view your daily schedule,Reach patient Appointment at home
        </p>
        <div className="img_doctot">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="mainContaner">
        <button className="viewappointment" onClick={viewAppointment}>
          viewappointment
        </button>
        <button className="Newbooking" onClick={Newbooking}>
          New Booking
        </button>
        <button className="Allpatient" onClick={allpatient}>
          All patient
        </button>
        <button className="Alldoctor" onClick={doctor}>
          All Doctor
        </button>
      </div>
    </>
  );
}

export default Dashboard;
