import { useState } from "react";

function CreateAccount({ isCreating, toggleCreating }) {
  if (!isCreating) {
    return (
      <a className="form-row" href="#" onClick={toggleCreating}>
        Creating an account?
      </a>
    );
  }
  return (
    <>
      <div className="form-row">
        <label for="fname">First Name:</label>
        <input id="fname" type="text" name="fname" />
      </div>
      <div className="form-row">
        <label for="lname">Last Name:</label>
        <input id="lname" type="text" name="lname" />
      </div>
    </>
  );
}

export default CreateAccount;
