import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First Name must Contain atleast 3 Characters"],
        maxLength: [20, "First Name can't exceed 20 Characters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last Name must Contain atleast 3 Characters"],
        maxLength: [20, "Last Name can't exceed 20 Characters"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please Provide valid Email!"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone number must contain 11 digits"],
        maxLength: [11, "Phone number must contain 11 digits"]
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
})

export const Reservation = mongoose.model("Reservation", reservationSchema)