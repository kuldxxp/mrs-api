import { Elysia } from "elysia";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = new Elysia()
  .get("/", () => "Hello")
  .listen(PORT);

console.log(`Server running on ${PORT}!`);
