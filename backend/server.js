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

// app.use("/", (req, res) => {
//     res.send("Backend server is running")
// })
 app.use("/auth",authRouther)
 app.use("/auth2", authRouther2);
 app.use("/auth3",authRouther3);

DB().then(()=>{
    app.listen(PORT,()=>{ 
        console.log(`server is running on port ${PORT}`);
    })
})