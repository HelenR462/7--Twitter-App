const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const port = 3001;

app.use(express.json());


// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

console.log(process.env.TOKEN);
app.get("/api/faveUser", async (req, res) => {
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

// app.post("/api/faveUser", (req, res) => {
//   data.push(req.body);
//   res.json(data);
// });

app.get("/api/randomUser", (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Missing query parameter" });
  }

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  };

  axios
    .get(
      `https://api.twitter.com/2/tweets/search/recent?query=${query}`,
      config
    )
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (err) {
      console.error('Error from Twitter API:', err.response?.data || err.message);
      res.status(500).json({ error: "Twitter API request failed" });
    });
});


app.post("/api/randomUser", (req, res) => {
  const { name, content } = req.body;

  if (name && content) {
    const randomUser = { name, content };
    users.push(randomUser);
    res.json(randomUser);
  } else {
    res.status(400).json({ error: "Name and content are required" });
  }
});

// app.get("/api/searchRandomUsers", (req, res) => {
//   const { query } = req.query; // Assuming the query parameter contains the search term

//   if (!query) {
//     return res.status(400).json({ error: "Search query is required" });
//   }

//   const results = users.filter((user) => {
//     return user.name.includes(query) || user.content.includes(query);
//   });

//   res.json(results);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
