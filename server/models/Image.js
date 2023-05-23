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
            image: {
                type: DataTypes.BLOB,
                allowNull: false,
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
