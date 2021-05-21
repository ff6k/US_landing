import React, { useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import { UserContext } from "context";

const useStyles = makeStyles(styles);

export default function WatchSection() {
  const classes = useStyles();

  const {data} = useContext(UserContext);

  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} style={{padding: 0}}>
          <div
            style={{
              backgroundImage:
                "url(" + require("assets/img/video.png").default + ")"
            }}
            className={classes.vcontainer}
          >
            <Button
              color="transparent"
              size="lg"
              href={data.defaultAPI + data.glb_state.demo_video.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.watchbtn}
            >
              <i style={{color: '#fff'}} className="fas fa-play" />
              <span style={{color: '#fff'}}>Watch the demo</span>
            </Button>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
