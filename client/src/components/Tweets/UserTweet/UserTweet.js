import React from "react"

import "./UserTweet.css";
import UserTweetNav from "./UserTweetNav";
import UserTweetCard from "../TweetCard/UserTweetCard";



function UserTweet({user, users}) {
   

   return (
      <div>
         <UserTweetNav /> 
            <UserTweetCard
           
      //   {...users.map((user, index)=>{
      //    <ul key={user.id}>
      //       <li>{user.name}</li>
      //       <li>{user.handle}</li>
      //       <li>{user.date}</li>
      //       <li>{user.content}</li>
      //    </ul>
      //   })}
            />
     </div>
   )
 }


export default UserTweet;
