/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#fff",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "#fff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
  },
})(TextField);

const customerStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1rem",
    fontWeight: 600,
    color: "#fff",
    textAlign: "center",
  },
  normal: {
    fontSize: 12,
    fontWeight: 400,
    color: "#fff",
    cursor: "pointer",
  },
  container: {
    maxWidth: "1400px !important",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    color: "#fff",
    borderRadius: "4px 0 0 4px",
  },
  right: { display: "flex", alignItems: "flex-end" },
  emailSubmit: { display: "flex" },
  socialIcon: {width: 25, height: 25, margin: 5}
}));

const data = [
  {
    category: "About",
    elements: [
      { text: "About US", link: "" },
      { text: "Careers", link: "" },
      { text: "Careers", link: "" },
      { text: "Careers", link: "" },
    ],
  },
  {
    category: "Resources",
    elements: [
      { text: "About US", link: "" },
      { text: "Careers", link: "" },
      { text: "Careers", link: "" },
      { text: "Careers", link: "" },
    ],
  },
  {
    category: "Contact",
    elements: [
      { text: "About US", link: "" },
      { text: "Careers", link: "" },
      { text: "Careers", link: "" },
      { text: "Careers", link: "" },
    ],
  },
];

export default function Footer(props) {
  const classes = useStyles();
  const customer = customerStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <Grid container className={customer.container}>
        <Grid item xs={12} sm={8} style={{ marginBottom: 50 }}>
          <Grid container>
            {data.map((e, i) => (
              <Grid item xs={4}>
                <Grid
                  container
                  style={{ alignItems: "center" }}
                  direction="column"
                >
                  <Grid justify="center" item xs={4}>
                    <p className={customer.title}>{e.category}</p>
                  </Grid>
                  {e.elements.map((data) => (
                    <Grid justify="center" item xs={4}>
                      <p className={customer.normal}>{data.text}</p>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          direction="column"
          style={{ justifyContent: "center", marginBottom: 50 }}
        >
          <Grid item xs={10} className={customer.right}>
            <p className={customer.title} style={{ textAlign: "left" }}>
              Subscribe to our newsletters
            </p>
          </Grid>
          <Grid item xs={10} className={customer.emailSubmit}>
            <CssTextField
              variant="outlined"
              id="custom-css-outlined-input"
              InputProps={{
                className: customer.input,
              }}
              size="small"
              placeholder="Enter your email..."
            />
            <Button
              variant="outlined"
              color="primary"
              style={{ borderRadius: "0 4px 4px 0" }}
            >
              Subscribe
            </Button>
          </Grid>
          <Grid item xs={10} className={customer.right}>
            <a href="https://facebook.com" target="_blank">
              <img
                src={require("assets/img/icon/facebook.svg").default}
                style={{ width: 25, height: 25, margin: 5 }}
              />
            </a>
            <a href="https://instagram.com" target="_blank">
              <img
                src={require("assets/img/icon/instagram.svg").default}
                style={{ width: 25, height: 25, margin: 5 }}
              />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img
                src={require("assets/img/icon/twitter.svg").default}
                style={{ width: 25, height: 25, margin: 5 }}
              />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <img
                src={require("assets/img/icon/linkedin.svg").default}
                className={customer.socialIcon}
              />
            </a>
          </Grid>
        </Grid>
        <h2 className={customer.title} style={{ textAlign: "center", fontSize: 12, fontWeight:400 }}>
          All rights reserved. Go! Market is a registered trademark.
        </h2>
      </Grid>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
