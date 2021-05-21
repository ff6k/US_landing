import React from "react";
import Button from "components/CustomButtons/Button.js";
import PlayArrow from "@material-ui/icons/PlayArrow";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <img
          src={require("assets/img/video.png").default}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <Button color="info" style={{ zIndex: 100, margin: "0 auto" }}>
        <PlayArrow className={classes.icons} /> Watch the Demo
      </Button>
    </div>
  );
}
