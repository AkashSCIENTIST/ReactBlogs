import { useState } from "react";
import "./tweetpage.css";
import Comments from "./Comments";
import Comment from "./Comment";
import Tweet from "./Tweet";
import Likes from "./Likes";
import { useParams } from "react-router-dom";
//import { useEffect } from "react/cjs/react.production.min";
//import UserData from "./UserData";

function TweetPage(props) {
  const { tweetid: tweet_page_id } = useParams();
  const [content, setContent] = useState("");
  const [tweetid, setTweetid] = useState(5);
  function submitHandler(e) {
    if (content !== "") console.log(content);
  }
  if (tweet_page_id) {
    setTweetid(tweet_page_id);
  }
  console.log("props of tweet page : ", props);
  console.log("tweet_page_id : ", tweet_page_id);

  return (
    <>
      <div className='split left'>
        <div>
          <Tweet tweetid={tweetid}></Tweet>
          <br></br>
          <h3>Likes</h3>
          <br></br>
          {/*<UserData username='muskelon' photosrc='logo512.png' />*/}
          <Likes tweetid={tweetid}></Likes>
        </div>
      </div>
      <div className='split right'>
        <div>
          <h2>Comments</h2>
          <br></br>
          <div className='comment_header'>
            <input
              type='text'
              required
              placeholder='Comment Here ...'
              className='commentbox'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button
              style={{
                color: "#fafafa",
                backgroundColor: "blue",
                borderRadius: "8px",
              }}
              className='commentbutton'
              onClick={submitHandler}>
              Comment
            </button>
            <br></br>
            <br></br>
          </div>

          <Comment
            username='muskelon'
            photosrc='logo192.png'
            content='test comment'
          />
          <Comments tweetid={tweetid} />
        </div>
      </div>
    </>
  );
}

export default TweetPage;
