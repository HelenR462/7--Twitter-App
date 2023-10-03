const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const port = 3001;

app.use(express.json());

// app.use(express.static("./public"));
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
  // const options = {
  //   method: "GET",
  //   URL: "https://api.twitter.com/2/tweets/search/recent",
  //   params: { name: "Elon Musk", handle:"@elonmusk", content: "howdy", date: toDateString()},
  //   headers: {
  //     "Content-Type": application / json,
  //     Authorization: process.env.TWITTER_APP_API_SECRET_KEY,
  //   },
  // };
});

app.get("/api/faveUser", (req, res) => {
  res.json([
     {name: "Elon Musk",  handle: "@elonmusk", 
     date:Date(), content: "Hello from faveUser!" ,  }
  ]);
});

app.get("/api/faveTweet", (req, res) => {
  res.json([

    {name: "Julia Roberts",
     handle: "@julia_roberts", 
      date:Date(),
     content: "Hello from faveTweet!"}
  ]);
});

app.get("/api/randomUser", (req, res) => {
  res.json([{name:"Milo", content:"I love to bark!" }]);
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// app.get("/api", (req, res) => {

//   // res.send(faveUser)
//   const options = {
//     method: "GET",
//     URL: "https://api.twitter.com/2/tweets/search/recent",
//     params: { name: "Elon Musk", content: "howdy" },
//     headers: {
//       "Content-Type": application / json,
//       Authorization: process.env.TWITTER_APP_API_SECRET_KEY,
//     },
//   };

//   axios.request(users),
//     then((response) => {
//       console.log(response.data);
//     }).catch((error) => {
//   process.on('uncaughtException', function (err) {
//       console.error(error);
//     });
// });
// })

// // res.json(randomUser);
// //  console.log(" working 1")
// //  });

// app.get("/api/faveUser", (res, req) => {
//   res.json(faveUser);
//   console.log("Are you Working 2 ");
// });

// app.get("api/FaveTweet", (req, res) => {
//   res.json(faveTweet);
//   console.log("Hey! Are you there? Working 3");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const randomUser = {
  name: "Milo Milo",
  content: "I bark a lot!",
};

const faveUser = [
  { name: "Elon Musk", img: "../images/Elon_Musk.jpg" },
  { name: "Francine Rivers", img: "../images/francine_rivers.jpg" },
  { name: "Julia Roberts", img: "../images/julia_roberts.jpg" },
  { name: "Quizz Scape", img: "../images/Quizscape.jpg" },
  { name: "The Weather Network", img: "../images/The_Weather_Network.png" },
];

// console.log(randomUser)

const data = [
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
];
