import React, { useState } from "react";
import Header from "../component/Header";
import { toast } from "react-toastify";

function Newbooking() {
  const [data, setData] = useState({
    name: "",
    age: "",
    address: "",
    phoneno: "",
  });
  function inputEvent(e) {
    setData((preData) => {
      return {
        ...preData,
        [e.target.name]: e.target.value,
      };
    });
  }
  const submitHandler = async() => {
    console.log("clicked");
    if (
      data.name === "" ||
      data.age === "" ||
      data.address === "" ||
      data.phoneno === ""
    ) {
      toast.error(`please the form proprly`);
    } else {
      const response = await fetch(
        "http://localhost:3000/auth/viewappointment",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      console.log(response);
      if (response.ok) {
        toast.success("sucessful");
      }
    }
  };
  return (
    <>
      <Header />

      <div className="container">
        {/* <img src={img2} className="img" alt="appointment img" /> */}
        <div className="login_form">
          <input
            type="text"
            name="name"
            className="inputField"
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
            id="data.phoneno"
            onChange={inputEvent}
          />
          <br />
          <button className="btn" onClick={submitHandler}>
            submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Newbooking;
