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
  try {
    const { faveUser, faveUserId, randomTweetIndex } = req.query;

    console.log("faveUser:", faveUser);
    console.log("faveUserId:", faveUserId);
    console.log("randomTweetIndex:", randomTweetIndex);

    if (!faveUser && !faveUserId && !randomTweetIndex) {
      return res.status(400).json({ error: "Missing faveUserId prameter" });
    }

    const config = {
      headers: { Authorization: `Bearer ${process.env.TOKEN}` },
    };

    const response = await axios.get(
      `https://api.twitter.com/2/users/${faveUserId}/tweets`,
      config
    );
    console.log(response.data);
    const tweet = response.data;
    res.json({ faveUserId, tweet });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error fetching tweets from Twitter API." });
  }
});

app.get("/api/randomUser", (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ error: "Missing query parameter" });
  }

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  };

  //when searching by username and content,add conditionl argg-==>
  // random recent 7 days,
  // const randomTweets = Math.floor(Math.random())
  // existing 10 days,
  // doesnt exist, show message of "user not found"

  // tweet search username(tweet_fields/user_fields)
  // add text (works)
  // add image
  //  add date(optional)
  axios
    .get(
      `https://api.twitter.com/2/tweets/search/recent?query=${search}&tweet.fields=created_at`,
      config
    )
    .then(function (response) {
      console.log(response.data);
      res.send(response.data.data);
      console.log("search:", search);
    })
    .catch(function (err) {
      console.error(
        "Error from Twitter API:",
        err.response?.data || err.message
      );
      res.status(500).json({ error: "Twitter API request failed" });
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
