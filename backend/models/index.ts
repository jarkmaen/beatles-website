import BlogPost from "./blogPost.js";
import ContactMessage from "./contactMessage.js";
import Song from "./song.js";
import SongRating from "./songRating.js";

Song.hasMany(SongRating, { foreignKey: "song_id" });
SongRating.belongsTo(Song, { foreignKey: "song_id" });

export { BlogPost, ContactMessage, Song, SongRating };
