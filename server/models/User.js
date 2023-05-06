//Import module
import { DataTypes, Model } from "sequelize";

//User model

export default (sequelize) => {
    class User extends Model {}

    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true, //data validation
                },
                allowNull: false,
                unique: true, //unique email
            },
            password: {
                type: DataTypes.STRING(64),
                is: /^[0-9a-z]{64}$/i, //constraint regex
                allowNull: false,
            },
            confirmation: {
                type: DataTypes.STRING(64),
                is: /^[0-9a-z]{64}$/i, //constraint regex
                allowNull: false,
            },
            role: {
                type: DataTypes.ENUM,
                allowNull: true,
                values: ["admin", "client"],
                defaultValue: "client",
            },
            firstname: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            phone: {
                type: DataTypes.INTEGER(10),
                validate: {
                    isNumeric: true, //Data validation
                },
                allowNull: false,
                unique: true,
            },
        },
        {
            modelName: "user",
            tableName: "users",
            timestamps: false,
            sequelize
        }
    );

    return User;
}
