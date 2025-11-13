import { DataTypes, Model } from "sequelize";
import { sequelize } from "../utils/db.js";

class ContactMessage extends Model {
    public id!: number;
    public email!: string;
    public first_name?: string | undefined;
    public last_name?: string | undefined;
    public message!: string;
    public created_at!: Date;
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
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    },
    {
        modelName: "ContactMessage",
        sequelize,
        tableName: "contact_messages",
        timestamps: false
    }
);

export default ContactMessage;
