import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";

class SongRating extends Model {
    public id!: number;
    public song_id!: number;
    public bassline?: number;
    public chord_progression?: number;
    public cultural_significance?: number;
    public full_instrumentation?: number;
    public lyrics?: number;
    public originality_innovation?: number;
    public percentage?: number;
    public percussion?: number;
    public solo?: number;
    public vocals?: number;
}

SongRating.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                key: "id",
                model: "songs"
            }
        },
        bassline: DataTypes.SMALLINT,
        chord_progression: DataTypes.SMALLINT,
        cultural_significance: DataTypes.SMALLINT,
        full_instrumentation: DataTypes.SMALLINT,
        lyrics: DataTypes.SMALLINT,
        originality_innovation: DataTypes.SMALLINT,
        percentage: DataTypes.DECIMAL(5, 2),
        percussion: DataTypes.SMALLINT,
        solo: DataTypes.SMALLINT,
        vocals: DataTypes.SMALLINT
    },
    {
        modelName: "SongRating",
        sequelize,
        tableName: "song_rating",
        timestamps: false
    }
);

export default SongRating;
