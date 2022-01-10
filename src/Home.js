//import {useState, useEffect} from 'react';
import BlogList from "./BlogList";
import useFetch from './useFetch';

const Home = () => {
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

    return (
        <div className="home">
            
            {/*
            <h2>Home Page</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me !</button>
            <button onClick={(e) => handleClickAgain("Mario", e)}>Click Me !!</button>
            */}

            {isPending && <div>Loading...</div>}
            {error && <div>{error} ... </div>}
            {!error && blogs && <BlogList blogs={blogs} title={"All Blogs !"}/>}{/*} handleDelete={handleDelete}/>}*/}
            
            
            {/*
            <BlogList blogs={blogs.filter((blog) => blog.author == 'Foo')} title={"Foo's Blogs !"}/>
            <BlogList blogs={blogs.filter((blog) => blog.author == 'Bar')} title={"Bar's Blogs !"}/>
            <button onClick={() => setName("luigi")}>Change Name</button>
            */}

        </div>
    );
}

export default Home;