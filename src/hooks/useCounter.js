import { useState } from "react";

const useCounter = (defaultCounter = 0) => {
  const [counter, setCounter] = useState(defaultCounter);

  const increment = (factor = 1) => {
    setCounter(counter + factor);
  };

  const decrement = (factor = 1) => {
    setCounter(counter - factor);
  };

  const reset = () => {
    setCounter(defaultCounter);
  };

  return {
    increment,
    decrement,
    counter,
    reset,
  };
};

export default useCounter;
