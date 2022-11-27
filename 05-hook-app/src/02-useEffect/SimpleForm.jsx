import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";
export const SimpleForm = () => {
  const { formState, handleInputChange, userName, email, password, resetForm } = useForm({
    userName: "",
    email: "",
    password: "",
  });

  //const { userName, email, password } = formState;

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
      <h1>Formulario con Custom Hook</h1>
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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={handleInputChange}
      />

      <button className="btn btn-primary mt-2" onClick={resetForm}>Reset</button>
    </div>
  );
};
