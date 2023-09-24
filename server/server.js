const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");

const port = 3001;

app.use(express.json())
app.use(express.static('./public'));


// const userData = [
// {
//   name: "Elon Musk",
//   handle: "@elonmusk",
//   content: "Hello everyone, welcome toTwitter!",
//   date: "Aug.6/2023"
// }]

app.get("/api/", (req, res) => {
  //  res.sendFile(path.join(__dirname + "client/public/index.html"));
   res.json(faveUser)
   console.log(" working 1")
});

// app.post("/api", (req, res) => {
//   userData.push(req.body)
//     res.json(userData)
//    console.log("I'm working!")
// });


app.get("/api/RandomUser", (req, res) => {
  res.json(randomUser);
console.log(" Working 2" )
 });

app.get("/UserTweet", (req, res) => {
  console.log("Hey! Are you there? 3")
  res.json(UserTweet);
});

// app.get("/api/faveUser", (res,req)=>{
//   console.log("Are you working at all or there is no data? ")
//   res.json(faveUser)
// })

// app.post("/api/faveUser", (res,req)=>{
//   console.log("Are you working at all or there is no data? ")
//   res.json(faveUser)
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


const randomUser = [
  { name: "Elon Musk", img: "../images/Elon_Musk.jpg" },
  { name: "Francine Rivers", img: "../images/francine_rivers.jpg" },
  { name: "Julia Roberts", img: "../images/julia_roberts.jpg" },
  { name: "Quizz Scape", img: "../images/Quizscape.jpg" },
  { name: "The Weather Network", img: "../images/The_Weather_Network.png" },
];

// console.log(randomUser)
  
const faveUser = [
  
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
