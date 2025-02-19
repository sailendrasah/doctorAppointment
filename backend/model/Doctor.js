import mongoose from "mongoose"

const allDoctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  qualification: {
    type: String,
    required: true,
  },

  specialty: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },

});

const Doctor = new mongoose.model("Doctor",allDoctorSchema);

export default Doctor;