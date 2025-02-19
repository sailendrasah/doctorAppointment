import Viewappointment from "../model/auth.js";

const viewappointment = async (req, res) => {
  try {
    console.log(req.body);
    const { name, age, address, phoneno } = req.body;

    const userExisit = await Viewappointment.findOne({ name });

    if (userExisit) {
      res.status(400).send("user already exisit");
    }

    const newUser = await Viewappointment.create({
      name,
      age,
      address,
      phoneno,
    });
    res.status(200).send("appointment susessfull...");
  } catch (error) {
    res.status(404).send("error");
  }
};
// ...............................getting all doctor name......................................................
import Doctor from "../model/Doctor.js";

const dactor = async (req, res) => {
  try {
    const response = await Doctor.find();
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
const deletePatient = async(req,res,next)=>{
  try {
    const id = req.params.id;
    await Viewappointment.deleteOne({_id:id});
    return res.status(200).send({msg:"patient delete sucessfull"})
  } catch (error) {
next(error)    
  }
}
export { viewappointment, dactor, deletePatient }; 