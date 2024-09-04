const axios = require("axios");

const config = {
  headers: { Authorization: `Bearer ${process.env.TOKEN}` },
};

async function getTweetByContent(searchTerm) {
  return await axios.get(
    `https://api.twitter.com/2/users/${searchTerm}/tweets?user.fields=username&tweet.fields=created_at,text&exclude=retweets,replies`,
    config
  );
}

async function getTweetByUser(userId) {
  return await axios.get(
    `https://api.twitter.com/2/users/${userId}?user.fields=profile_image_url`,
    config
  );
}

async function getUserById(userId) {
  return await axios.get(
    `https://api.twitter.com/2/tweets/search/recent?query=${userId}&tweet.fields=created_at,author_id&user.fields=profile_image_url`,
    config
  );
}

module.exports = {
   getTweetByContent, 
   getTweetByUser, 
   getUserById 
  };
