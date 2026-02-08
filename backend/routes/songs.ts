import { getAllSongs, getSongOfTheDay } from "../controllers/songs.js";
import { Router } from "express";

const router = Router();

router.get("/", getAllSongs);
router.get("/song-of-the-day", getSongOfTheDay);

export default router;
