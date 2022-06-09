import { useState } from "react";
import PasswordChecklist from "react-password-checklist";

function SignUp({ isCreating, toggleCreating }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

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
        <div className="form-row">
          <label for="passwordAgain">Retype the password:</label>
          <input
            id="passwordAgain"
            type="password"
            name="password"
            autoComplete="new-password"
            onChange={(event) => setPasswordAgain(event.target.value)}
          />
        </div>
        <PasswordChecklist
          rules={["minLength", "specialChar", "number"]}
          minLength={5}
          value={password}
          passwordAgain={passwordAgain}
          style={{ marginTop: "1em", marginBottom: "1em" }}
        />
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
