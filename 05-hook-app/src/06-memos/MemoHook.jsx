import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log("Heavy stuff");
  }
  return `${iterations} iterations done`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo( () => heavyStuff(counter), [counter]);
  return (
    <>
      <h1>
        Counter: <small>{counter} </small>
      </h1>
      <hr></hr>
      <h4>{memorizedValue}</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
