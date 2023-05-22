import db from "../db/sequelize.config.js";

const createOpening = async (req, res) => {
    try {
        const {
            day,
            midiTimeFrom,
            midiTimeTo,
            soirTimeFrom,
            soirTimeTo,
            isOpenSoir,
            isOpenMidi,
            id,
        } = req.body;

        //Check validation for datas
        if (
            !day ||
            !midiTimeFrom ||
            !midiTimeTo ||
            !soirTimeFrom ||
            !soirTimeTo ||
            !isOpenSoir ||
            !isOpenMidi
        ) {
            return res.send("missing data");
        }

        //check if user already exists
        let opening = await db.Opening.findOne({
            where: { id: id },
            raw: true,
        });
        if (opening !== null) {
            return res
                .status(409)
                .json({ message: `The opening ${id} already exists` });
        }

        //user creation
        opening = await db.Opening.create({
            id: id,
            day: day,
            midiTimeFrom: midiTimeFrom,
            midiTimeTo: midiTimeTo,
            soirTimeFrom: soirTimeFrom,
            soirTimeTo: soirTimeTo,
            isOpenSoir: isOpenSoir,
            isOpenMidi: isOpenMidi,
        });
        return res.json({ message: "Opening created", data: opening });
    } catch (error) {
        return res.status(500).json({ message: "Database Error", error });
    }
};

const getAllOpenings = async (req, res) => {
    try {
        const allOpenings = await db.Opening.findAll();
        res.status(200).json(allOpenings);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const getOpening = async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ message: "Missing parameter" });
    }

    try {
        let opening = await db.Opening.findOne({
            where: { id: id },
            raw: true,
        });

        if (opening === null) {
            res.status(404).json({ message: "This opening does not exist" });
        }

        res.status(200).json(opening);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const updateOpening = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const {
            day,
            midiTimeFrom,
            midiTimeTo,
            soirTimeFrom,
            soirTimeTo,
            isOpenSoir,
            isOpenMidi,
        } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //retrieve the user
        let opening = await db.Opening.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (opening === null) {
            res.status(404).json({ message: "This opening does not exist" });
        }

        //update
        opening = await db.Opening.update(
            {
                day: day,
                midiTimeFrom: midiTimeFrom,
                midiTimeTo: midiTimeTo,
                soirTimeFrom: soirTimeFrom,
                soirTimeTo: soirTimeTo,
                isOpenSoir: isOpenSoir,
                isOpenMidi: isOpenMidi,
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Opening Updated", data: opening });
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const deleteOpening = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Missing parameter" });
        }

        //deletation of user
        const opening = await db.Opening.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(opening);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

export {
    createOpening,
    getAllOpenings,
    getOpening,
    updateOpening,
    deleteOpening,
};
