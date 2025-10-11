import { Router } from "express";

import { Song } from "../models/index.js";

const router = Router();

router.get("/", async (_req, res) => {
    try {
        const songs = await Song.findAll();
        res.json(songs);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

router.get("/random", async (_req, res) => {
    try {
        const count = await Song.count();

        if (count === 0) {
            res.status(404).json({ error: "No songs found" });
            return;
        }

        const randomID = Math.floor(Math.random() * count) + 1;
        const song = await Song.findByPk(randomID);

        res.json(song);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

export default router;
