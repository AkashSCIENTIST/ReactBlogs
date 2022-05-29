import { useState } from "react";
import "./tweetpage.css";
import useFetch from "./useFetch";
import MiniTweet from "./MiniTweet";
import Loading from "./Loading";
import Error from "./Error";

function TweetPage(props) {
  const [content, setContent] = useState("");
  function submitHandler(e) {
    if (content !== "") console.log(content);
  }

  return (
    <>
      <div className='split left'>
        <div>
          <Tweet tweetid='2'></Tweet>
          <br></br>
          <h3>Likes</h3>
          <br></br>
          <UserData username='muskelon' photo='logo512.png' />
          <Likes tweetid='1'></Likes>
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
                backgroundColor: "#f1356d",
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
            photo='logo192.png'
            content='test comment'
          />
          <Comments tweetid='1234' />
        </div>
      </div>
    </>
  );
}



function Comments(props) {
  const {
    data: comments,
    isPending,
    error,
  } = useFetch(`http://localhost:5000/comments_by_tweeter_id/${props.tweetid}`);

  return (
    <>
      {isPending && <Loading />}
      {error && <Error />}
      {comments &&
        comments.map((comment) => (
          <Comment
            key={comment.username}
            username={comment.username}
            photo={comment.photo}
            time={comment.time}
            content={comments.content}
          />
        ))}
    </>
  );
}

function Likes(props) {
  const {
    data: likes,
    isPending,
    error,
  } = useFetch(`http://localhost:5000/likes_by_tweeter_id/${props.tweetid}`);

  return (
    <>
      {isPending && <Loading />}
      {error && <Error />}
      {likes &&
        likes.map((like) => (
          <UserData
            key={like.username}
            username={like.username}
            photo={like.photo}
            time={like.time}
          />
        ))}
    </>
  );
}

function UserData(props) {
  //console.log(props);
  return (
    <>
      <div className='userdata'>
        <img src={props.photo} alt='userphoto' className='user_image'></img>
        <div>{" " + props.username}</div>
      </div>
      <br></br>
    </>
  );
}

function Comment(props) {
  return (
    <>
      <div className='comment'>
        <UserData photo={props.photo} username={props.username} />
        <p>{props.content}</p>
      </div>
      <br></br>
    </>
  );
}


function Tweet(props) {
  const {
    data: tweet,
    isPending,
    error,
  } = useFetch(`http://localhost:5000/tweet/${props.tweetid}`);
  /*if (!isPending && !error) {
    console.log(tweet);
  }*/

  const hexToBase64 = (hexstring) => {
    if (hexstring === null) return null;
    //console.log(hexstring);
    return btoa(
      hexstring
        .match(/\w{2}/g)
        .map(function (a) {
          return String.fromCharCode(parseInt(a, 16));
        })
        .join("")
    );
  };

  return (
    <>
      {isPending && <Loading />}
      {error && <Error />}
      {tweet &&
        tweet.map((data) => (
          <div className='tweet'>
            <div className='tweetheader'>
              {data.userphoto && (
                <img
                  src={`data:image/jpg;base64,${hexToBase64(data.userphoto)}`}
                  alt='profilephoto'
                  className='headerphoto'
                />
              )}
              <h2>{data.username}</h2>
            </div>
            <br></br>
            <br></br>
            <b>{data.content_}</b>
            <br></br>
            <center>
              {data.photo && (
                <>
                  <br></br>
                  <img
                    src={`data:image/jpg;base64,${hexToBase64(data.photo)}`}
                    alt='profilephoto'
                    className='headerphoto'
                  />
                </>
              )}
            </center>
            <br></br>
          </div>
        ))}
    </>
  );
}

export default TweetPage;
