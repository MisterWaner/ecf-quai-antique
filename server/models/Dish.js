//Import module
import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Dish extends Model {}

    Dish.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            price: {
                type: DataTypes.FLOAT(4, 2).UNSIGNED,
                allowNull: false,
            },
            picture: {
                type: DataTypes.BLOB('long'),
                allowNull: false
            }
        },
        {
            modelName: "dish",
            tableName: "dishes",
            timestamps: false,
            sequelize,
        }
    );

    return Dish;
};
