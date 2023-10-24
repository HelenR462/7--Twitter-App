const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const port = 3001;

app.use(express.json());

// app.use(express.static("./public"));
// app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

 console.log(process.env.TOKEN);
app.get("/api/faveUser", (req, res) => {
  const config = {
    headers: { Authorization: `Bearer ${process.env.TOKEN}` },
  };

  axios
    .get("https://api.twitter.com/2/tweets/search/recent?query=nasa", config)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (err) {
      console.log(err);
    });
});


app.post(
  "https://api.twitter.com/2/tweets/search/recent?query=nasa",
  (req, res) => {
   
    res,json(req.body);
    
  }
);

app.get("/api/randomUser", (req, res) => {
  res.json([{ name: "Milo", content: "I love to bark!" }]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
