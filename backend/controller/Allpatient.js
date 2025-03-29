import Viewappointment from "../model/auth.js";

const allPatient = async(req,res)=>{
    try {
        const patient = await Viewappointment.find();
        res.status(200).send(patient)
        
    } catch (error) {
        res.status(400).send("error from panel");
    }
}
export default allPatient; 