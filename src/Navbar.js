import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [username, setUserName] = useState(null);

  useEffect(() => {
    setUserName(localStorage.getItem("username"));
  }, [username]);

  const onLogOut = () =>{
    console.log("LogOut Page");
    localStorage.removeItem('username');
    window.location.reload(true);
  }

  return (
    <div className='navbar'>
      <a href='/'>
        <h1>Tweeter</h1>
      </a>
      <div className='links'>
        {username && (
          <>
            <Link to='/'>Home</Link>
            <Link to='/groups'>Groups</Link>
            <Link to='/polls'>Polls</Link>
            <Link to='/chats'>Chats</Link>
            <Link to='/new_poll'>New Poll</Link>
            <Link to='/voting'>Vote</Link>
            <Link to='/' onClick={onLogOut}>Log Out</Link>
            <Link
              to='/create'
              style={{
                color: "#fafafa",
                backgroundColor: "blue",
                borderRadius: "8px",
              }}>
              New Post
            </Link>
          </>
        )}
        {!username && (
          <>
            <Link to='/signin'>Sign In</Link>
            <Link
              to='/signup'
              style={{
                color: "#fafafa",
                backgroundColor: "blue",
                borderRadius: "8px",
              }}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
