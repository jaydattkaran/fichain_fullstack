import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()
dotenv.config();

// app config
const port = process.env.PORT || 8800;

const connect = async () => {


    try {
        await mongoose.connect(process.env.MONGO);

        console.log("connected to mongoDB")
    } catch (error) {
        console.error("MongoDB connetction error:", error);
    }
}
app.use(cors({origin:"https://fichain-frontend.vercel.app", credentials:true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";

    return res.status(errorStatus).send(errorMessage);

})

app.listen(port, () => {
    connect()
    console.log("Backend server is running!")
})