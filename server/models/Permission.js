//Import module
import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Permission extends Model {}

    Permission.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
        },
        {
            modelName: "permission",
            tableName: "permissions",
            timestamps: false,
            sequelize,
        }
    );

    return Permission;
};
