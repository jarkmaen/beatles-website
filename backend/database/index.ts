import * as logger from "../utils/logger.js";
import { POSTGRESQL_URL } from "../utils/config.js";
import { Sequelize } from "sequelize";

export const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        logger.info("Connected to the database");
    } catch (e) {
        logger.error(e);
        process.exit(1);
    }
};

export const sequelize = new Sequelize(POSTGRESQL_URL);
