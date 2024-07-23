const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const port = 3001;

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "client-alt", "dist")));

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
      `https://api.twitter.com/2/tweets/search/recent?query=${search}&tweet.fields=created_at,author_id&user.fields=profile_image_url`,
      config
    );

    const tweets = response.data.data;

    if (!tweets || tweets.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const tweetUserData = await Promise.all(
      tweets.map(async (tweet) => {
        let userImg = "";
        let userName = "";

        if (tweet.author_id) {
          const userResponse = await axios.get(
            `https://api.twitter.com/2/users/${tweet.author_id}?user.fields=profile_image_url`,
            config
          );
          const userData = userResponse.data.data;
          console.log(userData);
          if (userData && userData.profile_image_url) {
            userImg = userData.profile_image_url;
          }
          if (userData && userData.name) {
            userName = userData.name;
          }
        }
        return {
          ...tweet,
          user: {
            name: userName,
            img: userImg,
          },
        };
      })
    );

    res.json(tweetUserData);
  } catch (err) {
    console.error("Error from Twitter API:", err.response?.data || err.message);
    if (err.response && err.response.status === 404) {
      return res.status(404).json({ error: "User not found" });
    } else {
      return res.status(500).json({ error: "Twitter API request failed" });
    }
  }
});

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client-alt", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
