//Import module
import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Reservation extends Model {}

    Reservation.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            quantity: {
                type: DataTypes.SMALLINT,
                allowNull: false,
                defaultValue: 1,
            },
            maximumCapacity: {
                type: DataTypes.INTEGER(2),
                allowNull: false,
                defaultValue: 60,
            },
        },
        {
            modelName: "reservation",
            tableName: "reservations",
            timestamps: false,
            sequelize,
        }
    );

    return Reservation;
};
