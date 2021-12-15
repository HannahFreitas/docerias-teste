require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/exemplosRoutes");
const database = require("./database/mongoConfig");

const app = express();

database.connect();
app.use(cors());
app.use(express.json());

app.use("/", routes);

module.exports = app


