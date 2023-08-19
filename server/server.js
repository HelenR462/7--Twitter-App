const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const port = 3001;


app.use("/src", express.src('src'))

app.get("/", (req, res) => {
  console.log("I'm here")
    res.send(File(path.join(__dirname +  '/src/components')))
});

app.get("/api", function (req, res) {
  // get data from twitter
   axios.get("/https://api.twitter.com/1.1/search/tweets.json")
  .then( function( response){
console.log(data)
    res.send(response.data)
  })
  .catch(function (error){

    res.send("Something went wrong!");
  })
  
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


 const statuses = [
      {
          "created_at": "Fri Aug 18 04:16:07 +0000 2023",
          "id": 1692389889126637843,
          "id_str": "1692389889126637843",
          "text": "RT @wman132: Unveiling the Controversy: Twitter faces a $350,000 fine as Elon Musk denies Jack Smith access to President Trump account.\n\nDo…",
          "truncated": false,
          "entities": {
              "hashtags": [],
              "symbols": [],
              "user_mentions": [
                  {
                      "screen_name": "wman132",
                      "name": "White Man",
                      "id": 1329663627838644224,
                      "id_str": "1329663627838644224",
                      "indices": [
                          3,
                          11
                      ]
                  }
              ],
              "urls": []
            }}]


            // const response = {
  //   userName: "Jane Doe",
  //   userHandle: "@jane_doe",
  //   date: " August 6, 2023",
  // };
  // console.log("I'm here") 