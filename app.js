require("dotenv").config();

const apiKey = process.env.API_KEY;
const password = process.env.PASSWORD;

if (!process.env.API_KEY || !process.env.PASSWORD) {
  console.error("API_KEY or PASSWORD is not defined in the environment variables.");
  process.exit(1);
}

console.log("Secrets loaded successfully.");

