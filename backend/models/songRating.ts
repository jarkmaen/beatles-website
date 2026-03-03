import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/index.js";

class SongRating extends Model {
    declare id: number;
    declare song_id: number;
    declare bassline?: number;
    declare chordProgression?: number;
    declare culturalSignificance?: number;
    declare fullInstrumentation?: number;
    declare lyrics?: number;
    declare originalityInnovation?: number;
    declare percentage?: number;
    declare percussion?: number;
    declare solo?: number;
    declare vocals?: number;
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
