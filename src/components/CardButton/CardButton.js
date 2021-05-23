import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    borderColor: "#612EF2",
    maxWidth: "246px",
    minWidth: "200px",
    height: "73px",
    display: "flex",
    margin: "auto 15px",
    "@media(max-width: 650px)": {
      margin: "15px auto",
    }
  }
}));

export default function CardButton(props) {
  const classes = useStyles();

  return (
    <Button
      variant="outlined"
      className={classes.button}
      onClick={props.onPress}
    >
      <img src={require(`assets/img/icon/${props.icon}.png`).default} />
    </Button>
  );
}

CardButton.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func,
};
