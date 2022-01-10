import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");
    const histroy = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
    
        fetch('http://localhost:8000/blogs/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog)
        })
        .then(() => {
          console.log('new blog added');
          //histroy.go(-1);
          histroy.push('/');
        })
    }

    return(
        <div className="create">
            <h2>Add a Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title :</label>
                <input type="text" required onChange={(e) => setTitle(e.target.value)}/>
                <label>Blog content :</label>
                <input type="text" required onChange={(e) => setBody(e.target.value)}/>
                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}

export default Create;