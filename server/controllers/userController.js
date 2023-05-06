//Import module
import db from "../db/sequelize.config.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
config();

//Read
const getUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            res.sendStatus(400).json({ message: "Missing parameter" });
        }

        //retrieve user
        const user = await db.User.findOne({
            where: { id: id },
            raw: true,
        });
        if (user === null) {
            res.status(400).json({ message: "This user does not exists" });
        }

        res.status(200).json({ data: user });
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await db.User.findAll();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

//Create
const createUser = async (req, res) => {
    try {
        const { email, password, confirmation, role, phone } = req.body;

        //Check validation for datas
        if (!email || !password || !confirmation || !phone) {
            res.status(400).json("missing data");
        } else if (password !== confirmation) {
            res.status(400).json("Password & confirmation must be the same !");
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
            email: email,
            password: password,
            confirmation: confirmation,
            phone: phone,
            role: role,
        });

        res.json({ message: "User created", data: user });
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

//Update
const updateUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { email, password, confirmation, firstname, lastname } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //retrieve the user
        let user = await db.User.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (user === null) {
            res.status(404).json({ message: "This user does not exist" });
        }

        //update
        user = await db.User.update(
            {
                email: email,
                password: password,
                confirmation: confirmation,
                firstname: firstname,
                lastname: lastname
            },
            {
                where: { id: id },
            }
        );
        

        res.json({ message: "User Updated", data: user });
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //deletation of user
        const user = await db.User.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

export { getUser, getAllUsers, createUser, updateUser, deleteUser };
