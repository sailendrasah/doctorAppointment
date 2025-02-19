import Doctor from "../model/Doctor.js";

const doctor = async(req,res)=>{
    try {
        // const {name,qualification,specialty,contact,location} = req.body;

        // const userExisit = await Doctor.findOne({contact});

        // if (userExisit) {
        //   return res.status(200).send({ msg: "doctor available" });
        // }

        const newDoctor = await Doctor.create({
          name,
          qualification,
          specialty,
          contact,
          location,
        
        });
        res.status(200).send("doctor added sucessfull")
    } catch (error) {
        console.log("error")
        
    }
}
export default  doctor;