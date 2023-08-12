
const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const port = 3000;

app.use("/src", express.src("src"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/src/components"));
});

app.get("/api/card", function (req, res) {
 res.send(card);
  // switched from hard coded data to API
     setUserName(response.data);
        setuserHandle(response.data);
        setContent(response.data);
        setDate(response.data);
  axios
    .get("https://api.twitter.com/1.1/search/tweets.json")
    .then(function (response) {
      //handle success
      res.send(response.data);
    })
    .catch(function (error) {
      //handle error
      console.log(error);
      res.sendStatus(500);
    });

 
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



const user = {
  userName: "Jane Doe",
  userHandle: "@jane_doe",
  date: " August 6, 2023"   
   
};







// const express = require("express");
// const app = express();
// const port = 3001;

// app.get("/", (req, res) => {
//   res.send("Hello Tweets");
// });

// app.get("/api/name", (req, res) => {
//   const response = {
//     name: "Andy",
//   };
//   console.log("Andy is the best!")

//   res.send(response);
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
