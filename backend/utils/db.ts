import { Sequelize } from "sequelize";

import * as logger from "./logger.js";
import { POSTGRESQL_URL } from "./config.js";

if (!POSTGRESQL_URL) {
    throw new Error("POSTGRESQL_URL environment variable is not set");
}

const sequelize = new Sequelize(POSTGRESQL_URL);

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        logger.info("Connected to the database");
    } catch (e) {
        logger.error(e);
        return process.exit(1);
    }

    return null;
};

export { connectToDatabase, sequelize };
