const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");

const port = 3001;



app.get("/", (req, res) => {
  //  res.sendFile(path.join(__dirname + "./components/HomePage"));
  res.send("Hello from HomePage")
});

app.get("/api/RandomTweet", (req, res) => {

  res.send(randomTweet);
});

app.get("/api/randomTweet/id:", (res,req)=>{

  res.send(req.id)
})

app.use(express.static('./public'));

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


// const randomUser = [
//   { name: "Elon Musk", img: "../images/Elon_Musk.jpg" },
//   { name: "Francine Rivers", img: "../images/francine_rivers.jpg" },
//   { name: "Julia Roberts", img: "../images/julia_roberts.jpg" },
//   { name: "Quizz Scape", img: "../images/Quizscape.jpg" },
//   { name: "The Weather Network", img: "../images/The_Weather_Network.png" },
// ];

// console.log(randomUser)
  