import express from "express";
import { deleteDoctor, deletePatient } from "../controller/auth.js"; // Ensure this function is correctly imported

const router = express.Router();

// Define the DELETE route to match your desired path
router.delete("/allpatient/delete/:id", deletePatient);
router.delete("/alldoctor/deleteDt/:id", deleteDoctor);


export default router;
