import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// // core components
import styles from "assets/jss/material-kit-react/components/bannerStyle.js";

const useStyles = makeStyles(styles);

export default function Banner() {
  const classes = useStyles();

  return (
    <div
      className={classes.banner}
      style={{
        backgroundImage:
          "url(" + require("assets/img/background.png").default + ")",
      }}
    >
      <div
      className={classes.container}
      >
        <img
          className={classes.bannerImg}
          src={require("assets/img/bg.png").default}
        />
        <h2
          className={classes.text}
        >
          A single platform for all your commerce needs, managed from one place.
        </h2>
      </div>
    </div>
  );
}

Banner.propTypes = {
  style: PropTypes.string,
};
