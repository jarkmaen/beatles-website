import express from "express";

import * as middleware from "./utils/middleware.js";
import songsRouter from "./controllers/songs.js";

const app = express();

app.use(express.json());
app.use(express.static("dist"));
app.use(middleware.requestLogger);

app.use("/api/songs", songsRouter);

app.use(middleware.unknownEndpoint);

export default app;
