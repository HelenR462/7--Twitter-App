const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const port = 3001;

app.use(express.json());


// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

console.log(process.env.TOKEN);
app.get("/api/faveUser", (req, res) => {
  const config = {
    headers: { Authorization: `Bearer ${process.env.TOKEN}` },
  };

  axios
    .get(
      "https://api.twitter.com/2/tweets/search/recent?query=nasa ",
      config
    )
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (err) {
      console.log(err);
    });
});


app.get("/api/randomUser", (req, res) => {

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`
    },
  };

  axios
    .get("api/randomUser ",config)
    .then(function (response) {
    console.log(response.data);
    res.send(response.data);
  })
  .catch(function (err) {
    console.log(err);
    res.status(500).json({ error: 'Twitter API request failed' });
  });
})

//   app.post("/api/randomUser", (req, res) => {
//   const { name, content } = req.body;

//   if (name && content) {
//    const newUser = { name, content };
//   users.push(newUser);
//    res.json(users);
// } else {
//   res.status(400).json({ error: 'Name and content are required' });
// }
// })
// }
// );


// app.post("/api/randomUser", (req, res) => {
//   const { search } = req.body;

//    const result = performSearch(search);

//   res.json(search);

// function performSearch(search) {
//    return [search];
// }
//  })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
