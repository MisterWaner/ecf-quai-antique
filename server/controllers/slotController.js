import db from "../db/sequelize.config.js";

const createSlot = async (req, res) => {
    try {
        const { day, hour, id } = req.body;

        //Check validation for datas
        if (!day || !hour) {
            return res.send("missing data");
        }

        //check if user already exists
        let slot = await db.Slot.findOne({
            where: { id: id },
            raw: true,
        });
        if (slot !== null) {
            return res
                .status(409)
                .json({ message: `The slot ${id} already exists` });
        }

        //user creation
        slot = await db.Slot.create({
            id: id,
            day: day,
            hour: hour,
        });
        return res.json({ message: "Slot created", data: slot });
    } catch (error) {
        return res.status(500).json({ message: "Database Error", error });
    }
};

const getAllSlots = async (req, res) => {
    try {
        const allSlots = await db.Slot.findAll();
        res.status(200).json(allSlots);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const getSlot = async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ message: "Missing parameter" });
    }

    try {
        let slot = await db.Slot.findOne({
            where: { id: id },
            raw: true,
        });

        if (slot === null) {
            res.status(404).json({ message: "This slot does not exist" });
        }

        res.status(200).json(slot);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const updateSlot = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { day, hour } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //retrieve the user
        let slot = await db.Slot.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (slot === null) {
            res.status(404).json({ message: "This opening does not exist" });
        }

        //update
        opening = await db.Opening.update(
            {
                day: day,
                hour: hour,
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Slot Updated", data: slot });
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const deleteSlot = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //deletation of user
        const slot = await db.Slot.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(slot);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

export { createSlot, getAllSlots, getSlot, updateSlot, deleteSlot };
