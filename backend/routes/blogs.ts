import { getAllBlogs } from "../controllers/blogs.js";
import { Router } from "express";

const router = Router();

router.get("/", getAllBlogs);

export default router;
