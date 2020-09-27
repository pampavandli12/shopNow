import React from "react";
import classes from "./Main.module.css";

export const MainComponent = (props) => {
  return <main className={classes.main_container}>{props.children}</main>;
};
