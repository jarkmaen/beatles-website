import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";

class SongRating extends Model {
    declare id: number;
    declare songId: number;
    declare bassline: number | null;
    declare chordProgression: number | null;
    declare culturalSignificance: number | null;
    declare fullInstrumentation: number | null;
    declare lyrics: number | null;
    declare originalityInnovation: number | null;
    declare percentage: number | null;
    declare percussion: number | null;
    declare solo: number | null;
    declare vocals: number | null;
}

SongRating.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        songId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "song_id",
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
