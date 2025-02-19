import express from 'express';
import authRouther from './Route/auth.js'
import authRouther2 from "./Route/doctor.js";
import DB from './connectDb/DB.js';
import cors from 'cors';
const PORT = 3000;
 const app = express();
 app.use(cors());
app.use(express.json());  
 app.use("/auth",authRouther)
 app.use("/auth2", authRouther2);

DB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`);
    })
})