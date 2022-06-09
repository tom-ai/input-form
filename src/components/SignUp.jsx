import { useState } from "react";

function SignUp({ isCreating, toggleCreating }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with ", firstName, lastName, email, password);
  };
  return (
    <div className="container form">
      <form id="signUpForm" onSubmit={handleSubmit}>
        <div className="form-row">
          <label for="fname">First Name:</label>
          <input
            id="fname"
            type="text"
            name="fname"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </div>
        <div className="form-row">
          <label for="lname">Last Name:</label>
          <input
            id="lname"
            type="text"
            name="lname"
            onChange={(event) => setLastName(event.target.value)}
          />
        </div>
        <div className="form-row">
          <label for="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-row">
          <label for="password">Choose a password:</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="form-row button" type="submit">
          Create account
        </button>
        <a className="form-row" href="#" onClick={toggleCreating}>
          I have an account already!
        </a>
      </form>
    </div>
  );
}

export default SignUp;
