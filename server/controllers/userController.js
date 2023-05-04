//Import module
import User from "../models/User.js";
import db from "../db/db.config.js";

//Read
const getUser = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        const [user] = await User.fetchById(id);
        res.status(200).json(user);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }

        next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const [allUsers] = await User.fetchAll();
        res.status(200).json(allUsers);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }

        next(error);
    }
};

//Create
const createUser = async (req, res, next) => {
    try {
        const { email, password, confirmation } = req.body;

        //check if user already exists
        let user = await db.query(`SELECT * FROM user WHERE user_email = ?;`, [email]);

        if (user !== null) {
            return res
                .status(409)
                .json({ message: `The user ${email} already exists` });
        }
        //Check validation for datas
        if (!email || !password || !confirmation) {
            res.satus(400).json("missing data");
        } else if (password !== confirmation) {
            res.satus(400).json("Password & confirmation must be the same !");
        }


        //hash password
        User.hashPassword(password, confirmation);

        //create user
        user = await User.post(email, password, confirmation);

        res.json({ message: "User created", data: user });
    } catch (error) {
        next(error);
    }
};

//Update
const updateUser = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const { email, password, confirmation } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //Retrive the user
        let user = await User.fetchById(id);

        if (user === null) {
            res.status(404).json({ message: "This user does not exist" });
        }

        //update
        user = await User.update(id, email, password, confirmation);

        res.json({ message: "User Updated", data: user });
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        const [deleteResponse] = await User.delete(id);
        res.status(200).json(deleteResponse);
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }

        next(error);
    }
};

export { getUser, getAllUsers, createUser, updateUser, deleteUser };
