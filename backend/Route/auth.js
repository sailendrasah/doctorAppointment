import express from 'express';
import {viewappointment, dactor} from '../controller/auth.js';
import allPatient from '../controller/Allpatient.js';
import appointmentSchema from '../validator/auth.js';
import validate from '../middleware/auth.js';
const router = express.Router();

router.route("/viewappointment").post (viewappointment)
router.route("/alldoctor").get(dactor);
router.route("/allpatient").get(allPatient);
// router.route("/auth/allpatient/:id").delete(deletePatient);
// router.route("/auth/allpatient/:id").delete(deletePatient);


export default router;