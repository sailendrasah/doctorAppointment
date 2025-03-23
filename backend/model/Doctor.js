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

const Alldt = new mongoose.model("Alldt",allDoctorSchema);

export default Alldt;