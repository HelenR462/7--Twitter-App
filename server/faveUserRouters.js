const express = require("express");
const router = express.Router();
const {getTweetByUser} = require("./twitterApi")

router.get("/api/tweets/search", async (req, res) => {
  const { faveUser, faveUserId, randomTweetIndex } = req.query;

  if (!faveUser && !faveUserId && !randomTweetIndex) {
    return res.status(400).json({ error: "Missing faveUserId prameter" });
  }

  try {
    const response = await getTweetByUser(faveUserId);
    const tweet = response.data;
    res.json({ faveUserId, tweet: tweet.data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error fetching tweets from Twitter API." });
  }
});

module.exports = router;
