import React, { useEffect, useState } from "react";
import Header from "../component/Header";
// import "./MyPatient.css"; // Import CSS file

function MyPatient() {
  const [patients, setPatients] = useState([]);

  const getPatient = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/allpatient", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Data fetched successfully:", data);
        setPatients(data);
      }
    } catch (error) {
      console.log("Error from panel:", error);
    }
  };
  const deletePatient = async(id)=>{
    
      const response = await fetch(`http://localhost:3000/auth/allpatient/delete/${id}`, {
        method: "DELETE",
      });
    getPatient();


  }

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
