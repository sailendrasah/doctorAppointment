import express from 'express'; 
import authRouther from './Route/auth.js'
import authRouther2 from "./Route/doctor.js";
import authRouther3 from './Route/delete.js'
import DB from './connectDb/DB.js';
import cors from 'cors';
const PORT = 3000;
 const app = express();


 app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`
    <h1>Doctor Appointment System: Backend Server is Running</h1>
    <h2>Available API Endpoints:</h2>
    <ul>
      <li><strong>POST</strong> /auth/viewappointment – Register a new user</li>
      <li><strong>GET</strong> /auth/alldoctor – All doctor list</li>
      <li><strong>GET</strong> /auth/allpatient – Get list of patients</li>
      <li><strong>POST</strong> /auth2/doctorRegister – Register as a doctor</li>
      <li><strong>GET</strong> /auth3/allpatient/delete/:id – To delete a patient(Admin pannel route)</li>
      <li><strong>GET</strong> /auth/alldoctor/deleteDt/:id – To delete a doctor(Admin pannel route)</li>
    </ul>
  `);
});

 app.use("/auth",authRouther)
 app.use("/auth2", authRouther2);
 app.use("/auth3",authRouther3);

DB().then(()=>{
    app.listen(PORT,()=>{ 
        console.log(`server is running on port ${PORT}`);
    })
})