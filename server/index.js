import express from "express";
import cors from "cors";
import pool from "./db.js";
import multer from "multer";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import axios from "axios";
import { ocrSpace } from "ocr-space-api-wrapper";
import { fileURLToPath } from "url";
import { dirname } from "path";
import OpenAI from "openai";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const UploadMiddleware = multer({ dest: "uploads/" });
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();

const app = express();

// Replace with your actual API key (get one from Google AI Studio)
const API_KEY = process.env.GEMINI;

// Specify the model name (e.g., "gemini-pro")
const MODEL_NAME = "gemini-pro";

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.get("/", async (req, res) => {
  try {
    const booksInfo = await pool.query("SELECT * FROM books WHERE id=$1", [1]);
    res.status(200).json({ data: booksInfo });
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/upload", UploadMiddleware.single("pdfFile"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  if (req.file === undefined)
    res.status(200).json({ data: "No Data Found For Updation..." });
  else {
    try {
      const { originalname, path } = req.file;
      const parts = originalname.split(".");
      const extension = parts[parts.length - 1];
      const newPath = path + "." + extension;
      fs.renameSync(path, newPath);

      const imgPath = newPath;
      console.log("Hello", imgPath);
      const apiKey = "K86519444388957";

      try {
        const apiResponse = await ocrSpace(imgPath, {
          apiKey: "K86519444388957",
        });
        res.status(200).json({ data: res2 });
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      res.status(400).json({ data: error });
    }
  }
});

app.post("/upload1", UploadMiddleware.single("pdfFile1"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  if (req.file === undefined)
    res.status(200).json({ data: "No Data Found For Updation..." });
  else {
    try {
      const { originalname, path } = req.file;
      const parts = originalname.split(".");
      const extension = parts[parts.length - 1];
      const newPath = path + "." + extension;
      fs.renameSync(path, newPath);
      res.status(200).json({ data: newPath });
    } catch (error) {
      res.status(403).json({ data: error });
    }
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
