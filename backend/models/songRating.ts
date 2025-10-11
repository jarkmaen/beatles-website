import { DataTypes, Model } from "sequelize";
import { sequelize } from "../utils/db.js";

class SongRating extends Model {
    public id!: number;
    public song_id!: number;
    public bassline: number | undefined;
    public chord_progression: number | undefined;
    public cultural_significance: number | undefined;
    public full_instrumentation: number | undefined;
    public lyrics: number | undefined;
    public originality_innovation: number | undefined;
    public percentage: number | undefined;
    public percussion: number | undefined;
    public solo: number | undefined;
    public vocals: number | undefined;
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
                model: "songs",
                key: "id"
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
        tableName: "song_ratings",
        timestamps: false
    }
);

export default SongRating;
