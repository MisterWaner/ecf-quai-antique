import db from "../db/sequelize.config.js";

const createCategory = async (req, res) => {
    try {
        const { name, id } = req.body;

        //Check validation for datas
        if (!name) {
            return res.send("missing data");
        }

        //check if user already exists
        let category = await db.Category.findOne({
            where: { name: name },
            raw: true,
        });
        if (category !== null) {
            return res
                .status(409)
                .json({ message: `The category ${name} already exists` });
        }

        //user creation
        category = await db.Category.create({
            id: id,
            name: name,
        });
        return res.json({ message: "Category created", data: category });
    } catch (error) {
        return res.status(500).json({ message: "Database Error", error });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const allCategories = await db.Category.findAll();
        res.status(200).json(allCategories);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const getCategory = async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ message: "Missing parameter" });
    }

    try {
        let category = await db.Category.findOne({
            where: { id: id },
            raw: true,
        });

        if (category === null) {
            res.status(404).json({ message: "This category does not exist" });
        }

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const updateCategory = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //retrieve the user
        let category = await db.Category.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (category === null) {
            res.status(404).json({ message: "This category does not exist" });
        }

        //update
        category = await db.Category.update(
            {
                name: name,
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Category Updated", data: category });
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //deletation of user
        const category = await db.Category.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

export {
    createCategory,
    getAllCategories,
    getCategory,
    updateCategory,
    deleteCategory,
};
