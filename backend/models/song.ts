import { DataTypes, Model } from "sequelize";
import { sequelize } from "../utils/db.js";

class Song extends Model {
    public id!: number;
    public album!: string;
    public commentary!: string;
    public commentary_landing: string | undefined;
    public rank!: number;
    public title!: string;
}

Song.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        album: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        commentary: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        commentary_landing: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        rank: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        modelName: "Song",
        sequelize,
        tableName: "song",
        timestamps: false
    }
);

export default Song;
