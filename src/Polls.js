import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NewPoll = () => {
  const [Question, setQuestion] = useState("");
  const [optiona, setoptiona] = useState("");
  const [optionb, setoptionb] = useState("");
  const [optionc, setoptionc] = useState("");
  const histroy = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const poll = { Question, optiona, optionb, optionc };

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(poll),
    }).then(() => {
      console.log("new poll added");
      //histroy.go(-1);
      histroy.push("/");
    });
  };

  return (
    <div className='Poll'>
      <h2>New Poll</h2>
      <form onSubmit={handleSubmit}>
        <label>Question :</label>
        <input
          type='text'
          required
          onChange={(e) => setQuestion(e.target.value)}
        />
        <label>Option A :</label>
        <input
          type='text'
          required
          onChange={(e) => setoptiona(e.target.value)}
        />
        <label>Option B :</label>
        <input
          type='text'
          required
          onChange={(e) => setoptionb(e.target.value)}
        />
        <label>Option C :</label>
        <input type='text' onChange={(e) => setoptionc(e.target.value)} />
        <button>Add Poll</button>
      </form>
    </div>
  );
};

export default NewPoll;
