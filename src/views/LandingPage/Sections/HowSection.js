import React, { useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
          src={require("assets/img/ipad.png").default}
          className={classes.topimg}
        />
        <GridItem xs={12} style={{ padding: 0 }}>
          <div className={classes.container}>
            <Carousel
              autoPlay={true}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              showArrows={false}
              width={"100%"}
            >
                <GridContainer style={{ justifyContent: "center" }} >
                  <GridItem
                    xs={6}
                    style={{
                      padding: 0,
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <h1 className={classes.text}>{"Grow"}</h1>
                  </GridItem>
                </GridContainer>
                <GridContainer style={{ justifyContent: "center" }} >
                  <GridItem
                    xs={6}
                    style={{
                      padding: 0,
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <h1 className={classes.text}>{"Grow"}</h1>
                  </GridItem>
                </GridContainer>
              {/* {data.glb_state.blackbackground_words.map((obj, i) => {
                return (
                <GridContainer style={{ justifyContent: "center" }} key={i}>
                  <GridItem
                    xs={6}
                    style={{
                      padding: 0,
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <h1 className={classes.text}>{obj.word}</h1>
                  </GridItem>
                </GridContainer>
                )
})} */}
            </Carousel>
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
