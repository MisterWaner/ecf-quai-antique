//import modules
import express, { json, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import db from "./db/sequelize.config.js";
import multer from 'multer';

import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoutes.js";
import carteRouter from "./routes/carteRoutes.js";
import menuRouter from "./routes/menuRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";

//Init server
config();
const app = express();

//Middleware

app.use(cors({
    origin: "*",
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization"
}));

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());



//Routes
app.get("/", (req, res) => {
    res.send("API en ligne");
});

app.use("/users", userRouter);
app.use('/auth', authRouter);
app.use('/cartes', carteRouter);
app.use('/menus', menuRouter);
app.use('/categories', categoryRouter);

db.sequelize
    .authenticate()
    .then(() => console.log("db is connected"))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Server is running on port ${process.env.SERVER_PORT}`);
        });
    })
    .catch((err) => console.log("error occured :", err));
