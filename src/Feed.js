import MiniTweet from "./MiniTweet";

function Feed({ tweets }) {
  // eslint-disable-next-line array-callback-return
  console.log(tweets.data);
  return (
    <>
      <link
        href='https://fonts.googleapis.com/css?family=Asap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Roboto'
        rel='stylesheet'
      />
      {tweets.data.map((tweet) => (
        <>
          <MiniTweet
            userphoto={tweet.userphoto}
            name={tweet.author}
            username={tweet.username}
            time={"Today"}
            content={tweet.content_}
            photo={tweet.photo}></MiniTweet>
          <br></br>
        </>
      ))}
    </>
  );
}

export default Feed;
