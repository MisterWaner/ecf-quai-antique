//Import modules
import db from "../db/sequelize.config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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

        if (authenticated && user.role === "admin") {
            const accessToken = jwt.sign(
                {
                    UserInfo: {
                        email: user.email,
                        role: user.role,
                    },
                },
                process.env.ADMIN_TOKEN,
                { expiresIn: "15m" }
            );

            const refreshToken = jwt.sign(
                {
                    email: user.email,
                },
                process.env.ADMIN_REFRESH_TOKEN,
                { expiresIn: "7d" }
            );

            res.cookie("jwt", refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "None",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });

            user = { ...user, accessToken, refreshToken };
        } else if (user.role === "client") {
            const accessToken = jwt.sign(
                {
                    UserInfo: {
                        email: user.email,
                        role: user.role,
                    },
                },
                process.env.CLIENT_TOKEN,
                { expiresIn: "15m" }
            );

            const refreshToken = jwt.sign(
                {
                    email: user.email,
                },
                process.env.CLIENT_REFRESH_TOKEN,
                { expiresIn: "7d" }
            );

            res.cookie("jwt", refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: "None",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            });

            user = { ...user, accessToken, refreshToken };
        }

        res.json(user);
        //console.log(authenticated);
        console.log(user.role);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export { getUser };
