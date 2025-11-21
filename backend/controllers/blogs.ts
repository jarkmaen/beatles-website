import { Router } from "express";

import { BlogPost } from "../models/index.js";

const router = Router();

router.get("/", async (_req, res) => {
    try {
        const blogs = await BlogPost.findAll({
            attributes: [
                "id",
                "author",
                "intro",
                "slug",
                "title",
                "created_at"
            ],
            order: [["created_at", "DESC"]]
        });

        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

router.get("/:slug", async (req, res) => {
    try {
        const { slug } = req.params;

        const blog = await BlogPost.findOne({
            where: { slug }
        });

        if (!blog) {
            res.status(404).json({ error: "Blog not found" });
        } else {
            res.json(blog);
        }
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

export default router;
