//Import module
import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Opening extends Model {}
    
    Opening.init(
        {
            id: {
                type: DataTypes.INTEGER(4),
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            day: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            midiTimeFrom: {
                type: DataTypes.TIME,
                allowNull: true,
            },
            midiTimeTo: {
                type: DataTypes.TIME,
                allowNull: true,
            },
            soirTimeFrom: {
                type: DataTypes.TIME,
                allowNull: true,
            },
            soirTimeTo: {
                type: DataTypes.TIME,
                allowNull: true,
            },
            isOpenMidi: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            isOpenSoir: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
        },
        {
            modelName: "opening",
            tableName: "openings",
            timestamps: false,
            sequelize,
        }
    );

    return Opening;
};
