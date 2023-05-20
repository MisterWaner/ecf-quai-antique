//Import modules
import db from "../db/sequelize.config.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
config();

//connection for admin
const getUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //check if email or password are present
        if (!email || !password) {
            res.sendStatus(400).json({ message: "Missing parameter" });
        }

        //retrieve the user
        let user = await db.User.findOne({
            where: { email: email },
            raw: true,
        });
        if (!user) {
            return res
                .status(400)
                .json({ message: "This user does not exists" });
        }
        const validPassword = (enteredPassword, originalPassword) => {
            return new Promise((resolve) => {
                bcrypt.compare(
                    enteredPassword,
                    originalPassword,
                    (err, res) => {
                        resolve(res);
                    }
                );
            });
        };

        const authenticated = await validPassword(password, user.password);
        res.json(user);
        console.log(authenticated);
        console.log(user.role);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export { getUser };
