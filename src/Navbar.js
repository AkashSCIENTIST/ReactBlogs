import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href='/'>
        <h1>Tweeter</h1>
      </a>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/tweetpage'>TweetPage</Link>
        <Link
          to='/create'
          style={{
            color: "#fafafa",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}>
          New Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
