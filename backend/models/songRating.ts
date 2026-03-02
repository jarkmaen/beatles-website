import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";

class SongRating extends Model {
    public id!: number;
    public song_id!: number;
    public bassline?: number;
    public chordProgression?: number;
    public culturalSignificance?: number;
    public fullInstrumentation?: number;
    public lyrics?: number;
    public originalityInnovation?: number;
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
        chordProgression: {
            type: DataTypes.SMALLINT,
            field: "chord_progression"
        },
        culturalSignificance: {
            type: DataTypes.SMALLINT,
            field: "cultural_significance"
        },
        fullInstrumentation: {
            type: DataTypes.SMALLINT,
            field: "full_instrumentation"
        },
        lyrics: DataTypes.SMALLINT,
        originalityInnovation: {
            type: DataTypes.SMALLINT,
            field: "originality_innovation"
        },
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
