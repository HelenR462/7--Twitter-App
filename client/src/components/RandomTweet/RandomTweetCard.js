import React from "react";
import {useState}from "react";

function RandomTweetCard() {
  const [showData, setShowData] =useState(false);

  console.log("showData :", showData)
  useEffect(() => {
    fetch("/api/faveUser")
      .then((res) => res.json())
      // .then((faveUsers) => setFaveUsers(faveUsers));
  }, []);


  return(
      < div>
         < Card>
         
         </Card>

      </div>
  );

};
  export default RandomTweetCard;