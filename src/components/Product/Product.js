import React from "react";
import classes from "./Product.module.css";
// Card Imports
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

//Card imports
import sampleImg from "../../assets/images/sample.jpg";

export const Product = (props) => {
  return (
    <Card className={classes.product_card}>
      <CardActionArea>
        <img src={sampleImg} alt="sampleImg" />
        <p className={classes.centered}>black t shirt</p>
        <h3 className={classes.centered}>$29</h3>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" className={classes.largebtn}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
