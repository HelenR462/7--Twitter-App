import React from "react";
import {useEffect } from "react";
import axios from "axios";
import RandomNavBar from "../RandomTweet/RandomNavBar";
import "./RandomTweet.css";
import UserTweetCard from "../Tweets/TweetCard/UserTweetCard";

function RandomTweet({users,setUsers}) {
  
  // const [user, setUser] =("")
// const randomUser = [
//   { name: "Elon Musk", img: "../images/Elon_Musk.jpg" },
//   { name: "Francine Rivers", img: "../images/francine_rivers.jpg" },
//   { name: "Julia Roberts", img: "../images/julia_roberts.jpg" },
//   { name: "Quizz Scape", img: "../images/Quizscape.jpg" },
//   { name: "The Weather Network", img: "../images/The_Weather_Network.png" },
// ];

// console.log(randomUser)
  
// const properties = Object.keys(randomUser.property);

// properties.forEach((property) ){
// setUser(properties + " : " + randomUser[property]);
// console.log(property)
// }
  

  useEffect(() => {
    fetch("/api/randomTweet")
      .then((response) => response.json())
      .then((data) => {
    console.log(data);
      });
      
  }, []);

  

  // const selectedUser= users.map(user =>
  //   <li key={key}>
  //     <p>{user.name}</p>
  //     <span>{user.img}</span>
  //   </li>

  // )

  function handleOnClick(e) {
    e.preventDefault();
    axios.get("/api/randomUser").then((res) => console.log(res.data));
  // (e.target.value ===""? true : ("") )
   
  }
 
  return (
    <div>
      <RandomNavBar />
      

      {/* {users.map((user)=>{
        // console.log(user)
      })} */}
      <div className="avatar-container">
        <div className="fave-avatar">
          <div>
            <img
              className="avatar"
              src="../images/Elon_Musk.jpg"
              alt=""
              onClick={handleOnClick}
            />
            <p className="avatar-userName">Elon Musk</p>
          </div>
          <div>
            <img
              className="avatar"
              src="../images/francine_rivers.jpg"
              alt=""
              onClick={handleOnClick}
            />
            <p className="avatar-userName">Francine Rivers</p>
          </div>
          <div>
            <img
              className="avatar"
              src="../images/julia_roberts.jpg"
              alt=""
              onClick={handleOnClick}
            />
            <p className="avatar-userName">Julia Roberts</p>
          </div>
          <div>
            <img
              className="avatar"
              src="../images/quizscape.jpg"
              alt=""
              onClick={handleOnClick}
            />
            <p className="avatar-userName">Quizscape</p>
          </div>
          <div>
            <img
              className="avatar"
              src="../images/The_Weather_Network.png"
              alt=""
              onClick={handleOnClick}
            />
            <p className="avatar-userName">The Weather Network</p>
          </div>
        </div>
      </div>
      <div className="random_fave">
        <UserTweetCard className="card" />
      </div>
    </div>
  );
}

export default RandomTweet;

// {...users.map((user) => (
//   <div key={user.id}>
//     <div>{user.name}</div>
//     <div>{user.img}</div>

//   </div>
// ))}

// const comps = [{}, {}, {}]
// const specComp = comps
//                   .map(fn1)
//                   .filter(fn2)
//                   .shift()
