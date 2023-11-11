import React, {useState}from 'react';

function Footer() {
  const [likesCounter, setLikesCounter] = useState(0);
  const [retweetCounter, setRetweetCounter] = useState(0);

  const retweet = "../images/icons8-retweet-24.png";
  const likes = "../images/icons8-heart-24.png";

  return (
    <div>
       <div className="card-footer">
             
             <div className="icons">
               <div className="horizontal-line">
                 <img
                   src={retweet}
                   alt="retweet"
                   className="icon-retweet"
                   onClick={() => {
                     setRetweetCounter((prev) => prev + 1);
                   }}
                 />
                 <div className="counts">{retweetCounter}</div>
               </div>
               <div>
                 <img
                   className="icon-heart"
                   src={likes}
                   alt="heart"
                   onClick={() => {
                     setLikesCounter((prev) => prev + 1);
                   }}
                 />
                 <div className="counts">{likesCounter}</div>
               </div>
             </div>
           </div>
    </div>
  );
}

export default Footer;

