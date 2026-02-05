import { Router } from "express";

import { random } from "../utils/randomNumberGenerator.js";
import { Song, SongRating } from "../models/index.js";

const router = Router();

router.get("/", async (_req, res) => {
    try {
        const songs = await Song.findAll({
            include: [{ model: SongRating }]
        });

        res.json(songs);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

router.get("/song-of-the-day", async (_req, res) => {
    try {
        const count = await Song.count();

        if (count === 0) {
            res.status(404).json({ error: "No songs found" });
            return;
        }

        const randomID = random(count);
        const song = await Song.findByPk(randomID, {
            include: [{ model: SongRating }]
        });

        res.json(song);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

export default router;
