import { NextFunction, Request, Response } from "express";

import * as logger from "./logger.js";

const requestLogger = (req: Request, _res: Response, next: NextFunction) => {
    logger.info("Method:", req.method);
    logger.info("Path:  ", req.path);
    logger.info("Body:  ", req.body);
    logger.info("---");
    next();
};

const unknownEndpoint = (_req: Request, res: Response) => {
    res.status(404).send({ error: "Unknown endpoint" });
};

export { requestLogger, unknownEndpoint };
