import { Reservation } from "../models/reservationSchema.js";

export const sendReservation=async(req,res)=>{
    console.log("Send Reservation from Reservation Controller");

    const{firstName,lastName,phone,email,date,time}=req.body;
    console.log(firstName,lastName,phone,email,date,time);

    if(!firstName||!lastName||!phone||!email ||!date ||!time)
    {
        return res.status(400).json({message:"Please provide all required fields"})
    }

    const createdReservation=await Reservation.create(req.body)

    if(createdReservation)
    {
        return res.status(201).json({
            success:true,
            message:"Reservation Created successfully",
            createdReservation
        })
    }
}