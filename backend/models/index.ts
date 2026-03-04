import BlogPost from "./blogPost.js";
import ContactMessage from "./contactMessage.js";
import Song from "./song.js";
import SongRating from "./songRating.js";

Song.hasMany(SongRating, { as: "songRatings", foreignKey: "songId" });
SongRating.belongsTo(Song, { foreignKey: "songId" });

export { BlogPost, ContactMessage, Song, SongRating };
