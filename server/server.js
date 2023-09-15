const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const port = 3001;


app.use(express.json());

app.get("/", (req, res) => {
  
   res.send(express.response)
  })

app.post("/", (req, res) => {
  const user = req.body;
  users.push(req.body);
  // res.send("post reached");

  res.send(`User with the name ${user.userName} is added to the database!`);
});



// app.get("/id", (req, res) => {
//   // res.send("I hope Im getting onto something")
//   const user= req.body
//   user.push(req.body)
//   res.send(`This is the ${user.id} `)
// })

app.get("/", (req, res) => {
  res.send("Hello from Homepage");
})

 app.get("/RandomTweet", (req, res) => {
  
  const randomTweet = {
    userName: "", 
     id: "",
    userHandle: "", 
    date:"", 
    text:""
  };
 
  res.send(randomTweet)
})

app.get("/Tweet", (req, res) => {
  res.send("Hello from Tweetpage");
})


// Search by user name and content
// RandomTweet 7-10 days tweet
// 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});