import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";

class Song extends Model {
    declare id: number;
    declare album: string;
    declare commentary: string;
    declare commentaryLanding?: string;
    declare rank: number;
    declare title: string;
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
