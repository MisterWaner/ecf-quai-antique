import Axios from "../api/axios";

//recovery of all users
let getAllUsers = () => {
    return Axios.get("/users");
};

//recovery of one specific user
let getUser = (id) => {
    return Axios.get(`/users/${id}`);
};

//add an user
let addUser = (user) => {
    return Axios.post("/users", user);
};

//update an user
let updateUser = (user) => {
    return Axios.patch(`/users/${user.id}`, user);
};
//delete an user
let deleteUser = (id) => {
    return Axios.delete(`/users/${id}`);
};

export const userService = {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
};
