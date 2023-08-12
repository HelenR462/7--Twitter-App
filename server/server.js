const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const port = 3001;

app.use("/src", express("src"));
console.log("Hello there!");


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/src/components"));
});

app.get("/api/card", function (req, res) {
  const respons ={
      userName: "Jane Doe",
      userHandle: "@jane_doe",
      date: " August 6, 2023",
  }
   res.send(response);
 });
  
 
  axios
    .get("https://api.twitter.com/1.1/search/tweets.json?q=src")
    .then(function (response) {
      
      res.send(response.data);
    })
    .catch(function (error) {
     
      console.log(error);
      res.sendStatus(500);
    });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const user = {
//   userName: "Jane Doe",
//   userHandle: "@jane_doe",
//   date: " August 6, 2023",
// };

