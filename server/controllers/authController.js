//Import modules
import db from "../db/sequelize.config.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

//sign-in
const register = async (req, res) => {
    try {
        const { email, password, confirmation, role, id } = req.body;

        //Check validation for datas
        if (!email || !password || !confirmation) {
            return res.send("missing data");
        } else if (password !== confirmation) {
            return res
                .status(400)
                .json("Password & confirmation must be the same !");
        }

        //check if user already exists
        let user = await db.User.findOne({
            where: { email: email },
            raw: true,
        });
        if (user !== null) {
            return res
                .status(409)
                .json({ message: `The user ${email} already exists` });
        }

        //hash password
        db.User.beforeCreate(async (user, options) => {
            let hash = await bcrypt.hash(
                user.password,
                parseInt(process.env.BCRYPT_SALT_ROUND)
            ); //hash function
            user.password = hash;
            user.confirmation = user.password;
        });

        //user creation
        user = await db.User.create({
            id: id,
            email: email,
            password: password,
            confirmation: confirmation,
            role: role,
        });
        return res.json({ message: "User created", data: user });
    } catch (error) {
        return res.status(500).json({ message: "Database Error", error });
    }
};

//login
const login = async (req, res) => {
    const { email, password } = req.body;

    //check if email or password are present
    if (!email || !password) {
        res.sendStatus(400).json({ message: "Missing parameter" });
    }

    try {
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

        //check password
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

        if (!validPassword) {
            return res.status(401).json({ message: "Mot de passe invalide" });
        } else {
            const maxAge = 1 * 60 * 60;
            //Token generation
            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                },
                process.env.SECRET_TOKEN,
                { expiresIn: maxAge }
            );
            res.cookie("jwt", token, {
                httpOnly: true,
                secure: true,
                sameSite: "None",
                maxAge: maxAge * 1000,
            });
            return res.json({ user, accessToken: token });
        }

    } catch (error) {
        res.json({ message: error.message });
    }
};

const logout = (req, res) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) {
        return res.sendStatus(204); //No content
    }

    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    res.json({ message: "Cookie effacé !" });
};

export { login, logout, register };
