const express = require("express");
const router = express.Router();
const { getTweetByContent, getUserById } = require("./twitterApi");

router.get("/api/tweets/random", async (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ error: "Missing query parameter" });
  }

  try {
    const response = await getTweetByContent(search);
    const tweets = response.data.data;

    if (!tweets || tweets.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const tweetUserData = await Promise.all(
      tweets.map(async (tweet) => {
        let userImg = "";
        let userName = "";

        if (tweet.author_id) {
          const userResponse = await getUserById(tweet.author_id);
          const userData = userResponse.data.data;
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

module.exports = router;
