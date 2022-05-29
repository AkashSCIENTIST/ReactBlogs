import "./index.css";

function MiniTweet(props) {
  return (
    <div className='tweet'>
      <div className='tweetheader'>
        {props.userphoto && (
          <img
            src={`data:image/jpg;base64,${props.userphoto}`}
            alt='profilephoto'
            className='headerphoto'
          />
        )}
        {!props.userphoto && (
          <img
            src='logo192.png'
            alt='profilephoto'
            className='headerphoto'></img>
        )}
        <h2>{props.name}</h2>
      </div>
      <br></br>
      <b>{props.content}</b>
      <br></br>
    </div>
  );
}

export default MiniTweet;
