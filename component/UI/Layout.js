import React, { useState } from "react";
import classes from "./layout.module.css";
import { useRouter } from "next/router";

const Layout = () => {
  const router = useRouter();

  function onGoToMealPageHandelerFn() {
    router.push("/add-newMeal");
  }

  function onGoToLoginHandelerFn() {
    router.push("/auth-login");
  }

  function onGoHomeHandelerFn() {
    router.push("/");
  }

  return (
    <>
      <div className={classes.layoutContainer}>
        <div>
          <h3 className={classes.logo} onClick={onGoHomeHandelerFn}>
            {" "}
            dTb{" "}
          </h3>
        </div>
        <div className={classes.listItem}>
          <li>
            <ul className="btn">
              Cart <spam className={classes.cartNumber}>0</spam>
            </ul>
            <ul className="btn" onClick={onGoToLoginHandelerFn}>
              login / signUp
            </ul>
            <ul className="btn" onClick={onGoToMealPageHandelerFn}>
              Add meal
            </ul>
          </li>
        </div>
      </div>
    </>
  );
};

export default Layout;
