import React from "react";

function UserTweetNav() {
  return (
    <div>
     <nav>
      <div className="btn">
        <button className="btn btn-outline-user">
          <a href="/">Home</a>
        </button>
        <button className="btn-lg-user">
          <a href="Homepage">Random Tweet</a>
        </button>
      </div>
      <form >
        <input className="search-box-user" placeholder="Tweet...">
        </input>
       <button className="submit" type="submit" 
      //  onClick={}
      >
        Search</button>
      </form>
    </nav>


    </div>
  );
}

export default UserTweetNav;
