import React from "react";
import "./UserTweet.css";

function UserTweetNav() {
  // const [search, setSearch] = useState("");
 


  return (
    <div>
      <section className="tweet-nav">
        <div className="tweet-btn">
          <button className="tweet-primary">
            <a href="/">Home</a>
          </button>
          <button className="tweet-outline">
            <a href="/randomTweet">Random Tweet</a>
          </button>
        </div>
      </section>

      <section className="tweet-body">
        <div className="tweet-container">
          <div className="tweet-input">
         <form  
         className="search-form"
        //  onSubmit={(e)=> 
        //  (e.target.value)
                
        //  }
        >
           <input
             className="search-box"
              type="text"
              // onChange={(e) => (e.target.value)
              // }
              placeholder="Enter user name or content..."
            ></input>
            <button
              className="tweet-submit"
              type="submit"
                           
            >
              Search
            </button>
            </form>

             {/* <UserTweetCard />  */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserTweetNav;
