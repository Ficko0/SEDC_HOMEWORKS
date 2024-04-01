//Always import at the start of the main server file to ensure that environment variables are loaded properly
import "dotenv/config";
import express from "express";
import { globalRouter } from "./src/const/router.const.js";
import { connect } from "mongoose";
import MONGO_URI from "./src/const/db.const.js";

const app = express();
app.use(express.json());

app.use("/api", globalRouter);

connect(MONGO_URI)
  .then( () => {
    app.listen(process.env.PORT, process.env.HOST, async () => {
      console.log(`Server: http://${process.env.HOST}:${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.log(`Issue while connecting to mongoDb`, { err });
  })