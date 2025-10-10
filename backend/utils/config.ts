import "dotenv/config";

const PORT = process.env.PORT;
const POSTGRESQL_URL = process.env.POSTGRESQL_URL;

export { PORT, POSTGRESQL_URL };
