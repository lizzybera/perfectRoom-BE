import express, { Application, Request, Response } from "express"
import cors from "cors"
import auth from "./router/authRouter"
import room from "./router/roomRouter"

const mainApp = (app: Application)=>{
    app.use(cors())
        .use(express.json())

        .get("/", (req: Request, res: Response)=>{
            try {
                
                return res.status(200).json({
                    message : "welcome" 
                })

            } catch (error) {
                console.log(error);
                
                return res.status(404).json({
                    message : "an error has occured" 
                })
            }
        })

        
        .use("/api/v1/auth", auth)
        .use("/api/v1/room", room)
}

export default mainApp