import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const URL: string = process.env.STRING!

export const db = ()=>{
    mongoose.connect(URL).then(()=>{
        console.log("server is connected");
    })
}