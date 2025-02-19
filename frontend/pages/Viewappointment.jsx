import React, { useState } from 'react';
import Header from '../component/Header';
import { toast } from "react-toastify";


function View_appointment() {
  const [data,setData] = useState({
    name:"",
    age:"",
    address:"",
    phoneno:"",
  })
  function inputEvent(e){
setData((preData) => {
  return {
    ...preData,
    [e.target.name]: e.target.value,
  };
});
  }
  const SubmitEvent=async(e)=>{
    e.preventDefault();
    console.log("clicked");
    if(data.name===""||
    data.age===""||
    data.address===""||
    data.phoneno){
      toast.error("please fill the form porpely")
    }
    else{
    const response = await fetch("http://localhost:3000/auth/viewappointment",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body:JSON.stringify(data)
      }
    );
    console.log(response)
    if(response.ok){
      toast.success("sucessful")
    }

  }
}
  return (
    <>
      <Header />

      <div className="container">
        <div className="login_form">
          <input
            type="text"
            className="inputField"
            name="name"
            placeholder="enter name of patient"
            id="data.name"
            onChange={inputEvent}
          />
          <input
            type="number"
            className="inputField"
            name="age"
            placeholder="enter age of patient"
            id="data.age"
            onChange={inputEvent}
          />
          <input
            type="text"
            className="inputField"
            name="address"
            placeholder="enter address of patient"
            id="data.address"
            onChange={inputEvent}
          />
          <input
            type="text"
            className="inputField"
            name="phoneno"
            placeholder="enter phone no. of patient"
            id="data.phonno"
            onChange={inputEvent}
          />
          <br />
          <button className="btn" onClick={SubmitEvent}>
            submit
          </button>
        </div>
      </div>
    </>
  );
}

export default View_appointment;