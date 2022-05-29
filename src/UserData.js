//import { useState } from "react/cjs/react.production.min";

function UserData(props) {
  console.log("pops of userdata: ", props);

  return (
    <>
      <div className='userdata'>
        {!props.photo && (
          <img src='logo512.png' alt='profilephoto' className='user_image' />
        )}
        {props.photo && (
          <img
            src={`data:image/jpg;base64,${props.photo}`}
            alt='profilephoto'
            className='user_image'
          />
        )}
        <div>{" " + props.username}</div>
      </div>
      <br></br>
    </>
  );
}

export default UserData;
