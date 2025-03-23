import Alldt from "../model/Doctor.js";

const doctor = async (req, res) => {
  try {
    console.log(req.body);
    const { name, qualification, specialty, contact, location } = req.body;

    // const userExisit = await Doctor.findOne({qualification});

    // if (userExisit) {
    //   return res.status(200).send({ msg: "doctor available" });
    // }

    const newDoctor = await Alldt.create({
      name,
      qualification,
      specialty,
      contact,
      location,
    });
    return res.status(200).send("doctor added sucessfull");
  } catch (error) {
    console.log("error from d", error);
  }
};

export default doctor;
