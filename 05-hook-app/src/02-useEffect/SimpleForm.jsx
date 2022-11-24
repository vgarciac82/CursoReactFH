import { useEffect, useState } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: "Cherlux",
    email: "cherlux@gmail.com",
  });

  const { userName, email } = formState;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

     
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    //console.log("hey!");
  }, []);

  useEffect(() => {
    //console.log("form state changed!");
  }, [formState]);

  useEffect(() => {
    //console.log("email state changed!");
  }, [email]);

  return (
    <div>
      <h1>Simple Form</h1>
      <hr></hr>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        value={userName}
        name="userName"
        onChange={handleInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      {userName === "cherlo" && <Message />}
    </div>
  );
};
