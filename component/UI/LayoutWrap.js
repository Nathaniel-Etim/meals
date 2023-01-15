import React from "react";
import Layout from "./Layout";
import classes from "./layoutwrapper.module.css";

const LayoutWrap = (props) => {
  return (
    <>
      <Layout />
      <main className={classes.main}> {props.children}</main>
    </>
  );
};

export default LayoutWrap;
