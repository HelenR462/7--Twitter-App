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

  try {
    const response = await axios.get(
      `https://api.twitter.com/2/users/${faveUserId}/tweets?user.fields=username&tweet.fields=created_at,text&exclude=retweets,replies`,
      config
    );
    console.log(response.data);
    const tweet = response.data;
    res.json({ faveUserId, tweet: tweet.data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error fetching tweets from Twitter API." });
  }
});

app.get("/api/randomUser", async (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ error: "Missing query parameter" });
  }

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
  };

  try {
    const response = await axios.get(
      `https://api.twitter.com/2/tweets/search/recent?query=${search}&tweet.fields=created_at,author_id&user.fields=profile_image_url&expansions=attachments.media_keys`,
      config
    );

    const tweets = response.data.data;
    // console.log("tweet.user.img:", tweets.user.img);
    // Fetch user details for each tweet
    const tweetUserData = await Promise.all(
      tweets.map(async (tweet) => {
        const userResponse = await axios.get(
          `https://api.twitter.com/2/users/${tweet.author_id}`,
          config
        );
        const userData = userResponse.data.data;
        return {
          ...tweet,
          user: {
            name: userData.name,
            img: userData.profile_image_url,
          },
        };
      })
    );

    res.json(tweetUserData);
  } catch (err) {
    console.error("Error from Twitter API:", err.response?.data || err.message);
    res.status(500).json({ error: "Twitter API request failed" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// .then(function (response) {
//   console.log(response.data);
//   res.json(response.data.data);
//   console.log("search:", search);
// })
