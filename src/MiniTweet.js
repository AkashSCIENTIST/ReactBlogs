import "./index.css"

function MiniTweet(props) {
  const hexToBase64 = (hexstring) => {
    if (hexstring === null) return null;
    return btoa(
      hexstring
        .match(/\w{2}/g)
        .map(function (a) {
          return String.fromCharCode(parseInt(a, 16));
        })
        .join("")
    );
  };
  var base64String = hexToBase64(props.userphoto);
  return (
    <div className='tweet'>
      <div className='tweetheader'>
        {props.userphoto && (
          <img src={`data:image/jpg;base64,${base64String}`} alt='profilephoto' className='headerphoto' />
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
