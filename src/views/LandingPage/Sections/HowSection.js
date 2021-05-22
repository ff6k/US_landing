import React, { useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import Typography from "@material-ui/core/Typography";

import { UserContext } from "context";

import styles from "assets/jss/material-kit-react/views/landingPageSections/howStyle.js";

const useStyles = makeStyles(styles);

export default function HowSection() {
  const { data } = useContext(UserContext);
  console.log(data);
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        <img
          src={data.defaultAPI + data.selectedData.primary_tab_device_image.url}
          className={classes.topimg}
        />
        <GridItem xs={12} style={{ padding: 0 }}>
          <div className={classes.container}>
            <GridContainer style={{ justifyContent: "center" }}>
              <GridItem
                xs={12}
                style={{
                  padding: 0,
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <h1 className={classes.text}>
                  {data.glb_state.blackbackground_words.find(
                    (ele) => ele.id == data.selectedData.id
                  ).word}
                </h1>
              </GridItem>
            </GridContainer>
          </div>
        </GridItem>
        <div className={classes.bottomCon}>
          <img
            src={require("assets/img/apple.png").default}
            className={classes.bottomIco}
          />
          <img
            src={require("assets/img/google.png").default}
            className={classes.bottomIco}
          />
        </div>
      </GridContainer>
    </div>
  );
}