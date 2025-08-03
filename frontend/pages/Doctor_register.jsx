import { useState } from "react";
import Header from "../component/Header";
import { toast } from "react-toastify";

function Newbooking() {
  const [data, setData] = useState({
    name: "",
    qualification: "",
    specialty: "",
    contact: "",
    location: "",
  });
  function inputEvent(e) {
    setData((preData) => {
      return {
        ...preData,
        [e.target.name]: e.target.value,
      };
    });
  }
  const submitHandler = async () => {
    console.log("clicked");
    if (
      data.name === "" ||
      data.qualification === "" ||
      data.specialty === "" ||
      data.contact === "" ||
      data.location === ""
    ) {
      toast.error(`please the form proprly`);
    } else {
      const response = await fetch(
        // "https://vercel-backend-739n.vercel.app/auth2/doctorRegister",
        "https://doctor-appointment-ten-dun.vercel.app/auth2/doctorRegister",
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

      <div className="container  ">
        {/* <img src={img2} className="img" alt="appointment img" /> */}
        <div className="formCont">
          <div className="login_form registerForm  ">
            <h2 className="bookSlot" >Register Yourself</h2>
            <p className="bookPara">
              Please fill your details to register as a doctor on this web app. Thank you!
            </p>
            <input
              type="text"
              name="name"
              className="inputField"
              placeholder="Enter name of doctor"
              id="data.name"
              onChange={inputEvent}
            />
            <input
              type="text"
              className="inputField"
              name="qualification"
              placeholder="Enter Qualification of doctor"
              id="data.qualification"
              onChange={inputEvent}
            />
            <input
              type="text"
              className="inputField"
              name="specialty"
              placeholder="Enter Specialty of patient"
              id="data.specialty"
              onChange={inputEvent}
            />
            <input
              type="text"
              className="inputField"
              name="contact"
              placeholder="Enter Contact of patient"
              id="data.contact"
              onChange={inputEvent}
            />
            <input
              type="text"
              className="inputField"
              name="location"
              placeholder="Enter Location of patient"
              id="data.location"
              onChange={inputEvent}
            />
            <br />
            <button className="submitBtn" onClick={submitHandler}>
              submit
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Newbooking;
