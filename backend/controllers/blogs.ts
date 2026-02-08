import { BlogPost } from "../models/index.js";
import { Request, Response } from "express";

export const getAllBlogs = async (_req: Request, res: Response) => {
    try {
        const blogs = await BlogPost.findAll({
            order: [["created_at", "DESC"]]
        });

        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};
