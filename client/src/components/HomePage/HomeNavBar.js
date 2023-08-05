import React, { useState} from "react";


function HomeNavBar() {
  //  const [userName, setUserName] = useState("");
    // const [handle, setHandle] = useState("");
    const [tweet, setTweet] = useState("")

    //  let search =[ teweet]
//   for (i = 0; i < search.length; i++) {
//    setUserName()
//   setTweet()
// }


  return (
    <nav>
      <div className="btn">
        <button className="btn btn-outline-primary">
          <a href="/">Home</a>
        </button>
        <button className="btn-lg">
          <a href="Homepage">Random Tweet</a>
        </button>
      </div>
      <form >
        <input className="search-box" placeholder="Tweet...">
        </input>
       <button className="submit" type="submit" 
      //  onClick={}
      >
        Search</button>
      </form>
    </nav>
  );
}

export default HomeNavBar;
