import React from "react";
import classes from "./authForm.module.css";
import { useRouter } from "next/router";
import useBasicHook from "../auth/Auth";
import { useState } from "react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const textCheck = (value) => value.trim() !== "";
  const router = useRouter();

  function onToggleIsLogin() {
    return setIsLogin(!isLogin);
  }

  const {
    value: emailInput,
    IsValid: emailIsValid,
    IsTouched: emailIsTouched,
    hasError: emailHasError,
    IsTouchedFn: emailFocusFn,
    onChangeHandeler: emailOnChangeHandeler,
    resetFn: clearEmailInputFn,
  } = useBasicHook(textCheck);
  const email = emailIsTouched && !emailIsValid;

  const {
    value: passwordInput,
    IsValid: passwordIsValid,
    IsTouched: passwordIsTouched,
    hasError: passwordhasError,
    IsTouchedFn: passwordFocusFn,
    onChangeHandeler: onChangePasswordHandeler,
    resetFn: clearpasswordInputFn,
  } = useBasicHook(textCheck);
  const imageHasNoError = passwordIsTouched && !passwordIsValid;

  const formHasError = emailIsValid && passwordIsValid;

  let url;

  function onSubmitHandeler(e) {
    e.preventDefault();
    setIsLoading(true);

    if (!formHasError) {
      setError(`check input and submit again`);
      console.log(error);
      return;
    }

    if (isLogin) {
      console.log("signup");
      url =
        " https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAlWveUg0aFYUGO0w96K2DpgK3v6-z8a20";
    } else {
      console.log("login");
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAlWveUg0aFYUGO0w96K2DpgK3v6-z8a20";
    }
    const req = fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = req.then((response) => {
      if (response.ok) {
        const res = response.json();
        router.push("/");
        setIsLoading(false);
        return res;
      } else {
        response.json().then((data) => {
          console.log(data.error);
          setIsLoading(false);
          alert(
            `error ${data.error.code} ${data.error.message} pls try loging in`
          );
        });
      }
    });
  }

  return (
    <>
      {isLoading && <address> loading .... </address>}
      {!isLoading && (
        <form className={classes.formContainer}>
          <div className={classes.logo}>
            <h3 className={classes.Name}> dTb </h3>
            <a onClick={onToggleIsLogin}>
              <h4 className={classes.text}>
                {!isLogin
                  ? " don't have an account ? Signup"
                  : "  have an account ? login"}{" "}
              </h4>
            </a>{" "}
          </div>
          <div className={classes.input}>
            <label className={classes.labelArea}> email </label>
            {email && (
              <div className={classes.errormessagecontainer}>
                <p className={classes.errormessage}>
                  {" "}
                  Title can't be left empty{" "}
                </p>
              </div>
            )}
            <input
              type="text"
              className={classes.inputArea}
              onBlur={emailFocusFn}
              value={emailInput}
              onChange={emailOnChangeHandeler}
            />
          </div>
          <div className={classes.input}>
            <label className={classes.labelArea}> password </label>
            {imageHasNoError && (
              <div className={classes.errormessagecontainer}>
                <p className={classes.errormessage}>
                  {" "}
                  image can't be keft empty{" "}
                </p>
              </div>
            )}
            <input
              className={classes.inputArea}
              type="password"
              value={passwordInput}
              onBlur={passwordFocusFn}
              onChange={onChangePasswordHandeler}
            />
          </div>

          <div className={classes.btncontainer}>
            <button className="submmit" onClick={onSubmitHandeler}>
              {isLogin ? "create new account " : "login"}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default AuthForm;
