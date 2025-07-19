import mongoose from "mongoose";

export const dbConnect=()=>{mongoose.connect(process.env.MONGO_URL)    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    })}