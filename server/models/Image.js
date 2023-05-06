//Import module
import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Image extends Model {}

    Image.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            path: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        },
        {
            modelName: "image",
            tableName: "images",
            timestamps: false,
            sequelize,
        }
    );

    return Image;
};
