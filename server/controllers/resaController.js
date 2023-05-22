import db from "../db/sequelize.config.js";

const createResa = async (res, req) => {
    try {
        const { date, quantity, maxQuantity, id } = req.body;

        //Check validation for datas
        if (!date || !quantity || !maxQuantity) {
            return res.send("missing data");
        }

        //check if user already exists
        let resa = await db.Reservation.findOne({
            where: { id: id },
            raw: true,
        });
        if (resa !== null) {
            return res
                .status(409)
                .json({ message: `The resa ${id} already exists` });
        }

        //user creation
        resa = await db.Reservation.create({
            id: id,
            date: date,
            quantity: quantity,
            maxQuantity: maxQuantity,
        });
        return res.json({ message: "Reservation created", data: resa });
    } catch (error) {
        return res.status(500).json({ message: "Database Error", error });
    }
};
const getAllResas = async (res, req) => {
    try {
        const allResas = await db.Reservation.findAll();
        res.status(200).json(allResas);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};
const getResa = async (res, req) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ message: "Missing parameter" });
    }

    try {
        let resa = await db.Reservation.findOne({
            where: { id: id },
            raw: true,
        });

        if (resa === null) {
            res.status(404).json({
                message: "This reservation does not exist",
            });
        }

        res.status(200).json(resa);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};
const updateResa = async (res, req) => {
    try {
        const id = parseInt(req.params.id);
        const { date, quantity, maxQuantity } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //retrieve the user
        let resa = await db.Reservation.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (resa === null) {
            res.status(404).json({
                message: "This reservation does not exist",
            });
        }

        //update
        resa = await db.Reservation.update(
            {
                date: date,
                quantity: quantity,
                maxQuantity: maxQuantity,
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Resa Updated", data: resa });
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};
const deleteResa = async (res, req) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //deletation of user
        const resa = await db.Reservation.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(resa);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

export { createResa, getAllResas, getResa, updateResa, deleteResa };
