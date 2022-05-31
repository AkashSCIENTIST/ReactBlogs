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

export default Comments;
