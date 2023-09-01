const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const port = 3001;

//app.use("/src", express.src("src"));

  const users = [ {
    userName: "Jane Doe",
    userHandle: "@jane_doe",
    date: " August 6, 2023",
  },
  {
    userName: "John Doe",
    userHandle: "@john_doe",
    date: " August 16, 2023",
  }
]


 app.get("/", (req, res) => {

  //  console.log(users);
  //  res.send("Hello from Homepage");
  res.send(users);

  });

  app.post("/", (req, res) => {
  const user = req.body;
    console.log(user);
    //  console.log(user);
      users.push(req.body)
res.send("post reached");

     res.send(`User with the name ${user} is added to the database!`);

  });

  // app.get("/", (req, res) => {
  // })

  // app.get("/", (req, res) => {
  // })

  // app.get("/", (req, res) => {
  // })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//  const statuses = [
//       {
//           "created_at": "Fri Aug 18 04:16:07 +0000 2023",
//           "id": 1692389889126637843,
//           "id_str": "1692389889126637843",
//           "text": "RT @wman132: Unveiling the Controversy: Twitter faces a $350,000 fine as Elon Musk denies Jack Smith access to President Trump account.\n\nDo…",
//           "truncated": false,
//           "entities": {
//               "hashtags": [],
//               "symbols": [],
//               "user_mentions": [
//                   {
//                       "screen_name": "wman132",
//                       "name": "White Man",
//                       "id": 1329663627838644224,
//                       "id_str": "1329663627838644224",
//                       "indices": [
//                           3,
//                           11
//                       ]
//                   }
//               ],
//               "urls": []
//             }}]



// app.get("/tweet/id=1347569870578266115",  (req, res) => {
  //   console.log("I'm down here");
  // axios.get("https://api.twitter.com/2/tweet",{
  //   params:{
  //     id:12345,
  //     name:"",
  //     handle:"",
  //     date:new date(),
  //     content:"text"
  //   },
  // }).then((response)=>{
  //   res.json({data:response.data});
  // }).catch( (error) =>{
  //   console.error("Something went wrong:",error.message);
  //  })
  // });