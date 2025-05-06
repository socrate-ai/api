import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import chalk from "chalk";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = process.env.PORT || 1337;
const MONGO_URI = process.env.MONGO_URI || "";

mongoose
.connect(MONGO_URI)
.then(() => {
    console.log(chalk.greenBright("✅ Connected to MongoDB."))

    app.listen(PORT, () => {
        console.log(
            chalk.greenBright("🚀 Server running on ") + chalk.cyanBright(`http://127.0.0.1:${PORT}/`)
        );
    });
})