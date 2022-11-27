import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    };
  return (
    <>
      <h1>FocusScreen</h1>
      <hr></hr>

      <input ref={inputRef} type="text" placeholder="Nombre" className="form-control mt-1"></input>
      <input type="text" placeholder="Nombre" className="form-control mt-1"></input>
      <input type="text" placeholder="Nombre" className="form-control mt-1"></input>

      <button className="btn btn-primary m-2" onClick={onClick}>Set Focus</button>
    </>
  );
};
