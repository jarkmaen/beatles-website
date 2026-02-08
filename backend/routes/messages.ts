import { createMessage } from "../controllers/messages.js";
import { Router } from "express";

const router = Router();

router.post("/", createMessage);

export default router;
