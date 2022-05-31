import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
//import { useCookies } from 'react-cookie';

const SignUp = (props) => {
  const [username, setUserName] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [mailid, setMailId] = useState("");
  const [website, setWebsite] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [photo, setPhoto] = useState("");
  const [dateofbirth, setDateOfBirth] = useState("");
  const histroy = useHistory();
  //const [cookies, setCookie] = useCookies(['name']);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);

    const Useradded = {
      username,
      location,
      bio,
      mailid,
      website,
      firstname,
      lastname,
      photo,
      dateofbirth,
    };

    console.log(Useradded);
    alert(Useradded);
    window.location.reload(false);
    //histroy.push("/");

    /*fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Useradded),
    }).then(() => {
      console.log("new User added");
      //histroy.go(-1);
      histroy.push("/");
    });*/
  };

  return (
    <div className='create'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input
          type='text'
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <label>Location:</label>
        <input
          type='text'
          required
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Bio:</label>
        <input type='text' required onChange={(e) => setBio(e.target.value)} />
        <label>Mail Id:</label>
        <input
          type='email'
          required
          onChange={(e) => setMailId(e.target.value)}
        />
        <label>Website:</label>
        <input type='text' onChange={(e) => setWebsite(e.target.value)} />
        <label>First Name:</label>
        <input
          type='text'
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name:</label>
        <input type='text' onChange={(e) => setLastName(e.target.value)} />
        <label>Photo:</label>
        <input type='file' onChange={(e) => setPhoto(e.target.files[0])} />
        <label>Date Of Birth:</label>
        <input
          type='date'
          required
          onChange={(e) => setDateOfBirth(e.target.value)}
        />

        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
