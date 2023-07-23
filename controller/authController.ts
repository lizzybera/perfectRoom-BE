import express, {Request, Response} from "express"
import authModel from "../model/authModel"
import bcrypt from "bcrypt"

export const createUser = async (req: Request, res: Response) =>{
    try {
        const {name, email, password, avatar} = req.body

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const user = await authModel.create({name, email, password:hash, avatar})

        return res.status(201).json({
            message : "user created", 
            data : user
        })

    } catch (error) {
        return res.status(404).json({
            message : "user not created", 
        })
    }
}

export const SignInUser = async (req: Request, res: Response) =>{
    try {
        const {email, password} = req.body

        const user = await authModel.findOne({email})

        if (user){
            const passed = await bcrypt.compare(password, user.password!)

            if (passed){
                return res.status(201).json({
                    message : `welcome back ${user.name}`, 
                    data : user._id
                })
            }else{
                return res.status(404).json({
                    message : "incorrect password", 
                })
            }

        }else{
            return res.status(404).json({
                message : "user not found", 
            })
        }

    } catch (error) {
        return res.status(404).json({
            message : "user not signed in", 
        })
    }
}

export const readUser = async (req: Request, res: Response) =>{
    try {
        const {id} = req.params
        const user = await authModel.findById({id})

        return res.status(200).json({
            message : "user info",
            data : user
        })

    } catch (error) {
        return res.status(404).json({
            message : "user info not gotten", 
        })
    }
}

export const readUsers = async (req: Request, res: Response) =>{
    try {
        const user = await authModel.find()

        return res.status(200).json({
            message : "users info",
            data : user
        })

    } catch (error) {
        return res.status(404).json({
            message : "users info not gotten", 
        })
    }
}

export const updateUser = async (req: Request, res: Response) =>{
    try {
        const {id} = req.params
        const {name, avatar} = req.body
        const user = await authModel.findByIdAndUpdate({id}, {name, avatar}, {new : true})

        return res.status(200).json({
            message : "user info updated",
            data : user
        })

    } catch (error) {
        return res.status(404).json({
            message : "user info not updated", 
        })
    }
}

export const deleteUser = async (req: Request, res: Response) =>{
    try {
        const {id} = req.params
        const user = await authModel.findByIdAndDelete({id})

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