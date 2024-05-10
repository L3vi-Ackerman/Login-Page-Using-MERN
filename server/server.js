const express = require("express");
const app = express();
const router = require("./Routes/router");
require("dotenv").config({ path: "./config.env" });
const connectDB = require("./Database/db-connection");

app.use(express.json());
app.use("/api", router);

const port = process.env.PORT;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`listening to port ${port}`);
  });
});
