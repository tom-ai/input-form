import { useState } from "react";

function CreateAccount() {
  const [isCreating, setIsCreating] = useState(false);
  const toggleCreating = () => {
    setIsCreating((currState) => !currState);
    console.log("yes", isCreating);
  };

  return (
    <a className="form-row" href="#" onClick={toggleCreating}>
      Creating an account?
    </a>
  );
}

export default CreateAccount;
