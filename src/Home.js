//import {useState, useEffect} from 'react';
//import BlogList from "./BlogList";
import useFetch from "./useFetch";
import Feed from "./Feed";
//import { useCookies } from "react-cookie";
import SignIn from "./SignIn";

/*const Home = () => {
    //let name = "mario";
    //const [name, setName] = useState("mario");
    //const [age, setAge] = useState(25);
    const {data : blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    

    /*const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => {
            return blog.id !== id
        });
        setBlogs(newBlogs);
    }*/

/*const handleClick = (e) => {
        //console.log("Hello World!");
        //console.log(e);
        //name = "luigi";
        setName("luigi");
        setAge(50);
    }

    const handleClickAgain = (name, e) => {
        console.log("Hello " + name);
        console.log(e);
    }*/

/*return (
        <div className="home">


            {isPending && <div>Loading...</div>}
            {error && <div>{error} ... </div>}
            {!error && blogs && <BlogList blogs={blogs} title={"All Blogs !"}/>}{/*} handleDelete={handleDelete}/>}
 

        </div>
        );

}*/
function HomeWrapper() {
  const username_cookie = localStorage.getItem("username");
  //console.log(username_cookie);
  return (
    <>
      {username_cookie && <Home />}
      {!username_cookie && <SignIn />}
    </>
  );
}

function Home() {
  const { data, isPending, error } = useFetch(
    "http://localhost:5000/feed/akash"
  );
  return (
    <>
      {/*<MusicKey letter='Q' src='demo.mp3'></MusicKey>
        <MusicKey letter='W' src='demo2.mp3'></MusicKey>
        <MusicKey letter='O' src='demo4.mp3'></MusicKey>
        <MusicKey letter='P' src='demo3.mp3'></MusicKey>*/}
      {data && <Feed tweets={data} />}
      {isPending && <p>Loading...</p>}
      {error && <p>error...</p>}
    </>
  );
}

export default HomeWrapper;
