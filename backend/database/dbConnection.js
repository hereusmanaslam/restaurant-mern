import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT",
    }).then(() => {
        console.log("Connected to Database Succesfully!")
    }).catch((err) => {
        console.log(`Some error occured while Connecting to Database! ${err}`)
    })
}