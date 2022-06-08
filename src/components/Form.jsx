import { useState } from "react";
import CreateAccount from "./CreateAccount";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="container form">
      <form id="loginForm" onSubmit={handleSubmit}>
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
          <label for="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <CreateAccount />
        <button className="form-row button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
