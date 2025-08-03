import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Loader from "../component/Loader";

function Alldoctor() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDoctor = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        // "https://vercel-backend-739n.vercel.app/auth/alldoctor",
        "https://doctor-appointment-ten-dun.vercel.app/auth/alldoctor",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Data fetched successfully:", data?.data);
        setDoctors(data?.data);
      } else {
        alert("Failed to fetch data");
      }
    } catch (error) {
      console.log("Error occurred while fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDoctor();
  }, []);

  return (
    <>
      <div className="main_container">
        <Header />
        <div className="main_Div">
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

          {loading && <Loader />}
        </div>
      </div>
    </>
  );
}

export default Alldoctor;
