import { Sequelize } from "sequelize";
import { config } from "dotenv";
config();

import User from "../models/User.js";
import Category from "../models/Category.js";
import Dish from "../models/Dish.js";
import Formula from "../models/Formula.js";
import Image from "../models/Image.js";
import Menu_Formula from "../models/Menu_Formula.js";
import Menu from "../models/Menu.js";
import Opening from "../models/Opening.js";
import Reservation from "../models/Reservation.js";
import Slot from "../models/Slot.js";
import Permission from "../models/Permission.js";

//Create connection between sequelize and db
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
    }
);

//Relation initalization
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = User(sequelize);
db.Category = Category(sequelize);
db.Dish = Dish(sequelize);
db.Formula = Formula(sequelize);
db.Image = Image(sequelize);
db.Menu_Formula = Menu_Formula(sequelize);
db.Menu = Menu(sequelize);
db.Opening = Opening(sequelize);
db.Reservation = Reservation(sequelize);
db.Slot = Slot(sequelize);
db.Permission = Permission(sequelize);


db.User.hasMany(db.Reservation);
db.Reservation.belongsTo(db.User);
db.Slot.hasMany(db.Reservation);
db.Reservation.belongsTo(db.Slot);
db.User.hasMany(db.Permission);
db.Permission.belongsTo(db.User);
db.Category.hasMany(db.Dish);
db.Dish.belongsTo(db.Category);
db.Dish.hasMany(db.Image);
db.Image.belongsTo(db.Dish);
db.Menu.belongsToMany(db.Formula, {through: db.Menu_Formula});
db.Formula.belongsToMany(db.Menu, {through: db.Menu_Formula});

db.Permission.hasMany(db.Category);
db.Category.belongsTo(db.Permission);
db.Permission.hasMany(db.Dish);
db.Dish.belongsTo(db.Permission);
db.Permission.hasMany(db.Formula);
db.Formula.belongsTo(db.Permission);
db.Permission.hasMany(db.Menu);
db.Menu.belongsTo(db.Permission);
db.Permission.hasMany(db.Opening);
db.Opening.belongsTo(db.Permission);
db.Permission.hasMany(db.Image);
db.Image.belongsTo(db.Permission);




db.sequelize.sync({alter: true});

export default db;