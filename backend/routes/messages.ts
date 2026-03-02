import { createMessage } from "../controllers/messages.js";
import { Router } from "express";
import { validateMessage } from "../middlewares/validateMessage.js";

const router = Router();

router.post("/", validateMessage, createMessage);

export default router;
