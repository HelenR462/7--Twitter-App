 import React,{useState} from "react";
import "./UserTweet.css";
import UserTweetNav from "./UserTweetNav";

function UserTweet(props) {

  const [card] = useState('')
  const [tweets] = useState('')

  // const cardItems ={};
  // for (let i = 0; i < tweets.length; i++) {
  //   const cardObject = card[i];

  //  cardItems.push(
  //     <ul key={cardItems}>
  //       <li>{cardObject.name}</li>
  //       <li>{cardObject.handle}</li>
  //       <li>{cardObject.date}</li>
  //       <li>{cardObject.content}</li>
        
  //       </ul>

  //  )};
   return (
      <div>
         <UserTweetNav /> 
    {/* < div >
{cardItems}
</div> */}
        {/* { props.tweets.map((tweet,id)=>{
        <ul key={id} className="card-title">
            <li>{tweet.name}</li>
            <li>{tweet.handle}</li>
            <li>{tweet.date}</li>
            <li>{tweet.content}</li> 
       </ul> */}
       {/* })
} */}
     </div>
  );
}

export default UserTweet;
