import  {useState}  from "react";
import Header from "../component/Header";
import { toast } from "react-toastify";

function Newbooking() {
  const [data, setData] = useState({
    name: "",
    qualification: "",
    specialty: "",
    contact: "",
    location:"",
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
      data. contact === "" ||
      data.location ===""
    ) {
      toast.error(`please the form proprly`);
    } else { 
      const response = await fetch(
        "http://localhost:3000/auth2/doctorRegister",
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
            placeholder="enter name of doctor"
            id="data.name"
            onChange={inputEvent}
          />
          <input
            type="text"
            className="inputField"
            name="qualification"
            placeholder="enter Qualification of doctor"
            id="data.qualification"
            onChange={inputEvent}
          />
          <input
            type="text"
            className="inputField"
            name="specialty"
            placeholder="enter Specialty of patient"
            id="data.specialty"
            onChange={inputEvent}
          />
          <input
            type="text"
            className="inputField"
            name="contact"
            placeholder="enter Contact of patient"
            id="data.contact"
            onChange={inputEvent}
          />
          <input
            type="text"
            className="inputField"
            name="location"
            placeholder="enter Location of patient"
            id="data.location"
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
