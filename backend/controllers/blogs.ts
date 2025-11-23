import { Router } from "express";

import { BlogPost } from "../models/index.js";

const router = Router();

router.get("/", async (_req, res) => {
    try {
        const blogs = await BlogPost.findAll({
            order: [["created_at", "DESC"]]
        });

        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

export default router;
