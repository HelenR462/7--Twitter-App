const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const { default: UserTweetCard } = require("../client/src/components/Tweets/TweetCard/UserTweetCard");
// const { default: UserTweetCard } = require("../client/src/components/Tweets/TweetCard/UserTweetCard");
const port = 3001;

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send(data);
// });

// app.post("/", (req, res) => {
//   // const user = req.body;
//   // users.push(req.body);
//    res.send("post reached");

//   // res.send(`User with the name ${user.userName} is added to the database!`);
// });

// app.get("/id", (req, res) => {

//   res.send("This is the a test")
// })

app.get("/", (req, res) => {
  res.send("Hello from Homepage");
});

app.get("/RandomTweet", (req, res) => {
  const randomTweet = {
    userName: "andy",
    id: "",
    userHandle: "",
    date: "",
    text: "",
  };

  res.send(randomTweet);
});

app.get("/UserTweetCard", (req, res) => {

console.log(user)
  res.send(UserTweetCard);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
