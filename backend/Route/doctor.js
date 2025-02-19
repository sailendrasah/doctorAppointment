import { dactor } from "../controller/auth.js";
import express from 'express';

const router = express.Router();


router.route("/doctorRegister").post(dactor)

export default router;