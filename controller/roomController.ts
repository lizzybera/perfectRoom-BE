import express, {Request, Response} from "express"
import authModel from "../model/RoomModel"


export const createRoom = async (req: Request, res: Response) =>{
    try {
        const {roomName,
            roomSize,
            detailsOfRoom} = req.body


        const room = await authModel.create({roomName,
            roomSize,
            isAvalable : false,
            detailsOfRoom})

        return res.status(201).json({
            message : "room created", 
            data : room
        })

    } catch (error:any) {
        return res.status(404).json({
            message : "room not created",
            data : error,
            errMsg : error.message 
        })
    }
}

export const readRoom = async (req: Request, res: Response) =>{
    try {
        const {id} = req.params
        const Room = await authModel.findById({id})

        return res.status(200).json({
            message : "Room info",
            data : Room
        })

    } catch (error) {
        return res.status(404).json({
            message : "Room info not gotten", 
        })
    }
}

export const readRooms = async (req: Request, res: Response) =>{
    try {
        const rooms = await authModel.find()

        return res.status(200).json({
            message : "rooms info",
            data : rooms
        })

    } catch (error) {
        return res.status(404).json({
            message : "rooms info not gotten", 
        })
    }
}

export const updateRoom = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const updateRoom = await authModel.findByIdAndUpdate(id, { isAvalable: true }, { new: true });
        return res.status(200).json({
            message: updateRoom
        });

    } catch (error) {
        return res.status(404).json({
            message: "room info not updated"
        });
    }
}

export const deleteRoom = async (req: Request, res: Response) =>{
    try {
        const id = req.params.id
        const user = await authModel.findByIdAndDelete(id)

        return res.status(200).json({
            message : "users info deleted",
            data : user
        })

    } catch (error) {
        return res.status(404).json({
            message : "users info not deleted", 
        })
    }
}