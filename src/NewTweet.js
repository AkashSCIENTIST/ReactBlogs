import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");
  const histroy = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const tweet = { content, photo };
    console.log(tweet);

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tweet),
    }).then(() => {
      console.log("new tweet added");
      //histroy.go(-1);
      histroy.push("/");
    });
  };

  return (
    <div className='create'>
      <h2>New Tweet</h2>
      <form onSubmit={handleSubmit}>
        <label>Content:</label>
        <input
          type='text'
          required
          onChange={(e) => setContent(e.target.value)}
        />
        <label>Photo:</label>
        <input type='file' onChange={(e) => setPhoto(e.target.files[0])} />
        <button>Add Tweet</button>
      </form>
    </div>
  );
};

export default Create;
