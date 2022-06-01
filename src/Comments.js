import useFetch from "./useFetch";
import Loading from "./Loading";
//import Error from "./Error";
import Comment from "./Comment";

function Comments(props) {
  const {
    data: comments,
    isPending,
    error,
  } = useFetch(`http://localhost:5000/comments_by_tweeter_id/${props.tweetid}`);
  if (!isPending && !error) {
    console.log(comments);
  }

  return (
    <>
      {isPending && <Loading />}
      {error && <Loading />}
      {comments &&
        comments.map((comment) => (
          <Comment
            key={`comment_${comment.username}_${comment.time}`}
            username={comment.username}
            photo={comment.userphoto}
            time={comment.time}
            content={comment.content_}
          />
        ))}
    </>
  );
}

export default Comments;
