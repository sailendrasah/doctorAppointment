import Viewappointment from "../model/auth.js";

const viewappointment = async (req, res) => {
  try {
    console.log(req.body);
    const { name, age, address, phoneno } = req.body;

    // Check if user already exists
    

    // Create a new user if the user does not exist
    const newUser = await Viewappointment.create({
      name,
      age,
      address,
      phoneno,
    });

    // Return success response
    return res.status(200).json("Appointment successful...");
  } catch (error) {
    console.log("Error:", error);
    // Ensure an error response is only sent once
    return res.status(500).json("Error occurred");
  }
};

// export default viewappointment;

// ...............................getting all doctor name......................................................
import Alldt from "../model/Doctor.js";

const dactor = async (req, res) => {
  try {
    const response = await Alldt.find();
    // console.log(JSON.stringify(response));
    res.status(200).send({
      sucess: true,
      data: response,
      message: "data fetched sucessfully",
    });
  } catch (error) {
    res.status(400).send("error", error);
  }
};
// .......................delete logic...............
const deletePatient = async (req, res, next) => {
  try {
    const id = req.params.id;
   const result = await Viewappointment.deleteOne({ _id: id });

   // Check if a document was actually deleted
   if (result.deletedCount === 0) {
     return res.status(404).send({ msg: "Patient not found" });
   }
  } catch (error) {
    console.log(error);
  }
};





const deleteDoctor = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Alldt.deleteOne({ _id: id });

    // Check if a document was actually deleted
    if (result.deletedCount === 0) {
      return res.status(404).send({ msg: "Patient not found" });
    }
  } catch (error) {
    console.log(error);
  }
};
export { viewappointment, deletePatient,dactor,deleteDoctor };
 