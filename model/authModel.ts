import mongoose from "mongoose";

interface iAuth{
    name: string,
    email: string,
    password: string,
    avatar : string,
    rooms: {}[]
}

interface iAuthData extends iAuth, mongoose.Document {}

const authSchema = new mongoose.Schema({
    name : {
        type : String,
        unique: true
    },
    email : {
        type : String,
        unique: true
    },
    password : {
        type : String,
        trim : true
    },
    avatar : {
        type : String
    },
    // rooms :[
    //     {
    //         type : mongoose.Schema.Types.ObjectId,
    //         ref: "AllRooms"
    //     }
    // ]

}, {timestamps: true})

export default mongoose.model<iAuthData> ("auths", authSchema)