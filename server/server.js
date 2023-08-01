const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("");
});

app.get("/api/name", (req, res) => {
  const response = {
    name: "Andy",
  };
  // console.log("Andy is the best!")

  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
