import React, { useContext, useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Fade from '@material-ui/core/Fade';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { UserContext } from "context";

import styles from "assets/jss/material-kit-react/views/landingPageSections/howStyle.js";

const useStyles = makeStyles(styles);

export default function HowSection() {
  const { data } = useContext(UserContext);
  const classes = useStyles();
  const [i, setIndex] = useState(0);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    const timer = window.setInterval(() => {
        setFlag(flag => !flag)
    }, 1700);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if(flag)
      setIndex(i => i + 1)
  }, [flag])

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
              <Fade in={flag}>
                <h4 className={classes.text}>
                    {data.glb_state.blackbackground_words[i%data.glb_state.blackbackground_words.length].word}

                  </h4>
              </Fade>

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