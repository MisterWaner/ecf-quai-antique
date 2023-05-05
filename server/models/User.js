//Import module
import db from "../db/db.config.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
config()

//User model
class User {
    email = "";
    password = "";
    confirmation = "";
    role = "client";

    constructor(email, password, confirmation, role ) {
        this.email = email,
        this.password = password,
        this.confirmation = confirmation,
        this.role = role
    }

    static post = (email, password, confirmation, role) => {
        return db.query(
        `INSERT INTO user(
            user_email,
            user_password,
            user_password2,
            user_role) VALUES (?,?,?,?);
        `,[email, password, confirmation, role]);
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

    

    static checkPassword = async (password, original) => {
        await bcrypt.compare(password, original);
    }

    static fetchByMail(email) {
        return db.query(`SELECT * FROM user WHERE user_email = ?;`, [email]);
    }
}

export default User;
