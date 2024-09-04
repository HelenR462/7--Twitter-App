const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

const port = process.env.PORT || 3001;

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "client-alt", "dist")));

app.get("/*", async (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client-alt", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
