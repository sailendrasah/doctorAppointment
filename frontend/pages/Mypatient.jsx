import React, { useEffect, useState } from "react";
import Header from "../component/Header";
// import "./MyPatient.css"; // Import CSS file

function MyPatient() {
  const [patients, setPatients] = useState([]);

  const getPatient = async () => {
    try {
      const response = await fetch(
        "https://doctor-appointment-ten-dun.vercel.app/auth/allpatient",
        // "https://vercel-backend-739n.vercel.app/auth/allpatient",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Data fetched successfully:", data);
        setPatients(data);
      }
    } catch (error) {
      console.log("Error from panel:", error);
    }
  };
  const deletePatient = async (id) => {
    try {
      const response = await fetch(
        `https://vercel-backend-739n.vercel.app/auth3/allpatient/delete/${id}`, // Correct the URL path here
        {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
        }
      );

      if (response.ok) {
        getPatient(); // Refresh the patient list after successful deletion
      } 
      //   console.error("Failed to delete patient:", response.statusText);
      // }
    } catch (error) {
      console.log("Error occurred while deleting patient:", error);
    }
  };

        


  
  useEffect(() => {
    getPatient();
  }, []);
   

  return (
    <>
      <Header />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Phone No</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((currEle, index) => {
              const { name, age, address, phoneno } = currEle;
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{address}</td>
                  <td>{phoneno}</td>
                  <td><button onClick={()=>deletePatient(currEle._id)}>Delete</button></td>
                </tr>
              );
            })} 
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyPatient;
