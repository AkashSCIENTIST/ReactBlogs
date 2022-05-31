import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Voting = () => {
  const [Question, setQuestion] = useState("");
  const [Options, setOptions] = useState("optiona");
  const histroy = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const vote = { Question, Options };

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vote),
    }).then(() => {
      console.log("new vote added");
      //histroy.go(-1);
      histroy.push("/");
    });
  };

  return (
    <div className='Voting'>
      <h2>Vote</h2>
      <form onSubmit={handleSubmit}>
        <label>Question :</label>
        <input
          type='text'
          required
          onChange={(e) => setQuestion(e.target.value)}
        />

        <label>Options:</label>
        <select value={Options} onChange={(e) => setOptions(e.target.value)}>
          <option value='optiona'>Option A</option>
          <option value='optionb'>Option B</option>
          <option value='optionc'>Option C</option>
        </select>
        <br></br>
        <br></br>
        <button>Vote</button>
      </form>
    </div>
  );
};

export default Voting;
