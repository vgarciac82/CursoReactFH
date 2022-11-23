import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: "Cherlux",
    email: "cherlux@gmail.com",
  });

  const { userName, email } = formState;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    console.log(name, value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("hey!");
  });

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
    </div>
  );
};
