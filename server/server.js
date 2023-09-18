const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
// const { default: UserTweet } = require("../client/src/components/Tweets/UserTweet/UserTweet");
const port = 3001;

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello from Homepage");
});

app.get("/api/RandomTweet", (req, res) => {

  res.send(randomTweet);
});

app.get("/UserTweet", (res,req)=>{
console.log("Hello!")
  res.send("Hello")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



const randomTweet = [
  
  {
    name: "Elon Musk",
    handle: "@elonmusk",
    content: "Hello everyone, welcome toTwitter!",
    date: "Aug.6/2023",
  },

  {
    name: "Francine Rivers",
    handle: "@francinerivers",
    content: "Hello everyone, welcome toTwitter!",
    date: "Aug.16/2023",
  },

  {
    name: "Julia Roberts",
    handle: "@juliaroberts",
    content: "Hello everyone, welcome toTwitter!",
    date: "Aug.26/2023",
  },
  {
    name: "Quizz Scape",
    handle: "@quizzskape",
    content: "Hello everyone, welcome to Quizz Scape!",
    date: "Aug.11/2023",
  },

  {
    name: "The Weather Network",
    handle: "@juliaroberts",
    content: "Hello everyone, welcome toTwitter!",
    date: "Aug.26/2023",
  },
]
