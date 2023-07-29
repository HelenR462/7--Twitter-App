const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/name", (req, res) => {
  const response={
    name:"Andy",
  }

  res.send(response)
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
