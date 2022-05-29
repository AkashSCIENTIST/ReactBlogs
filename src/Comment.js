import UserData from "./UserData";

function Comment(props) {
    return (
      <>
        <div className='comment'>
          <UserData photosrc={props.photosrc} username={props.username} photo={props.photo}/>
          <p>{props.content}</p>
        </div>
        <br></br>
      </>
    );
  }

export default Comment