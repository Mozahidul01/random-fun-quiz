import React from "react";
import successImg from "../assets/images/success.gif";
import classes from "../styles/Summary.module.css";

export default function Summary() {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={classes.badge}>
        <img src={successImg} alt="Success" />
      </div>
    </div>
  );
}
