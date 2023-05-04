//Import module
import db from "../db/db.config.js";


//Role model
class Role {
    name;
    description;

    constructor(name, description) {
        this.name = name,
        this.description = description
    }

    static post = (name, description) => {
        return db.query('INSERT INTO role(role_name, role_description) VALUES (?,?);', [name, description]);
    }

    static fetchById = (id) => {
        return db.query('SELECT * FROM role WHERE role_id = ?;',[id]);
    }

    static fetchAll = () => {
        return db.query('SELECT * FROM role;');
    }

    static delete = (id) => {
        return db.query('DELETE FROM role WHERE role_id = ?;', [id])
    }
}

export default Role; 