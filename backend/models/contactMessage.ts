import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";

class ContactMessage extends Model {
    declare id: number;
    declare email: string;
    declare firstName: string | null;
    declare lastName: string | null;
    declare message: string;
    declare createdAt: Date;
}

ContactMessage.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING(100),
            allowNull: true,
            field: "first_name"
        },
        lastName: {
            type: DataTypes.STRING(100),
            allowNull: true,
            field: "last_name"
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: "created_at"
        }
    },
    {
        modelName: "ContactMessage",
        sequelize,
        tableName: "contact_message",
        timestamps: false
    }
);

export default ContactMessage;
