import doctor from '../controller/doctor.js';
import express from 'express';
// import doctor from "../controller/doctor.js";

const router = express.Router();


router.route("/doctorRegister").post(doctor)

export default router; 