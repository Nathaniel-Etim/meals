import React from "react";
import Layout from "./Layout";
import classes from "./layoutWrapper.module.css";

const LayoutWrap = (props) => {
  return (
    <>
      <Layout />
      <main className={classes.main}> {props.children}</main>
    </>
  );
};

export default LayoutWrap;
