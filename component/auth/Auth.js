import { useState } from "react";

const useBasicHook = (isValidConditionFn) => {
  const [enteredValue, setEnteredValue] = useState(``);
  const [IsTouched, setIsTouched] = useState(false);

  const IsValid = isValidConditionFn(enteredValue);

  const hasError = IsTouched && !IsValid;

  const onChangeHandeler = (e) => {
    setEnteredValue(e.target.value);
  };

  const IsTouchedFn = () => {
    setIsTouched(true);
  };

  const resetFn = () => {
    setEnteredValue(``);
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    IsValid,
    hasError,
    IsTouched,
    IsTouchedFn,
    onChangeHandeler,
    resetFn,
  };
};

export default useBasicHook;
