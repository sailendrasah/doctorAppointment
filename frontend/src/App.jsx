import {Route,Routes} from "react-router-dom";
import React from "react";
import Dashboard from "../pages/Dashboard";
import Mypatient from "../pages/Mypatient";
// import Viewappointment from "../pages/Viewappointment";
import Newbooking from "../pages/Newbooking";
import DoctorRegister from "../pages/Doctor_register";
import "./App.css";
import Alldoctor from "../pages/Alldoctor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/my_patient" element={<Mypatient />} />
      {/* <Route path="/view_appointment" element={<Viewappointment />} /> */}
      <Route path="/newbooking" element={<Newbooking />} />
      <Route path="/Alldoctor" element={<Alldoctor />} />
      <Route path="/doctorRegister" element={<DoctorRegister />} />
    </Routes>
  );
}

export default App;
