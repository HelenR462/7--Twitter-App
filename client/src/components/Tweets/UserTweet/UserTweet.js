import React from "react"
import "./UserTweet.css";
import UserTweetNav from "./UserTweetNav";


function UserTweet({users}) {


   return (
      <div>
         <UserTweetNav /> 
    
         {/* {users.filter(user => user.includes(user)).map(filteredBy=> (user,id)=>{
            <ul key={id} className="card-title">
             <li>{user.name}</li>
            <li>{user.handle}</li>
            <li>{user.date}</li>
            <li>{user.content}</li> 
       </ul> 
           })
   } */}
     </div>
   )
 }


export default UserTweet;
