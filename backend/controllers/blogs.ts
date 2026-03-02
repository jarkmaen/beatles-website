import * as logger from "../utils/logger.js";
import type { Request, Response } from "express";
import { BlogPost } from "../models/index.js";

export const getAllBlogs = async (_req: Request, res: Response) => {
    try {
        const blogs = await BlogPost.findAll({
            order: [["createdAt", "DESC"]]
        });

        res.json(blogs);
    } catch (error) {
        logger.error(error);
        res.status(500).json({ error: "Server error" });
    }
};
