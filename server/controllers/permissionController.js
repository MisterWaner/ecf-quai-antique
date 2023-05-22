import db from "../db/sequelize.config.js";

const createPermission = async (req, res) => {
    try {
        const { name, id } = req.body;

        //Check validation for datas
        if (!name) {
            return res.send("missing data");
        }

        //check if user already exists
        let permission = await db.Permission.findOne({
            where: { name: name },
            raw: true,
        });
        if (permission !== null) {
            return res
                .status(409)
                .json({ message: `The permission ${name} already exists` });
        }

        //user creation
        permission = await db.Permission.create({
            id: id,
            name: name,
        });
        return res.json({ message: "Permission created", data: permission });
    } catch (error) {
        return res.status(500).json({ message: "Database Error", error });
    }
};

const getAllPermissions = async (req, res) => {
    try {
        const allPermissions = await db.Permission.findAll();
        res.status(200).json(allPermissions);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const getPermission = async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ message: "Missing parameter" });
    }

    try {
        let permission = await db.Permission.findOne({
            where: { id: id },
            raw: true,
        });

        if (permission === null) {
            res.status(404).json({ message: "This permission does not exist" });
        }

        res.status(200).json(permission);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const updatePermission = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //retrieve the user
        let permission = await db.Permission.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (permission === null) {
            res.status(404).json({ message: "This permission does not exist" });
        }

        //update
        permission = await db.Permission.update(
            {
                name: name,
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Permission Updated", data: permission });
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const deletePermission = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //deletation of user
        const permission = await db.Permission.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(permission);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

export {
    createPermission,
    getAllPermissions,
    getPermission,
    updatePermission,
    deletePermission,
};
