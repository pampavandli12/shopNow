import React from "react";
import classes from "./HeaderComponent.module.css";
// Appbar imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";

export const HeaderComponent = (state) => {
  const buttonClasses = [classes.white, classes.ml_1];
  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.logo_container}>
          <span className={classes.firstText}>SHOP</span>NOW
        </div>
        <span className={classes.spacer}></span>
        <Tooltip title="Cart" aria-label="Cart">
          <IconButton aria-label="cart">
            <Badge badgeContent={1} className={classes.white}>
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Tooltip>
        <Tooltip title="Add Product" aria-label="Add Product">
          <IconButton aria-label="Add Product" className={classes.white}>
            <AddIcon />
          </IconButton>
        </Tooltip>
        <Link to="/signin">
          <Button className={buttonClasses.join(" ")}>Signin</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
