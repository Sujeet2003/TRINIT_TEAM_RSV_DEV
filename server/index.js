import express from "express";
import cors from "cors";
import pool from "./db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: " http://localhost:5173/",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const booksInfo = await pool.query("SELECT * FROM books WHERE id=$1", [1]);
        res.status(200).json({data : booksInfo})
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
