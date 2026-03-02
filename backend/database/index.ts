import * as config from "../utils/config.js";
import * as logger from "../utils/logger.js";
import { Sequelize } from "sequelize";

export const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();

        logger.info("Connected to the database");
    } catch (error) {
        logger.error(error);
        process.exit(1);
    }
};

export const sequelize = new Sequelize(config.POSTGRESQL_URL);
