import { Link } from "react-router-dom";
import MiniTweet from "./MiniTweet";

function Feed({ tweets }) {
  // eslint-disable-next-line array-callback-return
  console.log(tweets.data);
  var counter = 0;
  return (
    <div className="feed">
      <link
        href='https://fonts.googleapis.com/css?family=Asap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Roboto'
        rel='stylesheet'
      />
      <br></br>
      {tweets.data.map((tweet) => (
        <center>
          <Link to={`/tweetpage/${tweet.tweetid}`} className="nounderline">
          <MiniTweet
            key={`${counter++}`}
            userphoto={tweet.userphoto}
            name={tweet.author}
            username={tweet.username}
            time={"Today"}
            content={tweet.content_}
            photo={tweet.photo}></MiniTweet>
            </Link>
        <br></br>
        </center>
      ))}
    </div>
  );
}

export default Feed;
