#!/usr/bin/env node

import express from "express";
import "dotenv/config";

import { default as swapRouter } from "./routes/api/v1/swap.js";

const app = express();
const port = process.env.port ?? 8080;

app.use("/api/v1/swap/", swapRouter);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
