//import modules
import express, { json, urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import db from "./db/sequelize.config.js";


import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoutes.js";
import dishRouter from "./routes/dishRoutes.js";
import menuRouter from "./routes/menuRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import formulaRouter from "./routes/formulaRoutes.js";
import openingRouter from "./routes/openingRoutes.js";
import permissionRouter from "./routes/permissionRoutes.js";
import resaRouter from "./routes/resaRoutes.js";
import slotRouter from "./routes/slotRoutes.js";
import uploadRouter from "./controllers/uploadController.js";

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
app.use('/dishes', dishRouter);
app.use('/menus', menuRouter);
app.use('/formulas', formulaRouter)
app.use('/categories', categoryRouter);
app.use('/openings', openingRouter);
app.use('/permissions', permissionRouter);
app.use('/resas', resaRouter);
app.use('/slots', slotRouter);
app.use('/images', uploadRouter);

db.sequelize
    .authenticate()
    .then(() => console.log("db is connected"))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Server is running on port ${process.env.SERVER_PORT}`);
        });
    })
    .catch((err) => console.log("error occured :", err));
