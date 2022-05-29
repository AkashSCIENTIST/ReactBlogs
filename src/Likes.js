import useFetch from "./useFetch";
import Loading from "./Loading";
import UserData from "./UserData";
import Error from "./Error";

function Likes(props) {
  const {
    data: likes,
    isPending,
    error,
  } = useFetch(`http://localhost:5000/likes_by_tweeter_id/${props.tweetid}`);

  if (!isPending && !error) {
    console.log("props of likes : ", likes);
  }

  return (
    <>
      {isPending && <Loading />}
      {error && <Error />}
      {likes &&
        likes.map((like) => (
          <UserData
            key={`like_${like.username}`}
            username={like.username}
            photo={like.userphoto}
            time={like.time}
          />
        ))}
    </>
  );
}

export default Likes;
