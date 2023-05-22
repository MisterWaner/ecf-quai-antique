import db from "../db/sequelize.config.js";

const getAllDishes = async (req, res) => {
    try {
        const allDishes = await db.Dish.findAll();
        res.status(200).json(allDishes);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
}

const getDish = async (req, res) => {
    const id = parseInt(req.params.id)

    //Check if id is ok
    if (!id) {
        return res.status(400).json({ message: "Missing parameter" });
    }

    try {
        let dish = await db.Dish.findOne({
            where: { id: id },
            raw: true,
        });

        if (dish === null) {
            res.status(404).json({ message: "This dish does not exist" });
        }

        res.status(200).json(dish);
        
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
}

const createDish = async (req, res) => {
    try {
        const { title, description, price, id } = req.body;

        //Check validation for datas
        if (!title || !description || !price) {
            return res.send("missing data");
        }

        //check if dish already exists
        let dish = await db.Dish.findOne({
            where: { title: title },
            raw: true,
        });
        if (dish !== null) {
            return res
                .status(409)
                .json({ message: `The dish ${title} already exists` });
        }

        //dish creation
        dish = await db.Dish.create({
            id: id,
            title: title,
            description: description,
            
            price: price,
        });
        return res.json({ message: "Dish created", data: dish });
    } catch (error) {
        return res.status(500).json({ message: "Database Error", error });
    }
}

const updateDish = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, description, price, image } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //retrieve the dish
        let dish = await db.Dish.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (dish === null) {
            res.status(404).json({ message: "This dish does not exist" });
        }

        //update
        dish = await db.Dish.update(
            {
                title: title,
                description: description,
                price: price
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Dish Updated", data: dish });
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
}

const deleteDish = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //deletation of user
        const dish = await db.Dish.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(dish);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
}

export {createDish, getAllDishes, getDish, updateDish, deleteDish};