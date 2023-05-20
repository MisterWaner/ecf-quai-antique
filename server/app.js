//import modules
import express, { json, urlencoded } from "express";
import cors from "cors";
import { config } from "dotenv";
import db from "./db/sequelize.config.js";

import userRouter from "./routes/userRoute.js";
import router from "./routes/generalRouter.js";
import authRouter from "./routes/authRoutes.js";

//Init server
config();
const app = express();

//Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

//Routes
app.get("/", (req, res) => {
    res.send("API en ligne");
});

app.use("/users", userRouter);
app.use('/', router);
app.use('/', authRouter);


db.sequelize
    .authenticate()
    .then(() => console.log("db is connected"))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Server is running on port ${process.env.SERVER_PORT}`);
        });
    })
    .catch((err) => console.log("error occured :", err));
