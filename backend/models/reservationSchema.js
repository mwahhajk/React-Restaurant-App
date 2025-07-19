import mongoose from "mongoose";
import validator from "validator"

const reservationSchema=new mongoose.Schema({
    firstName:{
        type:"String",
        required:true,
        minLegth:[3,"Name should be greater than 3 and above"],
        maxLength:[20,"Name should not exceed 20 lwtters"]
    },
    lastName:{
        type:String,
        required:true,
        minLegth:[3,"Name should be greater than 3 and above"],
        maxLength:[20,"Name should not exceed 20 lwtters"]
    },
    date:{
        type:"String",
        required:true
    },
    time:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true,
        validat:[validator.isEmail,"Please provide in valid format i-e abc@example.com"]
    },
    phone:{
        type:"String",
        required:true,
        minLegth:[7,"Minimum 7 letters"],
        maxLength:[11,"Maximum length of 11 letters"]
    }

})

export const Reservation=mongoose.model("Reservation",reservationSchema)