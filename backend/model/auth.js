import mongoose from 'mongoose'

const viewAppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: "number",
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
  },
});
const Viewappointment = new mongoose.model("Viewappointment",  viewAppointmentSchema);

export default Viewappointment;