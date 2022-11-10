/*RAFC*/
import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value = -1 }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSub = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };
  return (
    <>
      <h1>Counter APP</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSub}> -1 </button>
      <button onClick={handleReset}> Reset </button>
    </>
  );
};

CounterApp.proppTypes = {
  value: PropTypes.number,
};
