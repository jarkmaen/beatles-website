import cors from "cors";
import express from "express";

import * as middleware from "./utils/middleware.js";
import blogsRouter from "./controllers/blogs.js";
import messagesRouter from "./controllers/messages.js";
import songsRouter from "./controllers/songs.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use(middleware.requestLogger);

app.use("/api/blogs", blogsRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/songs", songsRouter);

app.use(middleware.unknownEndpoint);

export default app;
