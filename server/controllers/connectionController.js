//Import modules
import db from "../db/sequelize.config.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
config();

//connection for admin
const getAdmin = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const admin = await db.User.findOne({
            where: { role: "admin", id: id },
            raw: true,
        });
        res.json(admin);
    } catch (error) {
        res.json({ message: error.message });
    }
};

