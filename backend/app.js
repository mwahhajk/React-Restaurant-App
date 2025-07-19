import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./database/dbConnection.js";
import router from "./routes/reservationRoute.js";

const app=express()

dotenv.config({path:'./config/config.env'})

app.use(cors({
    origin:["process.env.FRONTEND_URL"],
    methods:["POST"],
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/reservation",router)

app.get("/hello",(req,res)=>{
    return res.status(200).json({
        success:true,
        message:"Hello Created successfully"
    })
})

dbConnect();



export default app;