import express, { Application } from "express";
import mainApp from "./mainApp";
import { db } from "./config/dataBase";
import dotenv from "dotenv"
dotenv.config()

const app: Application = express()
const realPort = parseInt(process.env.PORT_NO!)

const port : number = realPort

mainApp(app)

const server = app.listen(process.env.PORT || port, ()=>{
    console.log(port);
    db()
})

process.on("uncaughtException", (error: any)=>{
    console.log("server is shutting down due to uncaughtException");
    
    console.log(error);

    process.exit(1)
    
})

process.on("unhandledRejection", (reason: any)=>{
    console.log("server is shutting down due to unhandledRejection");
    
    console.log(reason);

    server.close(()=>{
        process.exit(1)
    })
    
})