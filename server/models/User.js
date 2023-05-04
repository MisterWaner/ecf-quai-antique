//Import module
import db from "../db/db.config.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
config()

//User model
class User {
    email;
    password;
    confirmation;
    roleId;

    constructor(email, password, confirmation, roleId ) {
        this.email = email,
        this.password = password,
        this.confirmation = confirmation,
        this.roleId = roleId
    }

    static post = (email, password, confirmation, roleId) => {
        return db.query(
        `INSERT INTO user (
            user_email,
            user_password,
            user_password2),
            role_id VALUES (?,?,?,?);
        `,[email, password, confirmation, roleId]);
    };

    static fetchAll = () => {
        return db.query("SELECT * FROM user;");
    };

    static fetchById = (id) => {
        return db.query("SELECT * FROM user WHERE user_id = ?;", [id]);
    };

    static update = (id, email, password, confirmation) => {
        return db.query(
        `UPDATE user
        SET user_email = ?, user_password = ?, user_password2 = ?
        WHERE user_id = ?;
        `,[id, email, password, confirmation]);
    };

    static delete = (id) => {
        return db.query("DELETE FROM user WHERE user_id = ?;", [id]);
    };

    static hashPassword = async (password, confirmation) => {
        let hash = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUND));
        password = hash;
        confirmation = password
    }

    static checkPassword = async (password, original) => {
        await bcrypt.compare(password, original);
    }
}

export default User;
