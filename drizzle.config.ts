import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL;

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString,
  },
};
