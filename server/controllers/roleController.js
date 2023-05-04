import Role from "../models/Role.js";

//Read
const getRole = async (req, res, next) => {

    try {

        const id = req.params.id;
        const [role] = await Role.fetchById(id);
        res.status(200).json(role);

    } catch (error) {

        if (!error.statusCode) {
            error.statusCode = 500;
        }

        next(error);
    }
};

const getAllRoles = async (req, res, next) => {

    try {

        const [allRoles] = await Role.fetchAll();
        res.status(200).json(allRoles);

    } catch (error) {

        if (!error.statusCode) {
            error.statusCode = 500;
        }

        next(error);
    }
};

//Create
const createRole = async (req, res, next) => {

    try {

        const { name, description } = req.body;

        if (!name) {
            res.json("missing data");
        }

        const [postResponse] = await Role.post(name, description);
        res.status(201).json(postResponse);

    } catch (error) {

        if (!error.statusCode) {
            error.statusCode = 500;
        }

        next(error);
    }
};

//Delete
const deleteRole = async (req, res, next) => {

    try {

        const id = req.params.id;
        const [deleteResponse] = await Role.delete(id);
        res.status(200).json(deleteResponse);

    } catch (error) {

        if (!error.statusCode) {
            error.statusCode = 500;
        }

        next(error);
    }
};

export { createRole, getRole, getAllRoles, deleteRole };
