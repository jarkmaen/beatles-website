import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";

class Song extends Model {
    public id!: number;
    public album!: string;
    public commentary!: string;
    public commentaryLanding: string | undefined;
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
        commentaryLanding: {
            type: DataTypes.TEXT,
            allowNull: true,
            field: "commentary_landing"
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
