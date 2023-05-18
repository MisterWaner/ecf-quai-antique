//Import module
import db from "../db/sequelize.config.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
config();

//Create
const createUser = async (req, res) => {
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

        if(user.role === "" || user.role === "client") {
            
            console.log('user is client', user)
            return await db.Client.create({userId: user.id})

        } else if (user.role === "admin") {
            console.log('user is admin', user);

            return await db.Admin.create({userId : user.id})
        }

        return res.json({message: 'User created', data: user});
        
    } catch (error) {
        return res.status(500).json({ message: "Database Error", error });
    }
};

export { createUser };
