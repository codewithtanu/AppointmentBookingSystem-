import express from "express" // ye humne package.json mai type:"module"use karke laya hai otherwise require uses
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import adminRouter from "./routes/adminRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import userRouter from "./routes/userRoute.js"
// app config
const app=express()
const port=process.env.PORT || 4000
connectDB()
connectCloudinary()
//middleware
app.use(express.json())// any request will get passed using this fucntion
app.use(cors())// allow to connect frontend with the backend

//api endpoints
app.use('/api/admin',adminRouter)
app.use('/api/doctor',doctorRouter)
app.use('/api/user',userRouter)
// localhost:4000/api/admin/add-doctor 
app.get('/',(req,res)=>{
   res.send("API WORKING")
})
app.listen(port,()=>{
    console.log("Server Started",port);
})