import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import { nanoid } from "nanoid";
const app = express();
import jobRouter from "./routes/jobRoutes.js";
import mongoose from "mongoose";

//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

app.use(express.json());

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("✅ DB Connected");
  app.listen(port, () => {
    console.log(`server running at ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
