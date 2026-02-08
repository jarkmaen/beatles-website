import { random } from "../utils/randomNumberGenerator.js";
import { Request, Response } from "express";
import { Song, SongRating } from "../models/index.js";

export const getAllSongs = async (_req: Request, res: Response) => {
    try {
        const songs = await Song.findAll({
            include: [{ model: SongRating }]
        });

        res.json(songs);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

export const getSongOfTheDay = async (_req: Request, res: Response) => {
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
};
