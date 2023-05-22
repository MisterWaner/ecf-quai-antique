import db from "../db/sequelize.config.js";

const createMenu = async (req, res) => {
    try {
    const { title, id } = req.body;

        //Check validation for datas
        if (!title) {
            return res.send("missing data");
        }

        //check if user already exists
        let menu = await db.Menu.findOne({
            where: { title: title },
            raw: true,
        });
        if (menu !== null) {
            return res
                .status(409)
                .json({ message: `The menu ${title} already exists` });
        }

        //user creation
        menu = await db.Menu.create({
            id: id,
            title: title
        });
        return res.json({ message: "Menu created", data: menu });
    } catch (error) {
        return res.status(500).json({ message: "Database Error", error });
    }
};

const getAllMenus = async (req, res) => {
    try {
        const allMenus = await db.Menu.findAll();
        res.status(200).json(allMenus);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const getMenu = async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ message: "Missing parameter" });
    }

    try {
        let menu = await db.Menu.findOne({
            where: { id: id },
            raw: true,
        });

        if (menu === null) {
            res.status(404).json({ message: "This menu does not exist" });
        }

        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const updateMenu = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //retrieve the user
        let menu = await db.Menu.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (menu === null) {
            res.status(404).json({ message: "This user does not exist" });
        }

        //update
        menu = await db.Menu.update(
            {
                title: title,
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Menu Updated", data: menu });
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const deleteMenu = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //deletation of user
        const menu = await db.Menu.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};
export { createMenu, getAllMenus, getMenu, updateMenu, deleteMenu };
