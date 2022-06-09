import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function Form() {
  const [isCreating, setIsCreating] = useState(false);
  const toggleCreating = () => {
    setIsCreating((currState) => !currState);
  };

  if (!isCreating) {
    return <Login isCreating={isCreating} toggleCreating={toggleCreating} />;
  } else {
    return <SignUp isCreating={isCreating} toggleCreating={toggleCreating} />;
  }
}
export default Form;
