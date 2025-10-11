import Song from "./song.js";
import SongRating from "./songRating.js";

Song.hasMany(SongRating, { foreignKey: "song_id" });
SongRating.belongsTo(Song, { foreignKey: "song_id" });

export { Song, SongRating };
