import { useState } from "react";
import "./tweetpage.css";
import Comments from "./Comments";
import Comment from "./Comment";
import Tweet from "./Tweet";
import Likes from "./Likes";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
//import UserData from "./UserData";

function post(url, body, callback) {
  let headers = new Headers();

  console.log(headers);
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:5000");

  console.log(body);
  let formData = new FormData();
  for (const [key, value] of Object.entries(body)) {
    formData.append(key, value);
  }
  console.log(formData);

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    credentials: "include",
    headers: headers,
    body: formData,
  })
    .then((json) => {
      callback(json);
    })
    .catch((err) => {
      console.log(err);
    });
}

function TweetPage(props) {
  const username = localStorage.getItem("username");
  const { tweetid: tweet_page_id } = useParams();
  const [content, setContent] = useState("");
  const [tweetid, setTweetid] = useState(1);
  const [renderOrder, setRenderOrder] = useState(0);
  function submitHandler(e) {
    if (content !== "") {
      console.log(content);
      post(
        "http://localhost:5000/new_comment",
        { username, content, tweet_id: tweet_page_id },
        (res) => {
          console.log(res);
          window.location.reload(false);
        }
      );
    }
  }
  useEffect(() => {
    if (tweet_page_id) {
      setTweetid(tweet_page_id);
    }
    console.log("props of tweet page : ", props);
    console.log("tweet_page_id : ", tweet_page_id);
  }, [tweet_page_id]);

  return (
    <>
      <div className='split left'>
        <div>
          <div>
            {renderOrder >= 0 && (
              <Tweet tweetid={tweetid} updater={setRenderOrder}></Tweet>
            )}
          </div>
          <br></br>
          <h3>Likes</h3>
          <br></br>
          {/*<UserData username='muskelon' photosrc='logo512.png' />*/}
          <div>{renderOrder >= 1 && <Likes tweetid={tweetid}></Likes>}</div>
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
              Post
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
