//Import module
import { DataTypes, Model } from "sequelize";

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
                allowNull: false,
            },
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
