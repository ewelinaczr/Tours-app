import { useState } from "react";

const useInput = (validateVal) => {
  const [enteredVal, setEnteredVal] = useState("");
  const [enteredValTouched, setEnteredValTouched] = useState(false);

  const enteredValIsValid = validateVal(enteredVal);
  const hasError = !enteredValIsValid && enteredValTouched;

  const valInputChangeHandler = (event) => {
    setEnteredVal(event.target.value);
  };
  const valInputBlurHandler = (event) => {
    setEnteredValTouched(true);
  };
  const reset = () => {
    setEnteredVal("");
    setEnteredValTouched(false);
  };

  return {
    val: enteredVal,
    isValid: enteredValIsValid,
    hasError,
    valInputChangeHandler,
    valInputBlurHandler,
    reset,
  };
};

export default useInput;
