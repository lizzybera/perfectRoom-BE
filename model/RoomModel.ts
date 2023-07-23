import mongoose from "mongoose";

interface room{
    roomName : string
    roomSize  : string
    isAvalable : boolean
    detailsOfRoom: string
}


const roomSchema = new mongoose.Schema({
        roomName : {
            type : String,
            unique : true
        },
        roomSize : {
            type : String
        },
        isAvalable : {
            type : Boolean,
            default:false
        },
        detailsOfRoom : {
            type : String
        },
})

export default mongoose.model<room> ("rooms", roomSchema)