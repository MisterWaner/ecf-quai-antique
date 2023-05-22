import db from "../db/sequelize.config.js";

const createFormula = async (req, res) => {
    try {
        const { name, description, price, id } = req.body;

        //Check validation for datas
        if (!name || !description || !price) {
            return res.send("missing data");
        }

        //check if user already exists
        let formula = await db.Formula.findOne({
            where: { name: name },
            raw: true,
        });
        if (formula !== null) {
            return res
                .status(409)
                .json({ message: `The menu ${name} already exists` });
        }

        //user creation
        formula = await db.Formula.create({
            id: id,
            name: name,
            description: description,
            price: price,
        });
        return res.json({ message: "Formula created", data: formula });
    } catch (error) {
        return res.status(500).json({ message: "Database Error", error });
    }
};

const getAllFormulas = async (req, res) => {
    try {
        const allFormulas = await db.Formula.findAll();
        res.status(200).json(allFormulas);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const getFormula = async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ message: "Missing parameter" });
    }

    try {
        let formula = await db.Formula.findOne({
            where: { id: id },
            raw: true,
        });

        if (formula === null) {
            res.status(404).json({ message: "This formula does not exist" });
        }

        res.status(200).json(formula);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const updateFormula = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, description, price } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //retrieve the user
        let formula = await db.Formula.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (formula === null) {
            res.status(404).json({ message: "This formula does not exist" });
        }

        //update
        formula = await db.Formula.update(
            {
                name: name,
                description: description,
                price: price
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Formula Updated", data: formula });
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const deleteFormula = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //deletation of user
        const formula = await db.Formula.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(formula);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

export {
    createFormula,
    getAllFormulas,
    getFormula,
    updateFormula,
    deleteFormula,
};
