//Import module
import db from "../db/sequelize.config.js";
import { config } from "dotenv";
config();

//Read
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await db.User.findAll();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id)

    //Check if id is ok
    if (!id) {
        return res.status(400).json({ message: "Missing parameter" });
    }

    try {
        let user = await db.User.findOne({
            where: { id: id },
            raw: true,
        });

        if (user === null) {
            res.status(404).json({ message: "This user does not exist" });
        }

        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
}

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
                lastname: lastname,
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

export { getAllUsers, updateUser, deleteUser, getUserById };
