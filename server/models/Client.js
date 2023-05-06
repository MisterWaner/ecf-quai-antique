//Import module
import { DataTypes, Model } from "sequelize";
import User from "./User.js";

export default (sequelize) => {
    class Client extends Model {}

    Client.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            allergies: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            phone: {
                type: DataTypes.INTEGER(10),
                validate: {
                    isNumeric: true, //Data validation
                },
                allowNull: true,
                unique: true,
            },
            firstname: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: "users",
                    key: "id"
                }
            }
        },
        {
            modelName: "client",
            tableName: "clients",
            timestamps: false,
            sequelize,
        }
    );

    return Client;
};
