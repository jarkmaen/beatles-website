import express from "express";

import * as config from "./utils/config.js";
import * as logger from "./utils/logger.js";

const app = express();

app.use(express.json());
app.use(express.static("dist"));

app.get("/ping", (_req, res) => {
    res.send("pong");
});

export default app;
