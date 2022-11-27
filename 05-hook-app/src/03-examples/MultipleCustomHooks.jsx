import React from "react";
import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr></hr>
      {isLoading ? (
        <LoadingQuote></LoadingQuote>
      ) : (
        <Quote author={author} quote={quote}></Quote>
      )}

      <button className="btn btn-primary" onClick={() => increment()}>
        Next Quote
      </button>
    </>
  );
};
