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
  const { faveUser } = req.query;

  console.log("faveUser:", faveUser);

  if (!faveUser) {
    return res.status(400).json({ error: "Missing faveUser parameter" });
  }

  const config = {
    headers: { Authorization: `Bearer ${process.env.TOKEN}` },
  };

  axios
    .get(
      `https://api.twitter.com/2/tweets?tweet.fields=${faveUser},tweet_id,text,created_at`,
      config
    )
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (err) {
      if (err.response) {
        console.error("Error response from Twitter API:", err.response.data);
        console.error("Status code:", err.response.status);
      } else if (err.request) {
        console.error("No response received from Twitter API");
      } else {
        console.error("Error setting up the request:", err.message);
      }
      res
        .status(500)
        .json({ error: "Error fetching tweets from Twitter API." });
    });
});

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

  //when searching by username and content,add conditionl argg-==>
  // random recent 7 days,
  // existing 10 days,
  // doesnt exist, show message of "user not found"

  // tweet search username(tweet_fields/user_fields)
  // add text (works)
  // add image
  //  add date(optional)
  axios
    .get(
      `https://api.twitter.com/2/tweets?q=${search}&tweet.fields=created_at`,
      config
    )
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (err) {
      console.error(
        "Error from Twitter API:",
        err.response?.data || err.message
      );
      res.status(500).json({ error: "Twitter API request failed" });
    });
});

// fave user random tweet fetch by tweetId

// app.get("/api/faveUser", (req, res) => {
// const { query } = req.query;

// if (!query) {
//   return res.status(400).json({ error: "Missing query parameter" });
// }

//   const config = {
//     headers: {
//       Authorization: `Bearer ${process.env.TOKEN}`,
//     },
//   };
//   axios
//     .get(`https://api.twitter.com/2/tweets/search/recent?query=${ID}`, {
//       params: {
//         ID: 12345,
//       //  const randomTweets = Math.floor(Math.random())
//       },
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
