import React, { useEffect, useState } from "react";
import Header from "../component/Header";

function Alldoctor() {
  const [doctors, setDoctors] = useState([]);

  const getDoctor = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/alldoctor", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Data fetched successfully:", data?.data);
        setDoctors(data?.data);
      } else {
        alert("Failed to fetch data");
      }
    } catch (error) {
      console.log("Error occurred while fetching data:", error);
    }
  };
 

  useEffect(() => {
    getDoctor();
  }, []);

  return (
    <>
      <div className="main_container">
        <Header />
        <h1>All Doctors</h1>

        <table className="doctor-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Qualification</th>
              <th>Specialty</th>
              <th>Contact</th>
              <th>Location</th>
              
            </tr>
          </thead>
          <tbody>
            {doctors.map((currEle, index) => {
              const { name, qualification, specialty, contact, location } =
                currEle;
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{qualification}</td>
                  <td>{specialty}</td>
                  <td>{contact}</td>
                  <td>{location}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Alldoctor;
